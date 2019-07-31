import React, { Component } from 'react';
import axios from 'axios';
import Friend from './Friend';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
            details: [],
            detailViewer: false
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

    getDetails = () => {
        axios.get('http://private-5bdb3-friendmock.apiary-mock.com/friends/id').then(response => {
            this.setState({
                details: response.data
            })
        })
    }

    showDetails = () => {
        this.getDetails();
        this.setState(prevState => {
            return {detailViewer: !prevState.detailViewer}
        })
    }

    render() { 
        let friends = this.state.friends;
        return (
            <div className='freindsContainer'>
                {friends.map(friend => <Friend friend ={friend} showDetails={this.showDetails} />)}
                <DetailView details={this.state.details} detailViewer={this.state.detailViewer} />
            </div>
        );
    }
}

export default Content;