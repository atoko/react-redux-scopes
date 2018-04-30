import model from './model';
import serviceReducer from "./reducers/service";

export default class serviceModel extends model {
    reducer = () => {
        return serviceReducer(this.key);
    }
}