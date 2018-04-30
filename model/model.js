export default class scope {
    key = "scope_";
    dispatch = null;
    displayName = null;

    constructor(displayName = "Field") {
        this.displayName = displayName;
    }
    withDispatch = (dispatch) => {
        this.dispatch = dispatch;

        return this;
    }
    withKey = (key) => {
        this.key = key;

        return this;
    }
    formatErrorMessage = (errorMessage = "&nbsp") => {

        if (Array.isArray(errorMessage)) {
            if (errorMessage.length === 0) {
                errorMessage = "&nbsp";
            }
        } else {
            if (errorMessage.trim() === "") {
                errorMessage = "&nbsp";
            }
        }
    
        return {
            state: errorMessage === "&nbsp" ? '' : 'error',
            errorMessage
        }
    }        
    validate(value) {
        return this.formatErrorMessage();
    }
    reducer = () => {
        return (state = {}, action) => {
            //Empty reducer
            return state;
        }
    }
};
