import React from 'react';
import Square from './Square';
import PropTypes from 'prop-types';

const style = {
    border: '4px solid darkblue',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};



const Board = (props) => (
    <div style={style}>
        {props.squares.map((square, i) => {
            return <Square key={i} value={square} onClick={() => props.onClick(i)}></Square>
        })}
    </div>
)


Board.propTypes = {
    squares: PropTypes.any,
    onClick: PropTypes.func,
}

export default Board; 
