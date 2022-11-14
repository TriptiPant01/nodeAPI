import Env from '../Constant/Env';
import {IAnimalList} from '../Dashboard/List';
import {getUrlOnBackend, postDataToBackend} from './ApiService';

const fetchAnimalList = async (): Promise<IAnimalList> => {
  const response = await getUrlOnBackend(`${Env}/animalDetail`);
  return response;
};

const getAnimalDetailAPI = async (id: Number) => {
  const response = await getUrlOnBackend(`${Env}/animalDetail/${id}`);
  return response?.detail;
};

const postComment = async (
  comments: string,
  customer_id: number,
  animal_id: number,
) => {
  const data = {comments, customer_id: 3, animal_id: 5};
  const response = await postDataToBackend(`${Env}/review`, data);
};

export {fetchAnimalList, getAnimalDetailAPI, postComment};
