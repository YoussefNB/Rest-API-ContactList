import React from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

class ModifyContact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contactName:'',
            contactPhone:'',
            contactEmail:''
        }
    }

    componentDidMount = () => {
        console.log(this.props.match.params.id);
        
        axios.get(`/contacts/${this.props.match.params.id}`)
        .then(res => {
            this.setState({
                contactName:res.data.contactName,
                contactPhone:res.data.contactPhone,
                contactEmail:res.data.contactEmail
            }, () => console.log(this.state)
            ) 
        })        
        .catch(err => console.log(err)) 
    }



    handleModifying = () => {  
        axios.put(`/contacts/modify/${this.props.match.params.id}`
        ,{contactName : this.state.contactName ,
         contactPhone : this.state.contactPhone ,
         contactEmail : this.state.contactEmail}
         )
    }

    render() {
        return(
        <div className="modify-contact-container">
            <h1>Modify Contact</h1>
            <form style={{ display:'flex' , flexDirection:'column', justifyContent:'center' , alignItems:'center'}}>
                <label>Name : </label>
                <input name='name' placeholder={this.state.contactName} onChange={ e => this.setState({contactName:e.target.value}, () => console.log(this.state))}></input>
                <label>Phone : </label>
                <input name='phone' placeholder={this.state.contactPhone} onChange={ e => this.setState({contactPhone:e.target.value}, () => console.log(this.state))}></input>
                <label>Email : </label>
                <input name='email' placeholder={this.state.contactEmail} onChange={ e => this.setState({contactEmail:e.target.value}, () => console.log(this.state))}></input>
                    <Link to='/contacts'>
                        <button onClick={this.handleModifying}>Confirm</button>
                    </Link>
            </form>
        </div>)
    }
}

export default ModifyContact;