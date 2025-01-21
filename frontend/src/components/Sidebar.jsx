import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi";
import { MdEditDocument } from "react-icons/md";
import Logout from "./Logout";
import { useAuthContext } from "../context/AuthContext";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaCode } from "react-icons/fa";

const Sidebar = () => {
	const { authUser } = useAuthContext();

	return (
		<aside
			className='flex flex-col items-center min-w-12 sm:w-16 sticky top-0 left-0 h-screen py-8
      overflow-y-auto border-r bg-glass'
		>
			<nav className='h-full flex flex-col gap-3'>
				<Link to='/' className='flex justify-center'>
					<img className='h-8' src='/sslg.png' alt='Github Logo' />
				</Link>

				<Link
					to='/'
					className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg 
					hover:bg-gray-800'
				>
					<IoHomeSharp size={20} />
				</Link>

				{!authUser && (
					<Link
						to='/likes'
						className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800'
					>
						<FaHeart size={22} />
					</Link>
				)}

				{!authUser && (
					<Link
						to='/explore'
						className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800'
					>
						<MdOutlineExplore size={25} />
					</Link>
				)}

				{!authUser && (
					<Link
						to='/login'
						className='p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-800'
					>
						<PiSignInBold size={25} />
					</Link>
				)}

				{!authUser && (
					<Link
						to='/signup'
						className='p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-800'
					>
						<MdEditDocument size={25} />
					</Link>
				)}

				{!authUser && (
					<a
						href="https://msgsmpl.onrender.com" // Replace this with your desired URL
						target="_blank" // Opens the link in a new tab
						rel="noopener noreferrer" // Ensures security for external links
						className="p-1.5 focus:outline-none transition-colors duration-200 rounded-lg hover:bg-gray-800"
					>
						<IoChatboxEllipses size={25} />
					</a>
				)}

				{!authUser && (
					<a
						href="http://localhost:8001/" // Replace this with your desired URL
						target="_blank" // Opens the link in a new tab
						rel="noopener noreferrer" // Ensures security for external links
						className="p-1.5 focus:outline-none transition-colors duration-200 rounded-lg hover:bg-gray-800"
					>
						<FaCode size={25} />
					</a>
				)}

				{!authUser && (
					<div className='flex flex-col gap-2 mt-auto'>
						<Logout />
					</div>
				)}
			</nav>
		</aside>
	);
};
export default Sidebar;
