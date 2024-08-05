import { Link } from 'react-router-dom';

function Topbar() {
	return (
		<div className="flex justify-between items-center bg-black text-white p-5 font-mono ">
			<div>
				<Link to="/landing">Blog</Link>
			</div>
			<div className="flex justify-around ">
				<div className="mr-3 hover:underline">
					<Link to={'/create'}>Create</Link>
				</div>
				<div className="hover:underline ">
					<Link to={'/me'}>Me</Link>
				</div>
			</div>
		</div>
	);
}

export default Topbar;
