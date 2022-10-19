import axios from 'axios';
import React, { useState } from 'react';
import { IFetchData } from '../../interfaces';

const AddSkill = (props: IFetchData) => {
  const [name, setName] = useState<string>("")

  const onSubmit = async (event: { preventDefault: () => void}) => {
		event.preventDefault();
		await axios.post('http://localhost:5000/api/skills', { name });
		setName('');
		// props.fetchData();
	};

  return (
    <form onSubmit={onSubmit}>
    <input type="text" value={name} onChange={e => setName(e.target.value)} />
			<br />
			<button>Ajouter un nouveau Skill</button>
		</form>
  );
};

export default AddSkill;
