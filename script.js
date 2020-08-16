const UIElements = {
    button: new XenonButton(),
    checkbox: new XenonCheckBox({checked: true}),
    checkbox1: new XenonCheckBox(),
    player: new XenonPlayer(240),
    circularProgress: new XenonCircularProgress({progress: 20}),
    sidebar: new XenonSidebar(),
    carousel: new XenonCarousel()
};

for (let elName of Object.keys(UIElements)) {
    if (elName !== 'sidebar')
        UIElements[elName].el.classList.add("ui-element");
}

UIElements.button.addEventListener('XenonButton.click', () => {
    UIElements.sidebar.toggle();
});

UIElements.checkbox.addEventListener('CheckBox.EVENT_CHECKED', (e) => console.log(e.detail));
