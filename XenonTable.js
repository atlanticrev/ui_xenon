import XenonBase from "./XenonBase";

export default class XenonTable extends XenonBase {

    static get defaults () {
        return {};
    }

    constructor(options) {
        super();
        this.options = Object.assign({}, XenonTable.defaults, options);
        this.data = this.options.data;
        this.columns = [];
        this.rows = [];
        this.el = this.createTemplate();
        this.init();
        this.initEls();
        this.render(document.body);
    }

    createTemplate () {
        return this.createEl(`
            <table class="xenon-table"></table>
        `);
    }

    init () {
        for (let prop of Object.keys(this.data[0])) {
            this.columns.push(new XenonTableColumn({name: prop}));
        }

        for (let i = 0; i < this.data.length; i++) {
            const newRow = new XenonTableRow();

            for (let prop of Object.keys(this.data[i])) {
                const index = this.columns.findIndex(column => {
                    return column.name === prop;
                });
                const newCell = new XenonTableCell({data: this.data[i][prop], columnId: index});
                this.columns[index].addCell(newCell);

                newRow.addCell(newCell);
            }
            this.rows.push(newRow);
        }
    }

    initEls () {
        this.el.innerHTML = '';
        for (let row of this.rows) {
            row.el = document.createElement('tr');
            row.el.dataset['id'] = row.id;
            row.el.classList.add(`row-${row.id}`);
            for (let cell of row.cells) {
                cell.el = document.createElement('td');
                cell.el.classList.add(`column-${cell.columnId}`);
                cell.el.textContent = cell.data;
                row.el.appendChild(cell.el);
            }
            this.el.appendChild(row.el);
        }
    }

    switchColumns (from, to) {
        for (let row of this.rows) {
            const tmp = row.cells[to].data;
            row.cells[to].data = row.cells[from].data;
            row.cells[from].data = tmp;
        }
        this.initEls();
    }

    changeColumnWidth (index, width) {
        this.columns[index].cells[0].el.style.setProperty('--width', width);
    }

}

class XenonTableCell extends XenonBase {

    static get defaults () {
        return {
            type: 'data',
            data: null,
            rowId: null, // @todo fill it
            columnId: null, // @todo fill it
        };
    }

    constructor(options) {
        super();
        this.options = Object.assign({}, XenonTableCell.defaults, options);
        this.columnId = this.options.columnId;
        this.data = this.options.data;
    }

}

class XenonTableRow extends XenonBase {

    static get defaults () {
        return {
            id: null,
            height: '50px'
        };
    }

    constructor(options) {
        super();
        this.options = Object.assign({}, XenonTableRow.defaults, options);
        this.id = ++XenonTableRow.lastId;
        this.cells = [];
    }

    init () {}

    addCell (cell) {
        this.cells.push(cell);
    }

}

class XenonTableColumn extends XenonBase {

    static get defaults () {
        return {
            id: null,
            name: null,
            width: '150px'
        };
    }

    constructor(options) {
        super();
        this.options = Object.assign({}, XenonTableColumn.defaults, options);
        this.id = ++XenonTableColumn.lastId;
        this.name = this.options.name;
        this.cells = [];
        this.init();
    }

    init () {}

    addCell (cell) {
        this.cells.push(cell);
    }

}

XenonTableColumn.lastId = 0;
XenonTableRow.lastId = 0;