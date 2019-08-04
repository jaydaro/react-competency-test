import React from 'react';
import Friend from './Friend';

export default class FriendsList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            friendsList: {}
        }
    }

    componentDidMount() {
        fetch('http://private-5bdb3-friendmock.apiary-mock.com/friends')
            .then(response => {
                return response.json();
            })
            .then(json => {
                const jsonPayload = json;
                this.setState({ friendsList: jsonPayload });
            });
    }

    createList() {
        const data = this.state.friendsList;
        if (!data[0]) return;
        return data.map(person => {
            return (
                <Friend
                    {...person}
                />
            )
        });
    }

    render() {
        return (
            <div className="person-list">
                {this.createList()}
            </div>
        )
    }
}