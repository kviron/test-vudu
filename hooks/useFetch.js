import axios from 'axios'

const useFetch = () => {
  const fetchApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
  });

  return {fetchApi}
}

export default useFetch;
