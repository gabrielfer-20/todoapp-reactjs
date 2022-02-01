import { Todo } from './Todo';
import { fetchTodos } from '../helpers/fetchTodos';

export const TodosContainer = () => {
	const todos = fetchTodos();

	return (
		<section className="w-1/3 mt-8">
			<ul className="w-full px-6 py-4 bg-white shadow-xl rounded-2xl bg-opacity-70 backdrop-blur-xl">
				{!todos.length ? (
					<p>Cargando</p>
				) : (
					todos.map((todo) => <Todo key={todo.id} title={todo.title} id={todo.id} />)
				)}
			</ul>
		</section>
	);
};
