import React from 'react' 
import { Link } from "react-router-dom";

class Home extends React.Component {
    render() {
        return(
        <div className='home-container'>
            <h1>My contact app ! :)</h1>
            <Link to='/contacts'>
                <button>View list </button>
            </Link>
            <Link to='/addContact'>
            <button>Add contact </button>
            </Link>
        </div>)
    }
}

export default Home;