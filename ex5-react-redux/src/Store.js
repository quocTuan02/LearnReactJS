import numReducer from "./reducers/numReducer";
import statusRenducer from "./reducers/editStatusReducer";

let redux = require('redux');
var oldState = {
    num: ['man hinh', 'chuot', 'ban phim'],
    editStatus: true
};
var reducer1 = (state = oldState, action) => {
    switch (action.type) {
        case "CHANGE_STATUS": {
            return {...state, editStatus: !state.editStatus};
        }
        case "ADD_NEW": {
            return {...state, num: [...state.num, action.newItem]};
        }
        case "DELETE": {
            return {
                ...state,
                num: state.num.filter(
                    (value, number) => number !== action.number
                )
            };
        }

        default: {
            return state;
        }
    }
};


const allRenducers = redux.combineReducers({
    num: numReducer,
    editStatus: statusRenducer
});


var store1 = redux.createStore(allRenducers);


store1.subscribe(() => {
    console.log(JSON.stringify(store1.getState()));
});

store1.dispatch({
    type: 'CHANGE_STATUS',
});

store1.dispatch({
    type: "ADD_NEW",
    newItem: "tai nghe"
});

store1.dispatch({
    type: "DELETE",
    number: 0
});

export default store1;