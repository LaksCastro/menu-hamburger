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
### JavaScript
``` javascript
const rootElement = document.getElementById("menu-wrapper");
const menu = MenuHamburger.initialize({
  rootElement,
  size: 50,
  backgroundColor: "#f2f2f2",
});
```
# Config
```
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
});
```

