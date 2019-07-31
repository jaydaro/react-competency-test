import React, {Component} from 'react';
import './Styles/DetailView.css';


class DetailView extends Component {
    render() { 
        let {first_name, last_name, img, phone, address, city, state, zipcode, bio, photos, statuses, available} = this.props.details;
        let containerClass = (this.props.detailViewer ? 'detailView' : 'hidden');
        return (
            <div id={containerClass}>
                <header>
                    <img src={img} alt=""/>
                    <div id='info'>
                        <div>{first_name} {last_name}</div>
                        <div>{available}</div>
                        <div>{phone}</div>
                        <div>{address}</div>
                        <div>{city}, {state} {zipcode}</div>
                    </div>
                </header>
                <div>{bio}</div>
                <div>{photos}</div>
                <div>{statuses}</div>
            </div>
        );
    }
}

export default DetailView;