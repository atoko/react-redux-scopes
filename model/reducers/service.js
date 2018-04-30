export const serviceRequest = (key) => ({
    type: `${key}_NAME_REQUEST`
});
export const serviceFailure = (key, error) => ({
    type: `${key}_NAME_FAILURE`
});

export const serviceSuccess = (key, {status, data}) => ({
    type: `${key}_NAME_SUCCESS`
});
export const defaultState = () => {
    return {
        isSubmitting: false,
        errorMessage: null,
        response
    }
}

export default (key) => (state = defaultState(), action) => {
    const { type } = action;
    switch (action) {
        case `${key}_NAME_REQUEST`:
            return {
                ...state,
                isSubmitting: true
            }
        case `${key}_NAME_SUCCESS`:
            const { response } = action;

            return {
                ...state,
                isSubmitting: false,
                response
            }
        case `${key}_NAME_FAIL`:
            const { errorMessage } = action;

            return {
                ...state,
                isSubmitting: false,
                errorMessage
            }
    }
}