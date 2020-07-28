import React from "react";
import PropTypes from 'prop-types';
import './index.css';

const Row = ({left, right}) => {
    return (
        <div className="row mb2">
            <div className="col">
                {left}
            </div>
            <div className="col">
                {right}
            </div>
        </div>
    );
};

Row.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node
};

export default Row;