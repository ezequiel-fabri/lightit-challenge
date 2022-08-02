import axios from "axios";

export const getAberturas = () => {
  return axios.get(
    "https://us-central1-prueba-front-280718.cloudfunctions.net/aberturas"
  );
};

export const getEquipamientos = () => {
  return axios.get(
    "https://us-central1-prueba-front-280718.cloudfunctions.net/equipamiento"
  );
};

export const getTerminaciones = () => {
  return axios.get(
    "https://us-central1-prueba-front-280718.cloudfunctions.net/terminaciones"
  );
};
