import React from 'react';
import { connect } from 'react-redux';

const generateContainer = (reducerKey, scope) => {
    return (class extends React.Component {
        static scopeWithKey = {};
        static connect() {
            for (const key in scope) {
                if (scope.hasOwnProperty(key)) {
                    this.scopeWithKey[key] = scope[key].withKey(key);
                }
            }
            return connect(this.mapStateToProps, this.mapDispatchToProps, this.mergeProps)(this);
        }
        static reducer() {
            const { scopeWithKey } = this;
            let scopeReducers = {};
            for (const key in scopeWithKey) {
                if (scopeWithKey.hasOwnProperty(key)) {
                    const reducer = scopeWithKey[key].reducer();
                    scopeReducers[key] = reducer;
                }
            }
        
            return {
                [name]: (state = {}, action) => {
                    let newState = {};
                    for (const key in model) {
                        if (model.hasOwnProperty(key)) {
                            newState[key] = modelReducers[key](state[key], action);
                        }
                    }
                    return newState;
                }
            }    
        }        
        static mapStateToProps = (state) => {
            return state[reducerKey]
        }
        static mapDispatchToProps = (dispatch, ownProps) => {
            const { scopeWithKey } = this;
            for (const key in scopeWithKey) {
                if (scopeWithKey.hasOwnProperty(key)) {
                    const keyModel = scopeWithKey[key];
                    props[key] = keyModel.withDispatch(dispatch)
                }
            }

            return props;
        }
        static mergeProps = () => {
            
        }
    }).connect()
}

export default generateContainer;