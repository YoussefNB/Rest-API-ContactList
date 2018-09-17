import React from 'react'
import axios from 'axios'

import Contact from './contact'
import './css/contactList.css'


class ContactList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactList:[]
        }
    };


    componentDidMount = () => {
        axios.get('/contacts/all').then(res => { 
            const contactList = res.data
            this.setState( { contactList } , () => console.log(this.state))
        })
    };
    

    render() {
        return(
            <div className="contact-list">
                {this.state.contactList.map((element,index) => {
                    return(<Contact key={index} _id={element._id} name={element.contactName} phone={element.contactPhone} email={element.contactEmail}/>);
                    })
                }
            </div>);
    };
}

export default ContactList;