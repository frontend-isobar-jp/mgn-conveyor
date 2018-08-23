# mgn-conveyor ( Don't Need jQuery )


Implement function to slide images or elements in an infinite loop.
- Target browser : IE9+

___

# Install

```
npm i mgn-conveyor -S
```

## Or Download raw data
[↓ download "mgn-conveyor.js"](https://raw.githubusercontent.com/frontend-isobar-jp/mgn-conveyor/master/src/mgn-conveyor.js)


___

# Import

```
import mgnConveyor from 'mgn-conveyor';
```

___

# Constructor

```
new mgnConveyor( element [, option] )
```
|Argument|Data type|Default|Descroption|
|:-------|:--------|:------|:----------|
|element|String|-(Required)|Specify target element.<br>ex) ".j-conveyor"|
|option|Object|-|ex)<br>option = {<br>speed: 500<br>}|

|Option|Data type|Default|Descroption|
|:-------|:--------|:------|:----------|
|speed|Number|300|Specify speed (ms).|

___

# Property
|Property|Data type|Default|Descroption|
|:-------|:--------|:------|:----------|
|flag|Boolean|false||

___

# Demo

[https://frontend-isobar-jp.github.io/mgn-conveyor/](https://frontend-isobar-jp.github.io/mgn-conveyor/)

```
import mgnConveyor from 'mgn-conveyor';

let conveyor = new mgnConveyor(".j-conveyor");

let btn = document.getElementById('btn');

btn.onclick = () => {
    conveyor.flag ? conveyor.Stop() : conveyor.Start();
}
```
