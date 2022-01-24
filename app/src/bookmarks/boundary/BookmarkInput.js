import BElement from "../../BElement.js";
import { html } from "../../libs/lit-html.js";
import { 
    bookmarkUpdated, 
    saveNewBookmark,
    clearBookmark
} from "../control/CRUDControl.js";

class BookmarkInput extends BElement{

    view() {
        const { bookmarks: { bookmark: { label,link } } } = this.state;

        return html`
        <form>
            <label class="label">Label:
                <input class="input is-primary" required name="label" value="${label}" placeholder="label" @keyup=${e=>this.onUserInput(e)} >
            </label>
            <label class="label">Link:
                <input class="input is-primary" required name="link" value="${link}" placeholder="link" @keyup=${e=>this.onUserInput(e)} >
            </label>
            <button class="button is-primary" @click="${e => this.onButtonClick(e)}">save bookmark</button>
        </form>
        `;
    }

    onUserInput({ target: { name,value } }) { 
        bookmarkUpdated(name,value);
    }

    onButtonClick(event) {
        // extract form element from event->target
        const { target: { form } } = event;
        event.preventDefault();
        form.reportValidity();
        if(form.checkValidity()){
            saveNewBookmark();
            clearBookmark();
            form.reset();
        }
    }
}

customElements.define('b-bookmarkinput',BookmarkInput);