import { useState, ChangeEvent } from 'react';
import { Todo } from '../interfaces';

const initialState: Todo = { id: '', title: '', check: false };

export const useReadInput = () => {
	const [inputValue, setInputValue] = useState<Todo>(initialState);

	//* Lee el valor del input
	const inputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		const { value } = target;
		setInputValue({ ...inputValue, title: value, check: false });
	};

	return { inputChange, inputValue };
};
