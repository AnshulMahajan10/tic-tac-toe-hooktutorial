import React from 'react';
import PropTypes from 'prop-types';

const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
};


const Square = (props) => (
    <button style={style} onClick={props.onClick}>
        {props.value}
    </button>
);

Square.propTypes = {
    value: PropTypes.any,
    onClick: PropTypes.func,
}

export default Square; 