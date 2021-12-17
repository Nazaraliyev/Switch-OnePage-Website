import React, { useState } from "react";
import Button from "../Button";

function Header() {
  const [Manu, setManu] = useState(false)
  const [Search, setSearch] = useState(false)
  const [ChangeData, setChangeData] = useState({
    manu: {
      button: "fas fa-bars",
      class: "flex",
    },
    search: {
      button: "fas fa-search",
      class: "",
    },
  });

  const clickedManu = () => {
    setManu(!Manu)
    console.log(Manu);
    if(Manu) {
      setChangeData({
        ...ChangeData,
        manu : {
          ...ChangeData.manu,
          button : 'fas fa-times',
          class : 'flex'
        }
      })
    }else{
      setChangeData({
        ...ChangeData,
        manu : {
          ...ChangeData.manu,
          button : 'fas fa-bars',
          class : 'display-none flex'
        }
      })
    }
  }
  const clickedSearch = () => {
    setSearch(!Search)
    console.log(Search);
    if(Search) {
      setChangeData({
        ...ChangeData,
        search : {
          ...ChangeData.search,
          button : 'fas fa-times',
          class : ''
        }
      })
    }else{
      setChangeData({
        ...ChangeData,
        search : {
          ...ChangeData.search,
          button : 'fas fa-search',
          class : 'display-none'
        }
      })
    }
  }
  return (
    <div id="header-block">
      <div className="container">
        <span id="header-logo">
          <a href = '' target = '_blank'><h1>Switch</h1></a>
        </span>
        <div id = 'header-button-group' className = 'flex'>
            <i id = 'header-manu-button' class={ChangeData.manu.button} onClick={clickedManu}></i>
            <div id="header-input-button">
              <i class={ChangeData.search.button} onClick = {clickedSearch}></i>
            </div>
            </div>
        <div id="header-flexbox" className="flex">
          <nav id="header-manu">
            <ul className={ChangeData.manu.class}>
              <li>
                <div></div>
                <a href="#header-block">home</a>
              </li>
              <li>
                <div></div>
                <a href="#what-we-do">what we do?</a>
              </li>
              <li>
                <div></div>
                <a href="#testimonials">testimonial</a>
              </li>
              <li>
                <div></div>
                <a href="#footer-container">contact us</a>
              </li>
            </ul>
          </nav>
          <div id="header-input-wrapper">
            <div id="header-input" className = {ChangeData.search.class}>
              <input id="input" type="text" placeholder="Search" />
              <button>
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="home-container">
        <div id="home-content-center">
          <div id="home-content-flex" className="flex">
            <h1>Art is Eternal Happiness</h1>
            <Button name="work with us" />
          </div>
        </div>
        <div id="home-down-button">
          <button className="btn"><a href = '#what-we-do'>Scroll Down</a></button>
        </div>
      </div>
    </div>
  );
}

export default Header;
