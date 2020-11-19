import React from 'react';
import './main.css';
import { useSelector } from 'react-redux';

function Display(){

    const display = useSelector(state => state.currentNumVal);

    return (
        <div className="display">
            {display === null ? <div className="empty-display">0</div> : display % 1 != 0 ? display.toFixed(3) : display}
        </div>
    )
}

export default Display;