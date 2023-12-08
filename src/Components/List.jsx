import React from "react";

function List(props){
    return(
        <ol>
            <li>{props.chr1}</li>
            <li>{props.chr2}</li>
            <li>{props.chr3}</li>
            <li>{props.chr4}</li>
        </ol>
    );
}

export default List;