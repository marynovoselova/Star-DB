import React from "react";
import icon from '../../images/Death_Star_II_Render.png';

const ErrorPage = () => {
    return (
        <div className="jumbotron text-center">
            <img src={icon} style={{margin: "1rem", width: "15rem"}} alt="Page not found!"/>
            <h2>Page not found!</h2>
        </div>
    );
};

export default ErrorPage;