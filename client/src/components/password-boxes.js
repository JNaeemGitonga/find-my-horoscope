import React from 'react';
import {connect} from 'react-redux';
import {enterPass,setConfirmPass,valid} from '../actions';
import InputError from './inputerror';

import './login-page.css'
export class PasswordBoxes extends React.Component {
        
    setConfirm(q) {
        this.props.dispatch(setConfirmPass(q))
    }
    
    validate(dog) {
        if (dog === this.props.password) {
            this.props.dispatch(valid(true,false))
        } else {
            this.props.dispatch(valid(false,true))
        }
    }
    validate2(dog) {
        if (dog === this.props.confirmPassword) {
            this.props.dispatch(valid(true,false))
        } else {
            this.props.dispatch(valid(false,true))
        }
    }
    render() { 
       
        return (
            <div className='the-pass-box' >
                
                <div className='password-fields password1'>
                <label>Password </label>
                <input
                    className="password"
                    placeholder="Password"
                    onChange={(e) => { this.props.dispatch(enterPass(e.target.value)) }}
                    onKeyUp={(e) =>{
                         this.validate2(e.target.value) 
                    }} 
                />
                </div>
                <div className='password-fields cpassword'>
                    <label>Confirm Password </label>
                <input
                    ref="confirmPassword"
                    type='password'
                    className="confirmPassword"
                    placeholder="Confirm password"
                    onChange={(e) => this.props.dispatch(setConfirmPass(e.target.value))}
                    onKeyUp={(e) =>{
                         this.validate(e.target.value) 
                    }}
                />
                </div>
                {!this.props.valid && <InputError errorMessage={this.props.errorMessage} visible={this.props.errorVisible} />}
            </div>
        )
    }
}

export const mapStateToProps = state => {
    return{
        errorMessage:state.zodiacReducer.errorMessage,
        errorVisible:state.zodiacReducer.errorVisible,
        password:state.zodiacReducer.password,
        confirmPassword:state.zodiacReducer.confirmPassword
    }
}
export default connect(mapStateToProps)(PasswordBoxes) 