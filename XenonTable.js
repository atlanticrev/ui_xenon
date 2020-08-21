import XenonBase from "./XenonBase";
import data from "./tableData";

export default class XenonTable extends XenonBase {

    static get defaults () {
        return {
            data: data
        };
    }

    constructor(options) {
        super();
        this.options = Object.assign({}, XenonTable.defaults, options);
        // this.el = this.createTemplate();
        this.data = this.options.data;
        this.columns = [];
        this.rows = [];
        this.init();
        this.render(document.body);
    }

    // createTemplate () {
    //     return this.createEl(`
    //         <table>
    //             ${this.rows.map(row => )}
    //         </table>
    //     `);
    // }

    init () {
        for (let prop of Object.keys(this.data[0])) {
            this.columns.push(new XenonTableColumn({name: prop}));
        }

        for (let i = 0; i < 5; i++) {
            const newRow = new XenonTableRow();
            for (let prop of Object.keys(data[i])) {
                const newCell = new XenonTableCell({rootEl: XenonTableRow.el, data: data['prop']});
                const index = this.columns.findIndex(column => {
                    console.warn(column.name, prop);
                    return column.name === prop;
                });
                const columnToAdd = this.columns[index];
                columnToAdd.push(newCell);
                newRow.push(newCell);
            }
            this.rows.push(newRow);
        }
    }

}

class XenonTableCell extends XenonBase {

    static get defaults () {
        return {
            type: 'data',
            data: 'nope',
            rowId: null,
            columnId: null,
        };
    }

    constructor(options) {
        super();
        this.options = Object.assign({}, XenonTableCell.defaults, options);
        this.data = this.options.data;
        // this.el = this.createTemplate();
        // this.init();
        // this.render(this.options.rootEl);
    }

    // createTemplate () {
    //     return this.createEl(`
    //         <td>${this.data}</td>
    //     `);
    // }
    //
    // init () {}

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
        // this.el = this.createTemplate();
        // this.init();
        // this.render(document.body);
    }

    // createTemplate () {
    //     return this.createEl(`
    //         <tr></tr>
    //     `);
    // }

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
        this.cells = [];
        this.init();
    }

    init () {}

    addCell (cell) {
        this.cells.push(cell);
    }

}

XenonTableColumn.lastId = 0;