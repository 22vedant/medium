import { useState } from 'react';
import axios from 'axios';

function CreatePost() {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const handleCreate = async () => {
		try {
			const data = await axios.post(
				import.meta.env.VITE_BACKEND_URL_CREATE,
				{
					title,
					content,
				},
				{
					headers: {
						Authorization: localStorage.getItem('token'),
					},
				}
			);
			console.log(data);
		} catch (error) {
			console.error('Error creating post:', error);
		}
	};

	return (
		<div className="flex flex-col justify-center items-center w-full h-screen bg-slate-300 border shadow-md">
			<div>
				<div>
					<input
						type="text"
						placeholder="Enter Title"
						value={title}
						className="p-2 rounded-md w-[300px]"
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div>
					<textarea
						placeholder="Enter Description"
						className="mt-3 p-2 rounded-md w-[300px]"
						value={content}
						onChange={(e) => setContent(e.target.value)}
					/>
				</div>
			</div>
			<button
				onClick={handleCreate}
				className="text-white bg-black w-[300px] p-2 rounded-md mt-3"
			>
				Create
			</button>
		</div>
	);
}

export default CreatePost;
