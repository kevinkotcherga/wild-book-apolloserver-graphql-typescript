import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { IFetchData } from '../../interfaces';

const AddWilder = (props: IFetchData): JSX.Element => {
	const [name, setName] = useState<string>('');
	const [city, setCity] = useState<string>('');

	const onSubmit = async (event: { preventDefault: () => void}) => {
		event.preventDefault();
		await axios.post('http://localhost:5000/api/wilders', { name, city });
		setName('');
		setCity('');
		// props.fetchData();
	};

	return (
		<form onSubmit={onSubmit}>
			<label>Name:</label>
			<input type="text" value={name} onChange={e => setName(e.target.value)} />
			<br />
			<label>City:</label>
			<input type="text" value={city} onChange={e => setCity(e.target.value)} />
			<br />
			<button>Ajouter un nouveau Wilder</button>
		</form>
	);
};

export default AddWilder;
