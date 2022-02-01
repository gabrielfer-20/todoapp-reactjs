import UserDefaultImage from '../assets/default-profile.png';

export const NavegationBar = () => {
	return (
		<nav className="py-3 bg-white">
			<div className="flex items-center justify-between w-10/12 mx-auto">
				<h1 className="text-2xl font-bold">Todo App</h1>

				<button className="flex items-center px-4 py-2 bg-white rounded-full shadow-md">
					<img src={UserDefaultImage} alt="default-profile" />
					<span className="ml-2 text-lg font-semibold">Gabriel</span>
				</button>
			</div>
		</nav>
	);
};
