import React from "react";

const Recipie = ({title,calories,image,cautions}) => {
    return(
        <div>
            <h1>{title}</h1>
            <img src={image} alt='' />
            <p>{calories}</p>
            <p>{cautions}</p>
        </div>
    );
}

export default Recipie;