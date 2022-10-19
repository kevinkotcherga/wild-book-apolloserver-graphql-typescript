export interface IWilder {
  id : number;
  name: string;
  city: string;
  upvote: ISkills[];
  // fetchData: () => Promise<void>;
}

export interface ISkills {
  id: number;
  upvote: number;
  skill: ISkill;
  // fetchData: () => Promise<void>;
}

export interface ISkill {
  id: number;
  name: string;
}

export interface IFetchData {
  // fetchData: () => Promise<void>;
}

export interface ISkillName {
  id: number;
  name: string;
  upvote:IUpvote[];
}

export interface IUpvote {
  id: number;
  upvote: number;
  wilder:IWilder;
}
