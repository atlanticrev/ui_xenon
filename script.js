const checkbox = new CheckBox({checked: true});
const checkbox1 = new CheckBox();

const player = new Player(240);

const sidebar = new Sidebar();

document.addEventListener('click', () => {
    sidebar.toggle();
});

checkbox.addEventListener('CheckBox.EVENT_CHECKED', (e) => console.log(e.detail));
