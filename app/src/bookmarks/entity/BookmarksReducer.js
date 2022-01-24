import { createReducer } from "../../libs/redux-toolkit.esm.js"
import { 
    bookmarkUpdatedAction, 
    saveNewBookmarkAction,
    clearBookmarkAction,
    deleteBookmarkAction, 
} from "../control/CRUDControl.js";

const initialState = {
    list: [],
    bookmark:{ label:"", link:""}
}

export const bookmarks = createReducer(initialState, (builder) => {
    builder.addCase(bookmarkUpdatedAction, (state, { payload: { name, value } }) => {
        state.bookmark[name] = value;

    }).addCase(saveNewBookmarkAction, (state, { payload }) => {
        state.bookmark["id"] = payload;
        state.list = state.list.concat(state.bookmark);

    }).addCase(clearBookmarkAction, (state) => {
        state.bookmark = initialState.bookmark;

    }).addCase(deleteBookmarkAction, (state, { payload }) => {
        state.list = state.list.filter(bookmark => bookmark.id !== payload);
    });
})