import React, {useState} from "react";
import Link from "./Link";

const LinkList = ({links}) => {
    //dont have state so we dont use hook
    //use props object(links) passed from parent component(LinkBox)

    const linksNodes = links.map((link) => {
        return (
            //return how we want to look like one link...add it to new array
            <Link movie={link} key={link.id}/>
        )
    });
    return (
        <div>
           
           {/**return whole new list */}
           {linksNodes}

        </div>
     
    )

}
export default LinkList;
