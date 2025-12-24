import { useState, useEffect } from 'react';

// Robust mock hook that always returns data
export const useDevelopments = (params = {}) => {
  const [developments, setDevelopments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Return empty array initially, components will use their fallback
    setDevelopments([]); 
    setLoading(false);
  }, []);

  return { developments, loading, error };
};

export const useBlogPosts = (params = {}) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Return empty array initially, components will use their fallback
    setPosts([]);
    setLoading(false);
  }, []);

  return { posts, loading, error };
};