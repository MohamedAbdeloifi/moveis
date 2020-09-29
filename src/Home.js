import React from 'react';
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function Home() {
  return (
    <div>
        <NavLink exact activeClassName="active" to="/series">
            <img src="./logo_series.jpg"></img>
        </NavLink>
        <NavLink exact activeClassName="active" to="/movies">
            <img src="./logo_movies.jpg"></img>
        </NavLink>
    </div>
  );
}

export default Home;
