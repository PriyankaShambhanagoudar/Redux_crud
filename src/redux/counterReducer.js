import * as type from "./actionType";

const initialState = {
    counter: 0,
    showCounter: true



};
const counterReducers = (state = initialState, action) => {
    switch (action.type) {

        case type.INCREMENT:
            return {
                counter: state.counter + 1,
                showCounter: state.showCounter,
            };

        case type.DECREMENT:
            return {

                counter: state.counter - 1,
                showCounter: state.showCounter,
            };

        case type.INCREASE:
            return {

                counter: state.counter + 10,
                showCounter: state.showCounter,
            };
        case type.TOGGLECOUNTER:
            return {
                showCounter: !state.showCounter,
                counter: state.counter

            }


        default:
            return state;
    }
}

export default counterReducers;