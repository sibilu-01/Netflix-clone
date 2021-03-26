import React, { useState, useEffect } from 'react'
import "./Nav.css"

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);

            } else handleShow(false)
        });
        return () => {
            window.removeEventListener("scroller");
        }
    }, [])
    return (
      <div className={`nav ${show && "nav_black"}`}>
        <img
          className="nav-logo"
          src="https://img.cinemablend.com/filter:scale/quill/9/a/9/6/6/b/9a966bc199e31e17df14a7c9bdbc45f557f8fd6a.jpg?mw=600"
          alt="netflix_logo"
        />
        <img
          className="nav-avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Change USer Logo"
        />
      </div>
    );
}

export default Nav
