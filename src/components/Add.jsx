import React from 'react';


function Add(props) {
    return(
        <div>
        <input type="text" onChange={(e)=> this.onChange}/>
        <button onClick={props.onAdd}>submit</button>
        </div>
    )
}

export default Add;