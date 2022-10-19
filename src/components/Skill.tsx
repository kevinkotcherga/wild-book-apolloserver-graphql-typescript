import React from 'react';
import { ISkills } from '../../interfaces';
import { BubbleVote } from './styled-components/BubbleVote';
// import { BubbleUpvote } from './styled-components/BubbleUpvote';
import axios from 'axios';

const Skill = (props: ISkills): JSX.Element => {
  const addVote = async (): Promise<void> => {
    await axios.put(`http://localhost:5000/api/upvotes/${props.id}/upvote`);
    // props.fetchData();
  }

  const removeVote = async (): Promise<void> => {
    await axios.put(`http://localhost:5000/api/upvotes/${props.id}/negativevote`);
    // props.fetchData();
  }

	return (
		<li>
      <BubbleVote onClick={addVote}>+</BubbleVote>
      {props.skill.name}
			{/* <BubbleUpvote up={false} upvote={true}>{props.upvote}</BubbleUpvote> */}
      <BubbleVote onClick={removeVote}>-</BubbleVote>
      {/* <button>Supprimer skill</button> */}
		</li>
	);
};

export default Skill;
