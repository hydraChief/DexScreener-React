import React from "react";
import Cards from "./cards";
import '../styles/tokeens.css'
function Tokeens(props) {
    return (
        <>
        <p className="tokeensHeading">Token Search Results</p>
        {props.data.pairs?props.data.pairs.map((item)=>{return <Cards data={item}/>}):<></>}
        </>
    );
  }
  
  export default Tokeens;