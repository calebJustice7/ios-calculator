import React from 'react';
import './main.css';
import { useDispatch, useSelector } from 'react-redux';

function ToolButton(props){

    const dispatch = useDispatch();
    const operator = useSelector(state => state.currentOperatorVal);

    const selectTool = () => {
        switch(props.tool) {
            case 'AC': 
                dispatch({type: "CLEAR"});
                break;
            case 'X':
                dispatch({type: "SELECT_OPERATOR", operator: 'X'});
                break;
            case '/':
                dispatch({type: "SELECT_OPERATOR", operator: '/'});
                break;
            case '+':
                dispatch({type: "SELECT_OPERATOR", operator: '+'});
                break;
            case '-':
                dispatch({type: "SELECT_OPERATOR", operator: '-'});
                break;
            case '=':
                dispatch({type: 'GET_ANSWER'});
                break;
            case '+/-':
                dispatch({type: 'INVERSE'});
                break;
        }
    }

    return (
        <div onClick={selectTool} className={`${props.class} ${operator === props.tool ? 'selected-operator': ''} button`}>
            {props.tool}
        </div>
    )
}

export default ToolButton;