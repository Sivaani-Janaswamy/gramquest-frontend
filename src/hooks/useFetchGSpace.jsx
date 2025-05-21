import { useState, useEffect } from 'react';
import api from '../services/api';

const useFetchGSpace = (id) => {
  const [gspace, setGspace] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setError("Invalid GSpace ID.");
      setLoading(false);
      return;
    }

    const fetchGSpaceData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await api.get(`/gspaces/${id}`);
        setGspace(response.data);
      } catch (fetchError) {
        setError("Failed to load the community space.");
      } finally {
        setLoading(false);
      }
    };

    fetchGSpaceData();
  }, [id]);

  return { gspace, loading, error };
};

export default useFetchGSpace;