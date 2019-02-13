# JS Table Cell Selector

[![Build Status](https://travis-ci.org/DarkRiDDeR/js-table-cell-selector.svg?branch=master)](https://travis-ci.org/DarkRiDDeR/js-table-cell-selector)
[![](https://img.shields.io/npm/v/js-table-cell-selector.svg?style=flat)](https://www.npmjs.com/package/js-table-cell-selector)
[![](https://img.shields.io/github/size/DarkRiDDeR/js-table-cell-selector/dist/tcs.bundle.min.js.svg?colorB=39F&style=flat)](https://github.com/DarkRiDDeR/js-table-cell-selector/blob/master/dist/tcs.bundle.min.js)
[![](https://img.shields.io/github/license/DarkRiDDeR/js-table-cell-selector.svg?style=flat)](https://github.com/DarkRiDDeR/js-table-cell-selector/blob/master/LICENSE)

JS library allows you to select cells of HTML tables as well as cleaning, copying, cutting and pasting data of table.

Supported copy/cut/paste to spreadsheets such as Microsoft Excel, Google Docs, LibreOffice and OpenOffice.

## Demo
See [demo](http://darkridder.github.io/js-table-cell-selector/example/).

## Setup

### Classic web with \<script\> tag

Include the js-files which you can find in the `dist` folder.

```html
<script src="dist/tcs.bundle.min.js"></script>
```

### ES6
Install module using npm:

```npm install js-table-cell-selector```

or using yarn:

```yarn add js-table-cell-selector```

and import:

```import TableCellSelector from "js-table-cell-selector";```

## Usage example

```javascript
var table = document.getElementById("tcs-table");
var options = {deselectOutTableClick: false, enableChanging: true};
var buffer = new TableCellSelector.Buffer();
var tcs = new TableCellSelector(table, options, buffer);
tcs.onStartSelect = function (event, cell) {
    console.log("start select");
};
tcs.enableHotkeys = true;
```

## Keyboard shortcuts

- Ctrl + A — select all
- Ctrl + C — copy
- Ctrl + V — paste
- Ctrl + X — cut
- Ctrl + (Backspace or Delete) — clear

**Note:** *operations for the browser buffer only work when `TableCellSelector.Buffer` is initialized.*

## Options

| Name                    | Type             | Default                                                 | Description                                                                                                                |
|-------------------------|------------------|---------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| deselectOutTableClick   | Bool             | true                                                    | Deselect when clicking is outside the table                                                                                |
| enableChanging          | Bool             | false                                                   | The flag allows changing the table using key combinations                                                                  |
| enableHotkeys           | Bool             | true                                                    | The flag of hotkeys enable                                                                                                 |
| getCellFn               | Function         | function (cell, coord) { return cell.innerText; }       | Getting cell value                                                                                                         |
| ignoreClass             | String           | 'tcs-ignore'                                            | You can add this class to a TR or TD                                                                                       |
| ignoreTfoot             | Bool             | false                                                   | Ignore tag TFOOT and its contents                                                                                          |
| ignoreThead             | Bool             | false                                                   | Ignore tag THEAD and its contents                                                                                          |
| mergePastingGlue        | String           | ' '                                                     | The gluing string when pasted into merged cells                                                                            |
| mouseBlockSelection     | Bool             | true                                                    | Must be disabled when editing cell contents when contenteditable is true for selection to work                             |
| selectClass             | String           | 'tcs-select'                                            | Class added to the cell when selecting                                                                                     |
| selectIgnoreClass       | Bool             | true                                                    | Select ignored cells. The actions of changing them will not work anyway                                                    |
| setCellFn               | Function         | function (cell, data, coord) { cell.innerText = data; } | Setting cell value                                                                                                         |
| tableClass              | String           | 'tcs'                                                   | Class added to the table when initializing                                                                                 |

## Methods:

The readout of positions is from the upper left corner of the table as [y, x]

#### constructor (table [, options [, buffer]])

#### clear ([c1 [, c2]])
Clear selected cell
```
@param c1 - starting position [0, 0]
@param c2 - end position [1, 1]
@returns {boolean}
```

#### copy ([c1 [, c2]])
Copy with browser buffer support
```
@param c1 - starting position [0, 0]
@param c2 - end position [1, 1]
@returns {array[][] | false}
```

#### cut ([c1 [, c2]])
Cut with browser buffer support
```
@param c1 - starting position [0, 0]
@param c2 - end position [1, 1]
@returns {array[][] | false}
```

#### deselect ()
Remove selection
```
@returns {number}
```
    
#### getCoords ()
Get selection coordinates
```
@returns {array[][] | false}
```

#### initSizeMatrix ()
initialize or re-initialize the size matrix

#### paste (data [, c1 [, c2]])
```
@param data - array[][]
@param c1 - starting position [0, 0]
@param c2 - end position [1, 1]
```

#### select (c1 [, c2])
```
@param c1 - starting position [0, 0]
@param c2 - end position [1, 1]
@returns {boolean}
```
    
#### selectAll()
Select all cells
```
@returns {number}
```

#### destroy ()

## Events:

#### onStartSelect(event, cell)
Occurs at the starting of a selection

#### onSelect(event, cell)
Occurs when a new cell is selected, starting from the second cell. The first is triggered onStartSelect

#### onFinishSelect(event)
Occurs at the finishing of a selection

## License

Apache 2.0
