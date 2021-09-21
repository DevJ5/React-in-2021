import React from 'react';

interface IProps {
  people: {
    name: string;
    profileImgUrl?: string;
    age: number;
    note?: string;
  }[];
}

const PeopleList: React.FC<IProps> = ({ people }) => {
  const renderPeople = (): JSX.Element[] => {
    return people.map(({ name, profileImgUrl, age, note }) => (
      <li className="people__list-item">
        <div className="people__person">
          <img className="people__img" src={profileImgUrl} alt={name} />
          <p className="people__name">{name}</p>
        </div>
        <div className="people__age">{age} years old</div>
        <div className="people__note">{note}</div>
      </li>
    ));
  };

  return (
    <div className="people">
      <ul className="people__list">{renderPeople()}</ul>
    </div>
  );
};

export default PeopleList;
