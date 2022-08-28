import { legacy_createStore as createStore} from 'redux'
import rootred from "./redux/reducer/main";

const store = createStore(
    rootred
);

export default store;