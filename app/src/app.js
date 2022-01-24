import { Router } from "./libs/vaadin-router.js";
import './bookmarks/boundary/BookmarkAdd.js';
import './bookmarks/boundary/BookmarkList.js';
import store from "./store.js";
import { save } from "./localstorage/control/StorageControl.js";

store.subscribe(_ => { 
    const state = store.getState();
    save(state);
})
const outlet = document.getElementById('router-outlet');
const router = new Router(outlet);
router.setRoutes([
  {path: '/',    component: 'b-bookmarklist'},
  {path: '/add', component: 'b-bookmarkadd'},
  {path: '(.*)', component: 'b-bookmarklist'}
]);
console.log("router initialized");