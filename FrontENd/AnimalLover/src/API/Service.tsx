import Env from '../Constant/Env';
import {IAnimalList} from '../Dashboard/List';
import {getUrlOnBackend} from './ApiService';

const fetchAnimalList = async (): Promise<IAnimalList> => {
  const response = await getUrlOnBackend(`${Env}/animalDetail`);
  return response;
};

const getAnimalDetailAPI = async (id: Number) => {
  const response = await getUrlOnBackend(`${Env}/animalDetail/${id}`);
  return response?.detail;
};

export {fetchAnimalList, getAnimalDetailAPI};
