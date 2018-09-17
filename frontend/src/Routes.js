import React from 'react'
import  {Route} from 'react-router-dom'
import AddContact from './addContact'
import ModifyContact from './modifyContact'
import ContactList from './contactList'
import Home from './home'


const Routes = () => {
    return(
        <div>
            <Route exact path='/' component={Home}/>
            <Route exact path='/contacts' component={ContactList}/>
            <Route exact path='/addContact' component={AddContact}/>
            <Route exact path='/modifyContact/:id' component={ModifyContact}/>
        </div>
    )
};

export default Routes;