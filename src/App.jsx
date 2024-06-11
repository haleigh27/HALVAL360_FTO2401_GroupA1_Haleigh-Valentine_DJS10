import { useState, useEffect } from 'react';
import fetchBlogPosts from './api';
import './index.css';

function App() {
	const [blogPosts, setBlogPosts] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetchBlogPosts()
			.then((data) => setBlogPosts(data))
			.catch((error) => setError(error.message));
	}, []);

	return (
		<div>
			{error ? (
				<h1 className="error">{error}</h1>
			) : (
				<div className="posts">
					<h1>Posts</h1>
					{blogPosts.map((post) => (
						<div key={post.id}>
							<h2>{post.title}</h2>
							<p>{post.body}</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default App;
