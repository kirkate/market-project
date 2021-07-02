import { h } from "preact";
import {
    useParams
  } from "react-router-dom";


const PageID = () =>{ 
    let { id } = useParams();
return (
<p>Page ID: {id}</p>)};

export default PageID;

