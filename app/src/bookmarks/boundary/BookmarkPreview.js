import BElement from "../../BElement.js";
import { html } from "../../libs/lit-html.js";

class BookmarkPreview extends BElement {

    extractState({ bookmarks : { bookmark } }) {
        return bookmark;
    }
    
    view() {
        return html`
        <div>
            bookmark: 
            <a href="${this.state.link}">${this.state.label}</a>
            (${this.state.link})
        </div>
        `;
    }
}
customElements.define('b-bookmarkpreview',BookmarkPreview);