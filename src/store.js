import { legacy_createStore as createStore} from 'redux'
import rootred from "./redux/reducer/main";

  // function for storing data to localStorage
const saveToLocalStorage = (state) => {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem("carts", serialisedState);
      } catch (e) {
        console.warn(e);
      }
}
    //function for getting data from localStorage
const loadFromLocalStorage  = () => {
    try {
        const serialisedState = localStorage.getItem("carts");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
      } catch (e) {
        console.warn(e);
        return undefined;
      }
}

const store = createStore(rootred,loadFromLocalStorage());

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;