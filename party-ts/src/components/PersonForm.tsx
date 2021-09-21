import React, { useState } from 'react';
import { IState as Props } from '../App';

interface IProps {
  people: Props['people'];
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>;
}

const PersonForm: React.FC<IProps> = ({ people, setPeople }) => {
  const [person, setPerson] = useState({
    name: '',
    age: NaN,
    imageUrl: '',
    note: '',
  });

  const updateForm = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setPerson((prevPerson) => {
      const { name, value } = event.target;
      return { ...prevPerson, [name]: value };
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!person.name || !person.age || !person.imageUrl) return;
    setPeople([...people, person]);
    setPerson({
      name: '',
      age: NaN,
      imageUrl: '',
      note: '',
    });
  };

  const { name, age, imageUrl, note } = person;
  return (
    <div className="person-form-wrapper">
      <form className="person-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          name="name"
          onChange={updateForm}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          name="age"
          onChange={updateForm}
        />
        <input
          type="text"
          placeholder="Image Url"
          value={imageUrl}
          name="imageUrl"
          onChange={updateForm}
        />
        <textarea
          placeholder="note"
          value={note}
          name="note"
          onChange={updateForm}></textarea>
        <button className="person-form__btn">Add</button>
      </form>
    </div>
  );
};

export default PersonForm;
