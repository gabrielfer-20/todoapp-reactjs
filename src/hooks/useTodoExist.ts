import { fetchTodos } from '../helpers/fetchTodos';

export const useTodoExist = (title: string) => {
	const todos = fetchTodos();
	return todos.filter((todo) => todo.title === title);
};
