import api from '../services/api';

const usePostActions = (postId, refreshPosts) => {
  const isLoggedIn = () => !!localStorage.getItem('token');

  const handleAction = async (type, active, setHasActive) => {
    if (!isLoggedIn()) return alert('Login required');

    const method = active ? 'delete' : 'put';

    try {
      await api({
        method,
        url: `/posts/${postId}/${type}`,
      });

      refreshPosts();
      setHasActive(!active);
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/posts/${postId}`);
      refreshPosts();
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    }
  };

  const handleUpdate = async (editedPost) => {
    try {
      await api.put(`/posts/${postId}`, editedPost);
      refreshPosts();
      return true;
    } catch (e) {
      alert(e.response?.data?.message || e.message);
      return false;
    }
  };

  return { handleAction, handleDelete, handleUpdate };
};

export default usePostActions;
