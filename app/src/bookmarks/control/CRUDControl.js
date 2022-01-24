import { createAction } from "../../libs/redux-toolkit.esm.js";
import store from "../../store.js";

export const bookmarkUpdatedAction = createAction("bookmarkUpdatedAction");
export const bookmarkUpdated = (name, value) => {
    store.dispatch(bookmarkUpdatedAction({name,value}));
}

export const saveNewBookmarkAction = createAction("newBookmarkAction");
export const saveNewBookmark = _ => {
    const id = Date.now();
    store.dispatch(saveNewBookmarkAction(id));
}

export const clearBookmarkAction = createAction("clearBookmarkAction");
export const clearBookmark = _ => {
    store.dispatch(clearBookmarkAction());
}

export const deleteBookmarkAction = createAction("deleteBookmarkAction");
export const deleteBookmark = (id) => {
    store.dispatch(deleteBookmarkAction(id));
}