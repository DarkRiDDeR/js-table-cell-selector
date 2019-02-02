# JS Table Cell Selector

[![Build Status](https://travis-ci.org/DarkRiDDeR/js-table-cell-selector.svg?branch=master)](https://travis-ci.org/DarkRiDDeR/js-table-cell-selector)
[![](https://img.shields.io/npm/v/js-table-cell-selector.svg?style=flat)](https://www.npmjs.com/package/js-table-cell-selector)
[![](https://img.shields.io/github/size/DarkRiDDeR/js-table-cell-selector/dist/tcs.bundle.min.js.svg?colorB=39F&style=flat)](https://github.com/DarkRiDDeR/js-table-cell-selector/blob/master/dist/tcs.bundle.min.js)
[![](https://img.shields.io/github/license/DarkRiDDeR/js-table-cell-selector.svg?style=flat)](https://github.com/DarkRiDDeR/js-table-cell-selector/blob/master/LICENSE)

JS library allows you to select cells of HTML tables as well as cleaning, coping, cutting and pasting data of table.

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
```

## Keyboard shortcuts

- Ctrl + A — select all
- Ctrl + C — copy
- Ctrl + V — paste
- Ctrl + X — cut
- Ctrl + (Backspace or Delete) — clear

**Note:** *operations for the browser buffer only work when `TableCellSelector.Buffer` is initialized.*

## Options

| Name                    | Type             | Default                                                 | Description                                               |
|-------------------------|------------------|---------------------------------------------------------|-----------------------------------------------------------|
| deselectOutTableClick   | Bool             | true                                                    |                                                           |
| enableChanging          | Bool             | false                                                   | The flag allows changing the table using key combinations |
| getCellFn               | Function         | function (cell, coord) { return cell.innerText; }       |                                                           |
| ignoreClass             | String           | 'tcs-ignore'                                            |                                                           |
| mergePastingGlue        | String           | ' '                                                     |                                                           |
| selectableTableClass    | String           | 'tcs'                                                   |                                                           |
| selectIgnoreClass       | Bool             | true                                                    |                                                           |
| selectClass             | String           | 'tcs-select'                                            |                                                           |
| setCellFn               | Function         | function (cell, data, coord) { cell.innerText = data; } |                                                           |

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
```
@param c1 - starting position [0, 0]
@param c2 - end position [1, 1]
@returns {array[][] | false}
```

#### cut ([c1 [, c2]])
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
    
#### destroySizeMatrix ()
destroy size matrix for big table or changing tables. After which you need to perform initialization with initSizeMatrix()

#### getCoords ()
Get selection coordinates
```
@returns {array[][] | false}
```

#### initSizeMatrix ()

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

## License

Apache 2.0
