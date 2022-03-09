import React from "react";
import {Link} from "react-router-dom";

export default class Navbar extends React.Component{
    render(){
        return(
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">ReactRouterDOM</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link " to="/">Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/contact">Contact</Link>
                        </li>
                        </ul>
                </div>
              </div>
            </nav>
        </div>
        )
    }
}
// <a href="/home.php"></a> yang kita pakai di php dulu
// <link to="home"></link> yang kita pakai di reactjs