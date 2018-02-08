import React, {Component,Fragment} from 'react';
import List from './List'


class Input extends Component {
    constructor(props){
        super(props);
        
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    getInitialState(){
        return { 'submitted': false };
    }

    handleChange(e){
        this.setState({ chirp: e.target.value });
        
    }

    handleSubmit(e){
        e.preventDefault;
        this.setState({ 'submitted': true });
    } 

    
// value: this.state.value 
    render(){
        if(this.state.submitted) {
            return <List />
        }
        return(
            <Fragment>
                <form className="App" onSubmit={ this.handleSubmit }>
                    <textarea
                    name="formBox"
                    type="text" 
                    placeholder="how are you feeling?" 
                    value={this.value} 
                    onChange={ this.handleChange }
                    ></textarea>
                    <input 
                    type="submit" 
                    placeholder="submit" 
                    value="submit"
                    onSubmit= { this.handleSubmit }
                    />
                    {/* <h1>{this.state.chirp}</h1> */}
                </form>
           
            </Fragment>
        )
    }
}

{/* <form onSubmit={this.usernameSubmitHandler} className="chirpUser">
    <h1 className="chriper-title"> Welcome to Chirper!</h1>
    <div>
        <input type="text" onChange={this.usernameChangeHandler} placeholder="username" required />
    </div>
    <input type="submit" value="Submit" />
</form> */}

export default Input;