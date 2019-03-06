# react-laybox [![NPM package version](https://img.shields.io/npm/v/react-laybox.svg?style=flat-square)](https://www.npmjs.com/package/react-laybox) [![NPM downloads](https://img.shields.io/npm/dm/react-laybox.svg?style=flat-square)](https://www.npmjs.com/package/react-laybox) [![HitCount](http://hits.dwyl.io/monkeydri/react-laybox.svg)](http://hits.dwyl.io/monkeydri/react-laybox)  [![codecov.io](https://img.shields.io/codecov/c/github/monkeydri/react-laybox/master.svg?style=flat-square)](http://codecov.io/github/monkeydri/react-laybox?branch=master) [![Inline docs](http://inch-ci.org/github/monkeydri/react-laybox.svg?style=flat-square&branch=master)](http://inch-ci.org/github/monkeydri/react-laybox)

# ![react-laybox](banner.png)

# Install

`npm install react-laybox`

# Demo

- [online demo](https://monkeydri.github.io/react-laybox/)
- codepen // TODO

# Usage

```js
import { Row, Column } from 'react-laybox';
```

```jsx
<div style={{ width: '100%', height: '100%' }}>
	<Row x="center" y="center" style={{ height: '30%' }} debug>
		<p>#1</p>
		<p>#2</p>
		<p>#3</p>
	</Row>
</div>
```

```jsx
<div style={{ width: '100%', height: '100%' }}>
	<Row x="left" y="bottom" style={{ height: '30%' }} debug>
		<p>#1</p>
		<p>#2</p>
		<p>#3</p>
	</Row>
</div>
```

```jsx
<div style={{ width: '100%', height: '100%' }}>
	<Column x="center" y="center" style={{ width: '20%' }} debug>
		<p>#1</p>
		<p>#2</p>
		<p>#3</p>
	</Column>
</div>
```

# Why

## problem

Despite all the awesome tools available for styling ([SASS](https://sass-lang.com/), [CSS Modules](https://github.com/css-modules/css-modules), [Autoprefixer](https://github.com/postcss/autoprefixer), [CSS Loader](https://github.com/webpack-contrib/css-loader)...) design HTML UI is fun, however laying out those UI elements is still cumbersome.

To write simple UI nowadays, which fits every screen size, you have few solutions, but to me they each have their drawbacks :

- [CSS Flexbox](https://www.w3schools.com/css/css3_flexbox.asp) => layout based on content, makes it hard to get a layout defined by container (where inner content shrink/expand).
- [CSS Grid](https://www.w3schools.com/css/css_grid.asp) => layout based on grid, makes it hard to adapt layout when content gets bigger.
- Grid layout framework (such as the one provided by [Bootstrap](https://github.com/twbs/bootstrap)) => forces you to think in terms of Columns inside Rows, arbitrary breakpoints responsive and most importantly predefined layout which does not adapt to inner content.

Each of those solution work great but only for specific use cases, and does not prevent problems once you start adding real things inside your layout, for example a React Component which do not use same CSS display than your layout => overflows, unresponsive.
As a result you will still need to get your hands dirty deep down in the CSS, and wiggle with things such as `min-height: 0` or other CSS tricks until *things look good*. This is not fun and this is a huge waste of time.

## simple API

If, like me, you are tired of this and just want to "always keep this div at the center" + "keep footer at the bottom unless there is too much vertical content" or "put those divs side by side and keep them 50% of width or height no matter how much content is inside", then you will love [react-laybox](https://github.com/monkeydri/react-laybox).

The goal of this project is to provide React components, used as containers, with an intuitive API to layout content quickly.

## code readibility

The second goal of this project is to make easier to understand layout from your code. Splitting CSS from your HTML does not help, and CSS media-queries make it even harder to follow.

React is the perfect match for [laybox](https://github.com/monkeydri/laybox) as using `<Component />`s instead of `<div>`s with multiple classes makes your code clearer because it is easier to understand :
- where your blocks stops, since each Component has a different name (see exemples TODO).
- how content is layed out, since the Component name reflects its purpose (`<Row />`, `<Column />`).

# Props

## props that applies to self (container)

| Name | Type | Description | Default Value |
| -------------  | ---- | ----------- | ------- |
| grow  | number or bool | flex-grow. grow={false} => 0, grow={true} -> 1. | 0 |

## props that applies to items (children)

| Name | Type | Description | Default Value |
| -------------  | ---- | ----------- | ------- |
| x  | enum 'left', 'center', 'right', 'space', 'stretch' | horizontal aligment of items inside element | 'center' |
| y | enum 'top', 'center', 'bottom', 'space', 'stretch' | vertical aligment of items inside element | 'center' |

## custom styling props

| Name | Type | Description | Default Value |
| -------------  | ---- | ----------- | ------- |
| className | string | pass custom class to resulting div | '' |
| style | object | pass custom style to resulting div | {} |

## debug props

| Name | Type | Description | Default Value |
| -------------  | ---- | ----------- | ------- |
| debug | bool | add border and color to div | false |

# Notes

## About `<Rows />` & `<Columns />`

API to align inner components differs from [CSS Flexbox](https://www.w3schools.com/css/css3_flexbox.asp), it is based on left/right/top/bottom rather than flex-start/flex-end. It allows to get get same reference system wether using a `<Column />` or a `<Row />` layout.

Unlike other UI frameworks which provides Grid layout like Bootstrap, Foundation or Semantic-UI you don't need to put `<Column />`s in row. A `<Column />` is a container which stacks its children one below the other, as such there is no reason nor need to put it inside a `<Row />` and this prevents adding dummy component in your code and resulting `<div>`s in the DOM tree.

## Other considerations

react-laybox overcomes some of the [CSS Flexbox](https://www.w3schools.com/css/css3_flexbox.asp) limitations such as the impossibility to set max-height of a grown item in row mode (or max-width in column mode). // TODO

react-laybox allows to build full scaled layout ie. content will be resized based on container width. // TODO

# Dependencies [![Dependency Status](https://david-dm.org/monkeydri/react-laybox.svg?style=flat-square)](https://david-dm.org/monkeydri/react-laybox) 

To use [react-laybox](https://github.com/monkeydri/react-laybox) you will need React 16.8+ and Prop Types 15.5+.

<table align="center">
	<tr>
		<td align="center"><img src="https://github.com/facebook/react/blob/master/fixtures/dom/public/react-logo.svg" height="24" alt="React"></td>
		<td align="center"><a href="https://reactjs.org/">React</a></td>
		<td align="center">16.8+</td>
	</tr>
	<tr>
		<td align="center"><img src="https://github.com/facebook/react/blob/master/fixtures/dom/public/react-logo.svg" height="24" alt="Prop Types"></td>
		<td align="center"><a href="https://github.com/facebook/prop-types">Prop Types</a></td>
		<td align="center">15.5+</td>
	</tr>
</table>

# Contributing [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square)](https://github.com/monkeydri/react-laybox/issues)

To contribute to this project the best way is to fork it on github, clone it localy (`git clone https://github.com/your-username/react-laybox`), create a new branch (named after the purpose of the intended change), make the change (do not forget to update the README if needed !), commit, push to your repo and submit a PR on github.

## build [![Build Status](https://img.shields.io/travis/monkeydri/react-laybox.svg?style=flat-square)](https://travis-ci.org/monkeydri/react-laybox)

To build this project you will need [Node](https://nodejs.org/), it is recommended to install it through [nvm](https://github.com/creationix/nvm).

Install required dependancies `npm install` and build `npm run build`.

To run the demo

## code style [![JavaScript Style Guide: Good Parts](https://img.shields.io/badge/code%20style-goodparts-brightgreen.svg?style=flat-square)](https://github.com/dwyl/goodparts "JavaScript The Good Parts")

This project use specific lint rules using [eslint](https://eslint.org/) in order to get consistent code style. The main difference between classic Javascript Style such as [Airbnb style](https://github.com/airbnb/javascript) is the [Allman](https://en.wikipedia.org/wiki/Indentation_style#Allman_style) indentation/brace style. Please use it when submitting a PR.

## Toolchain [![devDependencies Status](https://david-dm.org/monkeydri/react-laybox/dev-status.svg?style=flat-square)](https://david-dm.org/monkeydri/react-laybox?type=dev)

<table align="center">
	<tr>
		<td align="center">Bundler</td>
		<td align="center"><img src="https://github.com/webpack/media/blob/master/logo/icon-square-small.svg" height="24" alt="Webpack"></td>
		<td align="center"><a href="https://webpack.github.io/">Webpack 4</a></td>
	</tr>
	<tr>
		<td align="center">JS compiler</td>
		<td align="center"><img src="https://github.com/babel/logo/blob/master/babel.svg" height="24" alt="Babel"></td>
		<td align="center"><a href="https://babeljs.io/">Babel 7</a></td>
	</tr>
	<tr>
		<td align="center">CSS preprocessor</td>
		<td align="center"><img src="https://github.com/sass/node-sass/blob/master/media/logo.svg" height="24" alt="Node SASS"></td>
		<td align="center"><a href="https://github.com/sass/node-sass">Node SASS 4</a></td>
	</tr>
	<tr>
		<td align="center">Linter</td>
		<td align="center"><img src="https://github.com/eslint/eslint.github.io/blob/master/img/logo.svg" height="24" alt="ESlint"></td>
		<td align="center"><a href="https://eslint.org/">ESlint 5</a></td>
	</tr>
</table>


# Licence [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

[MIT](LICENSE)
