import React from 'react';
import {ReactComponent as Logo} from '../../assets/logo.svg'
import './logg.css'
class Log extends React.Component {
    state= {
        email: '',
        pwd: ''
    }

    handleChange = (e) => {
        const {name,value} = e.target
        this.setState({[name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }
    render() {
        return (
            <div className='div-login'>
                <div className='div-login-logo'>
                    <Logo/>
                </div>
                <div>
                    <form>
                        <input type='email' name='email' placeholder='email...' required onChange></input>
                        <input type='password' name='pwd' placeholder='password' required onChange></input>
                        <button onSubmit={this.handleSubmit}>Admin Log In </button>
                    </form>
                </div>
            </div>
        )
    }
}


export default Log;