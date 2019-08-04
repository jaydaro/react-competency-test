import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Friend from './Friends/Friend';
import FriendsList from './Friends/FriendsList';
import classes from '../less/main.less'; // parcel magic... error

export default class FriendsApp extends Component {
    render() {
        return (
            <div>
                <FriendsList />
            </div>
        )
    }
}

ReactDOM.render(
    <FriendsApp />,
    document.getElementById('app')
);