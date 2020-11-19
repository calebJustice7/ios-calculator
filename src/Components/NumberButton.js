import React from 'react';
import './main.css';
import { useDispatch, useSelector } from 'react-redux';

function NumberButton(props){

    const dispatch = useDispatch();
    const isSelected = useSelector(state => state.operatorSelected);
    const oldNum = useSelector(state => state.oldNum);

    const selectNum = () => {
        if(!isSelected) {
            dispatch({
                type: "SELECT_NUM",
                number: props.number
            })
        } else if(isSelected && oldNum === null) {
            dispatch({
                type: 'NEW_NUM',
                number: props.number
            })
        } else if(isSelected && oldNum !== null) {
            dispatch({
                type: 'SELECT_NUM',
                number: props.number
            })
        }
    }

    return (
        <div onClick={selectNum} className={props.number !== 0 ? "button number" : "button number zero"}>
            {props.number}
        </div>
    )
}

export default NumberButton;