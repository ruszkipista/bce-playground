import { createReducer } from "../../libs/redux-toolkit.esm.js"
import { 
    bookmarkUpdatedAction, 
    deleteBookmarkAction, 
    newBookmarkAction,
    clearBookmarkAction,
} from "../control/CRUDControl.js";

const initialState = {
    list: [],
    bookmark:{ label:"", link:""}
}

const removeBookmarkWithId = (list, id) => {
    return list.filter(bookmark => bookmark.id !== id);
}

export const bookmarks = createReducer(initialState, (builder) => {
    builder.addCase(bookmarkUpdatedAction, (state, { payload: { name, value } }) => {
        state.bookmark[name] = value;
    }).addCase(newBookmarkAction, (state, { payload }) => {
        state.bookmark["id"] = payload;
        state.list = state.list.concat(state.bookmark);
    }).addCase(clearBookmarkAction, (state) => {
        state.bookmark = initialState.bookmark;
    }).addCase(deleteBookmarkAction, (state, { payload }) => {
        state.list = removeBookmarkWithId(state.list,payload);
    });
})