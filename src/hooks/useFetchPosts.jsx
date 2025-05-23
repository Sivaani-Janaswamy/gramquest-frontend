import { useState, useEffect } from 'react';
import api from '../services/api'

const useFetchPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refreshPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get('/posts'); // Your API endpoint
      setPosts(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Failed to fetch posts:', err);
      setError('Failed to load posts.');
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshPosts();
  }, []); 

  return { posts, refreshPosts, loading, error };
};

export default useFetchPosts;