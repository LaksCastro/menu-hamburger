# Menu Hamburger
A clean, simple and easy to use library

# Demo
Check a demo [working here](https://lakscastro.github.io/menu-hamburger.js/)

# PrintScreen
![Opened](https://i.imgur.com/x0IquWe.png)
![Animating](https://i.imgur.com/frVRogM.png)
![Animating](https://i.imgur.com/85xSR2q.png)
![Closed](https://i.imgur.com/J1iVw8F.png)

# Installation
#### Via packages
```
yarn add menu-hamburger 
```
or
```
npm i menu-hamburguer
```
#### Via CDN
``` html
<script type="text/javascript" src="https://unpkg.com/menu-hamburger@2.0.0/lib/menu-hamburger.min.js"></script>
```
# Usage

### HTML
``` html 
<!DOCTYPE html>
<html>
<head>
  <title>A Simple Menu Hamburger</title>
  <script src="https://unpkg.com/menu-hamburger@2.0.0/lib/menu-hamburger.min.js"></script>
</head>
<body>
  <div id="menu-wrapper"></div>
  <script type="text/javascript">
  	//Js code here
  </script>
</body>
</html>
``` 
### JavaScript - CDN
``` javascript
const rootElement = document.getElementById("menu-wrapper");
const menu = MenuHamburger.initialize({
  rootElement,
  size: 50,
  backgroundColor: "#f2f2f2",
});
```
### JavaScript - Package
``` javascript
import MenuHamburger from "menu-hamburger";

const rootElement = document.getElementById("menu-wrapper");
const menu = MenuHamburger.initialize({
  rootElement,
  size: 50,
  backgroundColor: "#f1f1f1",
});
```
# Config
Configure Menu Hamburger by passing an options object as the argument of the initialize method. Default values are:
``` javascript
const menu = MenuHamburger.initialize({
  rootElement: null,
  size: 30,
  lineWidth: 3,
  menuClassName: null,
  menuIconClassName: null,
  transition: 'all .2s ease-in-out',
  backgroundColor: 'white',
  borderRadius: '8px',
  iconColor: '#444',
  initOpened: false
});
```
### `rootElement`
> Receives the HTML container element from the menu

required: `true`  
type: `HTMLNode`  
Allowed values: `any HTML Node`  
Default value: `null`

### `size`
> Receives the Menu Hamburger width and height

required: `false`  
type: `number`  
Allowed values: `any number`  
Default value: `30`

### `lineWidth`
> Receives the Menu line width

required: `false`  
type: `number`  
Allowed values: `any number`  
Default value: `3`

### `menuClassName`
> Receives the class to apply on the Menu Node

required: `false`  
type: `string`  
Allowed values: `any valid HTML class string`  
Default value: `null`

### `menuIconClassName`
> Receives the class to apply on the Menu Node Icon

required: `false`  
type: `string`  
Allowed values: `any valid HTML class string`  
Default value: `null`

### `transition`
> Receives the custom Css transition

required: `false`  
type: `string`  
Allowed values: `any valid value to Css property transition`  
Default value: `all .2s ease-in-out`

### `backgroundColor`
> Receive the Background Color of Menu

required: `false`  
type: `string`  
Allowed values: `any Css color`  
Default value: `white`

### `borderRadius`
> Receive the Menu border radius

required: `false`  
type: `string`  
Allowed values: `any Css size`  
Default value: `8px`

### `iconColor`
> Receive the Menu Icon color

required: `false`  
type: `string`  
Allowed values: `any Css color`  
Default value: `#444`

### `initOpened`
> Defines whether the menu should start open or closed, where true means start open and false means start closed

required: `false`  
type: `boolean`  
Allowed values: `true` `false`  
Default value: `false`

# API
Menu exposes API methods that can be used to control the Menu externally. Example usage:
``` javascript
const menu = MenuHamburger.initialize({ ...yourConfigHere });

menu.toggle();
menu.open();
menu.close();
```

### `toggle`
> Opens the Menu if it is closed or closes if it is open

### `open`
> Open Menu

### `close`
> Close Menu

### `destroy`
> Destroys the current instance of the Menu

# Add Event Listeners
Menu exposes custom events that can be hooked on to. Example usage:
``` javascript
const menu = MenuHamburger.initialize({ ...yourConfigHere });

menu.on("toggle", () => {
  console.log("Your imagination is the limit")
});
```

### `init`
> This function is called when the Menu is initialized

### `toggle`
> This function is called when the Menu is closed or opened

### `open`
> This function is called when the Menu is opened

### `close`
> This function is called when the Menu is closed

### `destroy`
> This function is called when the Menu is destroyed

# Remove Event Listeners
The menu exposes custom events that can be used to remove an event listener. Example of use:
``` javascript
const menu = MenuHamburger.initialize({ ...yourConfigHere });

menu.on("toggle", () => {
  console.log("I'm adding a listener to the toggle event")
});
menu.off("toggle", () => {
  console.log("And right down here I already removed this event, so nothing will happen")
});

```

### `init`
> Remove the init event listener

### `toggle`
> Remove the toggle event listener

### `open`
> Remove the open event listener

### `close`
> Remove the close event listener

### `destroy`
> Remove the destroy event listener
