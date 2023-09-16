import React from "react";
import Cards from './cards';
import '../styles/pairs.css';
function Pairs(props) {
    return (
        <>
        <p className="pairsHeading">Pair Search Results</p>
        {props.data.pairs?props.data.pairs.map((item)=>{return <Cards data={item}/>}):<></>}
        </>
    );
  }
  
  export default Pairs;