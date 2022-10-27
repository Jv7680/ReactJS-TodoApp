import React from "react";
import './Home.scss';
import logo from '../../../logo.svg';


class Home extends React.Component {

    render() {
        return (
            <div className="homePage">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Home Page</p>
            </div>
        );
    }
}

export default Home;