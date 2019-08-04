import React, { Component } from 'react';
import { shape } from 'prop-types';

export default function Friend(person) {
    return (
        <div className="person-tile">
            <img className="person-image" src={person.img}/>
            <div className="person-text">
                <div className="person-details">
                    <div className="person-fullname">{person.first_name} {person.last_name}</div>
                    <div className="person-status">{person.status}</div>
                </div>
                <button>Select</button>
            </div>
        </div>
    );
}

Friend.propTypes = {
    person: shape().isRequired
}
