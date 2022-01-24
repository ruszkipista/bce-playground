import BElement from "../../BElement.js";
import { html } from "../../libs/lit-html.js";
import './BookmarkPreview.js';
import './BookmarkInput.js';

class BookmarkAdd extends BElement{
    
    view() {
        return html`
           <b-bookmarkpreview></b-bookmarkpreview>
           <b-bookmarkinput></b-bookmarkinput>
        `;
    }

}

customElements.define('b-bookmarkadd',BookmarkAdd);