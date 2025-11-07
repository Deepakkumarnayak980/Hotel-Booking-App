import { useEffect, useState } from 'react';
import axiosInstance from '../axios-instance';

function useQuery({ url, options = {} }) {
  const [queryState, setQueryState] = useState({
    data: null,
    isLoading: false,
    error: null,
  });

  async function fetchData() {
    setQueryState({
      data: null,
      isLoading: true,
      error: null,
    });

    try {
      await new promise((resolve) =>setTimeout(resolve,2000))
      const response = await axiosInstance(url, options);
      setQueryState({
        data: response.data,
        isLoading: false,
        error: null,
      });
    } catch (e) {
      setQueryState(prev => ({
        ...prev,
        error: e,
      }));
    } finally {
      setQueryState(prev => ({
        ...prev,
        isLoading: false,
      }));
    }
  }

  useEffect(() =>{
    fetchData();
  },[url]);

  return {...queryState}

}

export default useQuery