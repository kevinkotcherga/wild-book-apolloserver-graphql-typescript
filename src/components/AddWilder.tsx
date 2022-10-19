import React from 'react';
import { useState } from 'react';
import { IFetchData } from '../../interfaces';
import { gql, useMutation } from '@apollo/client';

const CREATE_WILDER = gql`
  mutation Mutation($data: WilderInput!) {
  createWilder(data: $data) {
    id
  }
}
`

const AddWilder = (props: IFetchData): JSX.Element => {
  const [doCreate] = useMutation(CREATE_WILDER);
	const [name, setName] = useState<string>('');
	const [city, setCity] = useState<string>('');

	const onSubmit = async (event: { preventDefault: () => void}) => {
		event.preventDefault();
    const { data } = await doCreate({
      variables: {
        data: {
          name,
          city
        }
      }
    })
    console.log(data);
		setName('');
		setCity('');
    props.onWilderCreated();
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
