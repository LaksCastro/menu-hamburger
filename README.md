# Menu Hamburger
A clean, simple and easy to use library

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
```
<script type="text/javascript" src="https://unpkg.com/menu-hamburger@2.0.0/lib/menu-hamburger.min.js"></script>
```
# Usage

### HTML
``` html 
<!DOCTYPE html>
<html>
<head>
  <title>A Simple Menu Hamburger</title>>
  <script src="https://unpkg.com/menu-hamburger@2.0.0/lib/menu-hamburger.min.js"></script>
</head>
<body>
  <div id="menu-wrapper"></div>
  <script type="text/javascript">
  	//Js code here
  </script>
</body>
</html>
``` javascript
### JavaScript
```
const menu = MenuHamburger.initialize({
  rootElement: document.getElementById("menu-wrapper"),
  size: 50,
  backgroundColor: "#f2f2f2",
})
```
