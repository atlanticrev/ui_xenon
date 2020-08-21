import XenonButton from './XenonButton.js';
import XenonCheckbox from './XenonCheckbox.js';
import XenonPlayer from './XenonPlayer.js';
import XenonCircularProgress from './XenonCircularProgress.js';
import XenonSidebar from './XenonSidebar.js';
import XenonCarousel from './XenonCarousel.js';
import XenonTable from './XenonTable.js';

import './styles/index.scss';

const UIElements = {
    button: new XenonButton(),
    checkbox: new XenonCheckbox({checked: true}),
    checkbox1: new XenonCheckbox(),
    player: new XenonPlayer(240),
    circularProgress: new XenonCircularProgress({progress: 20}),
    sidebar: new XenonSidebar(),
    carousel: new XenonCarousel(),
    table: new XenonTable(),
};

for (let elName of Object.keys(UIElements)) {
    if (elName !== 'sidebar')
        UIElements[elName].el.classList.add("ui-element");
}

UIElements.button.addEventListener('XenonButton.click', () => {
    UIElements.sidebar.toggle();
});

UIElements.checkbox.addEventListener('CheckBox.EVENT_CHECKED', (e) => console.log(e.detail));
