import { MouseEvent } from 'react';
import { deleteDoc, doc, getDoc, updateDoc } from '@firebase/firestore';
import { db } from '../db/firebase';

interface Props {
	title: string;
	id: string;
}

export const Todo = ({ title, id }: Props) => {
	const deleteTodo = async (e: MouseEvent<HTMLButtonElement>) => {
		const id = e.currentTarget.parentElement?.attributes[0].nodeValue;
		return await deleteDoc(doc(db, 'todos', `${id}`));
	};

	const checkTodo = async (e: MouseEvent<HTMLButtonElement>) => {
		const id = e.currentTarget.parentElement?.attributes[0].nodeValue;
		const docSnap = await getDoc(doc(db, 'todos', `${id}`));
		return await updateDoc(doc(db, 'todos', `${id}`), {
			check: !docSnap.data()?.check,
		});
	};

	return (
		<li
			data-id={id}
			className="flex items-center justify-between pb-4 mb-3 border-b border-gray-200">
			<div className="flex items-center">
				<button
					onClick={(e) => checkTodo(e)}
					className="mr-3 text-2xl text-gray-500">
					<i className="uil uil-square"></i>
				</button>
				<p className="text-xl text-slate-900">{title}</p>
			</div>

			<button onClick={(e) => deleteTodo(e)} className="text-2xl text-red-500">
				<i className="uil uil-trash-alt"></i>
			</button>
		</li>
	);
};
