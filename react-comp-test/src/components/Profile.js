import React from 'react';
import Modal from './Modal'

const People = ({ people }) => {
  return (
    <div>
      <h1 className="text-center">People</h1>
      {people.map((person, id) => (
        <div key={id} className="row person-box">
          <div className="col">
            <img src={person.img} alt={person.first_name} />
          </div>
          <div className="col">
            <h4>{person.first_name + ' ' + person.last_name}</h4>
            <p>{person.status}</p>
          </div>
          <Modal />
        </div>
      ))}
    </div>
  )
};

export default People;