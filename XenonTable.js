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
                const newCell = new XenonTableCell({data: this.data[i][prop]});

                const index = this.columns.findIndex(column => {
                    return column.name === prop;
                });
                this.columns[index].addCell(newCell);

                newRow.addCell(newCell);
            }
            this.rows.push(newRow);
        }
    }

    initEls () {
        for (let row of this.rows) {
            const rowEl = document.createElement('tr');
            rowEl.dataset['id'] = row.id;
            rowEl.classList.add(`row-${row.id}`);
            for (let cell of row.cells) {
                const cellEl = document.createElement('td');
                cellEl.textContent = cell.data;
                rowEl.appendChild(cellEl);
            }
            this.el.appendChild(rowEl);
        }
    }

    switchColumns (from, to) {

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