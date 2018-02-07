import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from './Input'

class User extends Component {
    constructor(props){
        super(props)
    }


    render() {
        return (
         <div>
             <p>user: @fendi6</p>
             <p>chirp: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quasi provident beatae quas dignissimos perferendis consectetur quibusdam,</p>
         </div>
        <div>
            <p>user: @hsohsio</p>
            <p>chirp: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quasi provident beatae quas dignissimos perferendis consectetur quibusdam,</p>
        </div>
        <div>
            <p>user: @fenderson767</p>
            <p>chirp: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quasi provident beatae quas dignissimos perferendis consectetur quibusdam,</p>
        </div>

        )
    }
}
// set{this.something} so that when the submit button is clicked, then the <p> in the chirp will change based on the value input
export default User;