'use client';

import axios from 'axios';
import { useCallback, useState } from 'react';

const baseURL = 'https://british-english-school.vercel.app/api/';
// 'http://localhost:3000/api/';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (options, applyData = () => {}) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios({
        url: baseURL + options?.url,
        method: options?.method ?? 'GET',
        data: options?.data ?? null,
      });
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const data = await response.data;

      applyData(data);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, []);

  return { sendRequest, isLoading, error };
};

export default useHttp;
