import { useState, useEffect } from 'react';
import fetchBlogPosts from '../api';
import '../index.css';

export default function BlogPosts() {
	const [blogPosts, setBlogPosts] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		fetchBlogPosts()
			.then((data) => setBlogPosts(data))
			.catch((error) => setError(error.message))
			.finally(setLoading(false));
	}, []);

	if (loading) {
		// Render loading indicator
		return <h1 className="loading">Loading...</h1>;
	}

	if (error) {
		// Render error message
		return <h1 className="error">{error}</h1>; // Render error message
	}

	return (
		// Render blog posts
		<div className="posts">
			<h1>Posts</h1>
			{blogPosts.map((post) => (
				<div key={post.id}>
					<h2>{post.title}</h2>
					<p>{post.body}</p>
				</div>
			))}
		</div>
	);
}
