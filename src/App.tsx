import { CreateTodo } from './components/CreateTodo';
import { NavegationBar } from './components/NavegationBar';
import { TodosContainer } from './components/TodosContainer';

export const App = () => {
	return (
		<div className="min-h-screen bg-center bg-no-repeat bg-cover font-roboto bg">
			<NavegationBar />

			<div className="flex flex-col items-center justify-center">
				<header>
					<input
						type="text"
						className="mt-12 text-3xl font-bold text-center text-white placeholder-white bg-transparent outline-none font-semiboldx"
						placeholder="Escribe tu Proyecto Aqui"
					/>
				</header>

				<CreateTodo />
				<TodosContainer />
			</div>
		</div>
	);
};
