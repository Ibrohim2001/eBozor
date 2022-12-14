import { useState, useEffect } from 'react';
import axios from "axios";

export const useGetData = (URL) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function loadData() {
      setLoading(true);
      axios.get(URL)
          .then(response => {
            setData(response.data);
            setLoading(false);
            // console.log(response.data);
          }).catch(err => {
            console.log(err);
            setLoading(false);
          }).finally(() => {
            setLoading(false);
          })
    }

    loadData();

    return () =>  loadData();
  }, [URL]);

  return {data, loading}

}