import React from "react";
import icon from '../../images/Baby_Yoda.png';

const HomePage = () => {
    return (
        <div className="jumbotron text-center">
            <h2>Welcome to StarDB!</h2>
            <img src={icon} style={{margin: "1rem", width: "15rem"}} alt="Welcome!"/>
        </div>
    );
};

export default HomePage;