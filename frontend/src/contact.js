import React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'

import './css/contact.css'

class Contact extends React.Component {
    constructor(props) {
        super(props);
    };

    handleDelete = (id) => {
        axios.delete(`/contacts/delete/${this.props._id}`)
        .then(res => res.data)
        .catch(err => console.log(err))
    }

    render() {
            return(
            <div className='contact-card'>
                <div className="contact-info">
                    <h1>Contact name : </h1>
                    <span className='information'>{this.props.name}</span>
                </div>
                <div className="contact-info">
                <h1>Contact phone : </h1>
                    <span className='information'>{this.props.phone}</span>
                    </div>
                <div className="contact-info">
                    <h1>Contact email : </h1>
                    <span className='information'>{this.props.email}</span>
                </div>
                <div className="buttons">
                    <Link to={`/modifyContact/${this.props._id}`}>
                        <button type='button'>Update</button>
                    </Link>
                    <Link to='/'>
                        <button type='button' onClick={() => this.handleDelete(this.props._id)}>Delete</button>
                    </Link>
                </div>
            </div>
        )
    }
};

export default Contact;