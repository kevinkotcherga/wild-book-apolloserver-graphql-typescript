import axios from 'axios';
import { ISkill } from '../../interfaces';

type Props = ISkill &  {
  wilderId: number;
  fetchData: () => Promise<void>;
}

const AddSkillToWilder = (props:Props) => {
  const addSkill = async () => {
  let skillId = props.id;
  let wilderId = props.wilderId;
  await axios.post('http://localhost:5000/api/upvotes', { wilderId, skillId });
  props.fetchData();
	};

  return (
    <option onClick={addSkill}>{props.name}</option>
  );
};

export default AddSkillToWilder;
