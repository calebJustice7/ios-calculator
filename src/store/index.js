const initState = {
    currentNumVal: null,
    oldNum: null,
    currentOperatorVal: null,
    operatorSelected: false
}

function reducer(state = initState, action){
    if(action.type === 'SELECT_NUM') {
        console.log(state.currentNumVal);
        return {
            ...state,
            currentNumVal: state.currentNumVal === null ? action.number : String(state.currentNumVal) + String(action.number)
        }
    } 
    else if(action.type === 'NEW_NUM'){
        return {
            ...state,
            oldNum: state.currentNumVal,
            currentNumVal: action.number
        }
    } else if(action.type === 'CLEAR'){
        return {
            ...state,
            currentNumVal: null,
            currentOperatorVal: null,
            operatorSelected: false,
            oldNum: null
        }
    } else if(action.type === 'SELECT_OPERATOR') {
        return {
            ...state,
            operatorSelected: true,
            currentOperatorVal: action.operator,
        }
    } else if(action.type === 'INVERSE'){
        if(state.currentNumVal === null) {
            return state;
        }
        return {
            ...state,
            currentNumVal: state.currentNumVal * -1
        }
    } else if(action.type === 'GET_ANSWER') {
        let ans = 0;
        switch (state.currentOperatorVal) {
            case 'X': 
                ans = Number(state.oldNum) * Number(state.currentNumVal);
                break;
            case '/': 
                ans = Number(state.oldNum) / Number(state.currentNumVal);
                break;
            case '+': 
                ans = Number(state.oldNum)+ Number(state.currentNumVal);
                break;
            case '-': 
                ans = Number(state.oldNum) - Number(state.currentNumVal);
                break;
        }
        return {
            ...state,
            operatorSelected: false,
            currentOperatorVal: null,
            oldNum: null,
            currentNumVal: ans
        }
    } else {
        return state;
    }
}

export default reducer;