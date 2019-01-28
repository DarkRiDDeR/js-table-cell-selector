import {_gOptions, TableCellSelector} from "./app";
import {isEmpty} from "./funcs";

export default class Actions {
    obSelector;
    table;

    constructor (obSelector) {
        this.obSelector = obSelector;
        this.table = this.obSelector.getTable();
    }

    copy (c1, c2) {
        let ar = Array(c2[0] - c1[0] + 1 ).fill().map(
            () => Array(c2[1] - c1[1] + 1 )
        );

        //if (_gOptions.usingSizeMatrix) {
        const matrix = this.obSelector.getSizeMatrix();
        let rows = this.table.getElementsByTagName("tr");
        for (let iy = c1[0]; iy <= c2[0]; iy++) {
            let cells = rows[iy].getElementsByTagName("td");
            let itd = 0;
            for (let ix = 0; ix < matrix[iy].length; ix++) {
                if (!(matrix[iy][ix][0] < 0) && !(matrix[iy][ix][1] < 0)) {
                    if (c1[1] <= ix && ix <= c2[1]) {
                        let y = iy-c1[0];
                        let x = ix-c1[1];
                        ar[y][x] = this.getCellData(cells[itd], [y, x]);
                    }
                    itd++;
                }
            }
        }
        /*} else {
            let rows = this.table.getElementsByTagName("tr");
            for (let iy = c1[0]; iy <= c2[0]; iy++) {
                let cells = rows[iy].getElementsByTagName("td");
                for (let ix = c1[1]; ix <= c2[1]; ix++) {
                    ar[iy-c1[0]][ix-c1[1]] = this.getCellData(cells[ix]);
                }
            }
        }*/
        return ar;
    }

    cut () {

    }

    getCellData (cell) {
        return cell.innerHTML;
    }

    paste () {

    }
}