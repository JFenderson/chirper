import React, {Component,Fragment} from 'react';


class Input extends Component {
    constructor(props){
        super(props);
        this.state={ 
            formBox: "" };
        
        this.handleChange = this.handleChange.bind(this);
    }
    // getInitialState(){
    //     return { text: this.props.text }
    // }
    handleChange({ target }){
        this.setState({
            [target.name]:target.value 
        });
        console.log('keyed');
        
    }

    handleSubmit(e){
        console.log('click');
        this.onSubmit(this.state.value);
    }

    publish(){
        console.log( this.state.formBox );
    }


// value: this.state.value 
    render(){
        return(
            <Fragment>
                <form className="App" onSubmit={this.handleSubmit}>
                    <textarea 
                    name="formBox"
                    type="text" 
                    placeholder="how are you feeling?" 
                    value={this.state.value}
                    onChange={ this.handleChange}
                    ></textarea>
                    <input 
                    type="submit" 
                    placeholder="submit" 
                    value="submit"
                    onSubmit= { this.handleSubmit }
                    />
                    <h1>{this.state.formBox}</h1>
                </form>
           
            </Fragment>
        )
    }
}



export default Input;