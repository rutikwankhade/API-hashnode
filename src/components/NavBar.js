import React from 'react';
import './App.css';

const NavBar = () => {

    return (
        <div className="nav">
            <h2> Rutik Wankhade</h2>
            <div className="icons">
                <a href="https://github.com/rutikwankhade/API-hashnode">
                    <i class="fa fa-2x fa-github-alt" aria-hidden="true"></i>
                </a>
                <a href="https://github.com/rutikwankhade/API-hashnode">
                    <i class="fa fa-2x fa-twitter" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    );
}

export default NavBar;