import { store } from "./store";
import { doAddTodo, doToggleTodo } from "./creator/todo";
import { doSetFilter } from "./creator/filter";

export const PlainRedux = () => {
  console.log("initial state:");
  console.log(store.getState());

  const unsubscribe = store.subscribe(() => {
    console.log("store update, current state:");
    console.log(store.getState());
  });

  store.dispatch(doAddTodo("0", "Learn Redux"));
  store.dispatch(doAddTodo("1", "Learn MobX"));

  store.dispatch(doToggleTodo("1"));

  store.dispatch(doSetFilter("COMPLETED"));

  unsubscribe();
};
