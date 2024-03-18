// import React from 'react';

const Watch = ({watchProps}) => {
    const {id,price,name,phone}=watchProps;
    console.log(watchProps)


    // css file added 
    const stylesheet = {
        border:"2px solid red",
        margin: "15px",
        padding: "15px",
        borderRadius: "15px"
    }
    return (
        <div  style={stylesheet} >
            <h2>ID: {id} </h2>
            <h2>Name: {name}</h2>
            <h2>Phone: {phone}</h2>
           
            
        </div>
    );
};

export default Watch;