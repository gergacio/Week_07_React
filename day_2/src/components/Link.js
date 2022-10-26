import React from "react";
//props comming from parent(LinkedList)
const Link = ({movie}) => {
    return (
         <a href={movie.url}>{movie.name}</a>

    )
};
export default Link;
