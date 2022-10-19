import React, { useState } from 'react';
import blank_profile from './../assets/8bRN5ga.png';
// import Skill from './Skill';
import styles from './Wilder.module.css';
import { ISkillName, IWilder } from '../../interfaces';
import Skill from './Skill';
// import AddSkillToWilder from './AddSkillToWilder';

const Wilder = (props: IWilder): JSX.Element => {
  const [skillIdSelect, setSkillIdSelect] = useState<number>();
  const [skills, setSkills] = useState<ISkillName[]>([]);
	// const deleteWilder = async (): Promise<void>  => {
	// 	await axios.delete(`http://localhost:5000/api/wilders/${props.id}`);
	// 	props.fetchData();
	// };

	// const updateWilder = async (): Promise<void>  => {
	// 	await axios.put(`http://localhost:5000/api/wilders/${props.id}`);
	// };

	// const fetchSkills = async (): Promise<void> => {
	// 	const skills = await axios.get('http://localhost:5000/api/skills');
  //   console.log(skills.data)
	// 	setSkills(skills.data);
	// };

	// useEffect(() => {
	// 	fetchSkills();
	// }, []);

  // const addSkill = async () => {
  //   let skillId = skillIdSelect;
  //   let wilderId = props.id;
  //   await axios.post('http://localhost:5000/api/upvotes', { wilderId, skillId });
  //   props.fetchData();
	// };

	return (
		<article className={styles.card}>
			<img src={blank_profile} alt="Jane Doe Profile" />
			<h3>{props.name}</h3>
			<h4>{props.city}</h4>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat.
			</p>
			<h4>Wild Skills</h4>
			<ul className={styles.skills}>
				{props.upvote.map(upvoteElement => (
					<Skill id={upvoteElement.id} upvote={upvoteElement.upvote} skill={upvoteElement.skill} key={upvoteElement.skill.id}/>
				))}
			</ul>
      {/* <select onChange={(e) => {setSkillIdSelect(Number(e.target.value))}}>
      {skills.map(skill => (
        <option value={skill.id}>{skill.name}</option>
      ))}
      </select> */}
      {/* <button onClick={addSkill}>Ajouter un Skill</button>
			<button onClick={updateWilder}>Modifier Wilder</button>
			<button onClick={deleteWilder}>Supprimer Wilder</button> */}
		</article>
	);
};

export default Wilder;
