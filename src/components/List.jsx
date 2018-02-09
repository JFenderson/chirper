import React, { Component } from 'react';


function List(props){
    const renderList = props.list.map((chirp) =>{
    return(
            <div key={chirp.id}>
                <div>
                    <h4>{chirp.message}</h4>
                    <p>{chirp.user}</p>
                </div>
            </div>
            );     
     });      
     return (
        <ul>
            {renderList};
        </ul>
    );
   
}
   
export default List;