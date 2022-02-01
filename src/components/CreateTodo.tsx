import { FormEvent } from 'react';
import { useReadInput } from '../hooks/useReadInput';
import { addDoc, collection } from '@firebase/firestore';
import { db } from '../db/firebase';
import { useTodoExist } from '../hooks/useTodoExist';

import AddBtn from '../assets/add-btn.svg';

export const CreateTodo = () => {
	const { inputChange, inputValue } = useReadInput();
	const todoExist = useTodoExist(inputValue.title);

	const createTodo = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (todoExist.length > 0) {
			console.log('Este Ya existe');
			return;
		}
		addDoc(collection(db, 'todos'), inputValue);
	};

	return (
		<form onSubmit={createTodo} className="relative w-1/3 mt-6">
			<input
				type="text"
				onChange={inputChange}
				className="w-full px-6 py-4 text-lg bg-white border rounded-lg outline-none "
				placeholder="¿Que haras hoy?"
			/>
			<button type="submit" className="absolute w-11 top-2 right-3">
				<img src={AddBtn} alt="btn" />
			</button>
		</form>
	);
};
