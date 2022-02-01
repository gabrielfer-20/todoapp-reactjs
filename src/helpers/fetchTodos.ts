import { collection, getDocs, onSnapshot } from '@firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../db/firebase';
import { Todo } from '../interfaces';

export const fetchTodos = () => {
	const [todos, setTodo] = useState<Todo[]>([]);

	useEffect(() => {
		onSnapshot(collection(db, 'todos'), (querySnapshot) => {
			const allTodos: Todo[] = querySnapshot.docs.map((todo) => {
				const { title, check } = todo.data();
				return { id: todo.id, title, check };
			});
			return setTodo(allTodos);
		});
	}, []);

	return todos;
};
