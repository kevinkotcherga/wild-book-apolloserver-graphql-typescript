import React, { useState } from 'react';
import './App.css';
import { IWilder } from '../interfaces';
import Wilder from './components/Wilder';
// import AddWilder from './components/AddWilder';
// import AddSkill from './components/AddSkill';
import { useQuery, gql } from '@apollo/client';

const GET_WILDERS = gql`
  query getWilders {
    wilders {
      name
      city
      upvote {
        skill {
          name
        }
      }
    }
  }
`;

function App(): JSX.Element {
  const { loading, error, data } = useQuery(GET_WILDERS);
	const [wilders, setWilders] = useState<IWilder[]>([]);

	return (
		<div>
			<header>
				<div className="container">
					<h1>Wilders Book</h1>
				</div>
			</header>
			<main className="container">
				<h2>Wilders</h2>
				<section className="card-row">
					{data?.wilders.map((wilder: any) => (
						<Wilder
							name={wilder.name}
							city={wilder.city}
							upvote={wilder.upvote}
							id={wilder.id}
							// fetchData={() => fetchData()}
							key={wilder.id}
						/>
					))}
				</section>
			</main>
      {/* <h2>Ajouter un Wilder</h2>
			<AddWilder fetchData={() => fetchData()} />
      <br/>
      <h2>Ajouter un Skill</h2>
      <AddSkill fetchData={() => fetchData()}/> */}
			<footer>
				<div className="container">
					<p>&copy; 2022 Wild Code School</p>
				</div>
			</footer>
		</div>
	);
}

export default App;
