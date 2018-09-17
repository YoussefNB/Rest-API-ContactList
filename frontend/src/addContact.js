import React from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

class AddContact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contactName:'',
            contactPhone:'',
            contactEmail:''
        }
    }


    //Handeling the input changes : could be done with this.setState = {e.target.name : e.target.value} 
    //but the input's name must be the same as the state's variables names.
    handleNameChange = (event) => {
        this.setState({contactName:event.target.value} , () => console.log(this.state.contactName))
    }
    handlePhoneChange = (event) => {
        this.setState({contactPhone:event.target.value} , () => console.log(this.state.contactPhone))
    }
    handleEmailChange = (event) => {
        this.setState({contactEmail:event.target.value} , () => console.log(this.state.contactEmail))
    }

    handleAdding = () => {
        axios.post('/contacts/add', //could enter the following parameter OR {...this.state}
            {
            contactName: this.state.contactName,
            contactPhone: this.state.contactPhone,
            contactEmail: this.state.contactEmail
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    render() {
        return(
        <div className="modify-contact-container">
        <h1>Add Contact</h1>
        <form style={{ display:'flex' , flexDirection:'column', justifyContent:'center' , alignItems:'center'}}>
            <label>Name : </label>
            <input onChange={ (event) => this.handleNameChange(event) } placeholder='Name . . .'></input>
            <label>Phone : </label>
            <input onChange={ (event) => this.handlePhoneChange(event)} placeholder='Phone . . .'></input>
            <label>Email : </label>
            <input onChange={ (event) => this.handleEmailChange(event)} placeholder='Email . . .'></input>
            <Link to='/contacts'>
                <button onClick={this.handleAdding}>Confirm</button>
            </Link>
        </form>
    </div>)
    }
}

export default AddContact;