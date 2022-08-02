import { useEffect, useState } from "react";
import { getAberturas, getEquipamientos, getTerminaciones } from "../service";

const services = {
  Aberturas: getAberturas,
  Equipamiento: getEquipamientos,
  Terminaciones: getTerminaciones,
};

export const useFetch = (category, initialValue) => {
  const [data, setData] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);
  const service = services[category];
  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    service()
      .then(({ data }) => {
        if (isMounted) setData(data);
      })
      .finally(() => setIsLoading(false));
    return () => (isMounted = false);
  }, [category]);

  return [data, isLoading];
};
