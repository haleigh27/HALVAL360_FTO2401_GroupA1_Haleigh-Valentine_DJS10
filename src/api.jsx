// Fetch blog posts
export default function fetchBlogPosts() {
	// prettier-ignore
	return fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
		if (!response.ok) {
			throw new Error('Data fetching failed');
		}
		return response.json();
	});
}
