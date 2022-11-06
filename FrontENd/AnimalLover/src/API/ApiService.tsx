import axios from 'axios';

async function getUrlOnBackend(url: string, params?: any, token?: string) {
  const req = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    },
    url,
    params,
  };
  console.log(url);

  try {
    const response = await axios(req);

    return response.data;
  } catch (err) {
    console.log(err);
  }
}

async function postDataToBackend(url: string, data: any, token: string) {
  const req = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    },
    url,
    data,
  };

  try {
    const response = await axios(req);

    return response;
  } catch (err) {
    console.log(err);
  }
}

export {postDataToBackend, getUrlOnBackend};
