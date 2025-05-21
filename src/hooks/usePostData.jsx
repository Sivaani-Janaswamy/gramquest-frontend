import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';

export const usePostData = () => {
  const [posts, setPosts] = useState([]);
  const { isAuthenticated } = useAuth();

  const fetchPosts = async () => {
    if (isAuthenticated) {
      try {
        const response = await api.get('/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setPosts([]); // Clear posts on error
      }
    } else {
      setPosts([]);
    }
  };

  const refreshPosts = async () => {
    await fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, [isAuthenticated]);

  return { posts, refreshPosts };
};
