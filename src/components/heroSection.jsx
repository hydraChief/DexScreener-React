import React, { useState } from "react";
import Navbar from'./navbar'
import RainbowButton from './rainbowButton'
import SearchBar from "./searchBar";
import '../styles/HeroSection.css'
import Tokeens from "./tokeens";
import Pairs from "./pairs";


function HeroSection(props) {
  let [search,setSearch]=useState({search:{inputValue:'cake'}});
  let [click,setClick]=useState({clicked:false,className:""});
  let [data,setData]=useState({data:{pairs:""}});

  function handleNavclicks(e){
    return setClick;
  }
  function handleSearchBtn(e){
    return [search,setData];
  }

  let handleInputChange = (event) => {
    setSearch({search: event.target.value });
  };


  return (
    <div className='section'>
      <div className="navbar">
        <Navbar onClick={(e)=>handleNavclicks(e)} />
      </div>
      <div className='main'>
        <div className='top'>
          <RainbowButton />
          <SearchBar value={search.inputValue} onChange={handleInputChange} onClick={handleSearchBtn}/>
        </div>
        <div className="AllCards">
          {click.clicked?<Pairs data={data.data}/>:<Tokeens data={data.data}/>}
        </div>
      </div>
      <div className="footer">
      </div>
    </div>
  );
  }
  
  export default HeroSection;