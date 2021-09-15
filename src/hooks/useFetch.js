import axios from 'axios';
import useSWR from 'swr';

const fetcher = async url => {
  const response = await axios.get(`/api/moviedb?url=${url}`);
  return response.data;
};

export default function useFetch(url) {
  const { data, error } = useSWR(url, fetcher);

  return { data, error };
}
