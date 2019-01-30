# JS Table Cell Selector

[![Build Status](https://travis-ci.org/DarkRiDDeR/js-table-cell-selector.svg?branch=master)](https://travis-ci.org/DarkRiDDeR/js-table-cell-selector)

JS library allows you to select cells of HTML tables as well as cleaning, coping, cutting and pasting data of table

## Demo
See [demo](http://darkridder.github.io/js-table-cell-selector/example/).

## Setup

### Classic web with <script> tag

Include the js-files which you can find in the `dist` folder.

```html
<script src="dist/tcs.bundle.min.js"></script>
```
### ES6

```
import TableCellSelector from "./js-table-cell-selector/src/app";
```

## Usage

```javascript
var options = {deselectOutTableClick: false};
var table = document.getElementById("tcs-table");
var tcs = new TableCellSelector(table, options);
```

## Options

| Name                    | Type             | Default                                                 | Description    |
|-------------------------|------------------|---------------------------------------------------------|----------------|
| deselectOutTableClick   | Bool             | true                                                    |                |
| getCellFn               | Function         | function (cell, coord) { return cell.innerText; }       |                |
| ignoreClass             | String           | 'tcs-ignore'                                            |                |
| mergePastingGlue        | String           | ' '                                                     |                |
| selectableTableClass    | String           | 'tcs'                                                   |                |
| selectIgnoreClass       | Bool             | true                                                    |                |
| selectClass             | String           | 'tcs-select'                                            |                |
| setCellFn               | Function         | function (cell, data, coord) { cell.innerText = data; } |                |

## Methods:

### constructor
```
constructor (table [, options])
```

### clear
```
clear ([c1 [, c2]])
@param c1 - starting position [0, 0]
@param c2 - end position [1, 1]
```
### copy
```
copy ([c1 [, c2]])
@param c1 - starting position [0, 0]
@param c2 - end position [1, 1]
@returns {array[][] | false}
```

### cut
```
cut ([c1 [, c2]])
@param c1 - starting position [0, 0]
@param c2 - end position [1, 1]
@returns {array[][] | false}
```

### deselect
```
deselect ()
```
    
### destroy
```
destroy ()
```

### destroySizeMatrix
destroy size matrix for big table or changing tables
```
destroySizeMatrix ()
```

### getCoords
```
getCoords ()
```

### initSizeMatrix
```
initSizeMatrix ()
```

### paste
```
paste (data [, c1 [, c2]])
@param data - array[][]
@param c1 - starting position [0, 0]
@param c2 - end position [1, 1]
@returns {boolean}
```

### select
```
select (c1 [, c2])
@param c1 - starting position [0, 0]
@param c2 - end position [1, 1]
@returns {boolean}
```
    

### selectAll
```
selectAll
```

## License

Apache 2.0
