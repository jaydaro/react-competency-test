import React, { Component } from 'react';
import axios from 'axios';
import Friend from './Friend';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
            details: []
        }
    }

    componentDidMount(){
        this.getFriends();
    }

    getFriends = () => {
        axios.get('http://private-5bdb3-friendmock.apiary-mock.com/friends').then(response => {
            this.setState({
                friends: response.data
            })
        })
    }

    render() { 
        let friends = this.state.friends;
        return (
            <div className='freindsContainer'>
                {friends.map(friend => <Friend friend ={friend} />)}
            </div>
        );
    }
}

export default Content;