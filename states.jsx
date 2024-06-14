import { useState, useEffect } from 'react';
import fetchBlogPosts from './api';

const useBlogPosts = () => {
	const [blogPosts, setBlogPosts] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetchBlogPosts()
			.then((data) => setBlogPosts(data))
			.catch((error) => setError(error.message));
	}, []);

	return { blogPosts, error };
};

export default useBlogPosts;
