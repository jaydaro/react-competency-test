import React, { Component } from 'react';
import './Styles/Friend.css';


class Friends extends Component {
    render() { 
        let {first_name, last_name, img, status} = this.props.friend;
        return (
            <div className='friend'>
                <img className='overviewImg' src={img} alt=""/>
                <div className='nameAndStatus'>
                    <div className='fullName'>{first_name} {last_name}</div>
                    <div className='status'>{status}</div>
                </div>
                <button onClick={this.props.showDetails}className='showDetsButton'>Select</button>
            </div>
        );
    }
}

export default Friends;