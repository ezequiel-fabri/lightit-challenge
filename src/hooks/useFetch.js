import { useEffect, useState } from "react";
import { getAberturas, getEquipamientos, getTerminaciones } from "../service";
import { ABERTURAS, EQUIPAMIENTO, TERMINACIONES } from "../constants";

const services = {
  [ABERTURAS]: getAberturas,
  [EQUIPAMIENTO]: getEquipamientos,
  [TERMINACIONES]: getTerminaciones,
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
