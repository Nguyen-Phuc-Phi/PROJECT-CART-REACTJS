import * as types from "../constants/actionTypes";
import * as messages from "../constants/message"
var initState = messages.MSG_WELCOME;

const message = (state = initState, action) => {
    switch (action.type) {
        case types.CHAGE_MESSAGE:
            console.log("action mess",action);
            return action.message;
        default: return state;
    }
}
export default message