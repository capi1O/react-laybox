# react-laybox

Set of react components to build any layout with ease, mostly based on CSS flexbox.

# Install

`npm install react-laybox`

# Demo

codepen // TODO

# Usage

```jsx
<div style={{ width: '100%', height: '100%' }} debug>
	<Row x="center" y="center" style={{ height: '30%' }}>
		<p>#1<p/>
		<p>#2<p/>
		<p>#3<p/>
	<Row />
</div>
```

```jsx
<div style={{ width: '100%', height: '100%' }}>
	<Row x="left" y="bottom" style={{ height: '30%' }} debug>
		<p>#1<p/>
		<p>#2<p/>
		<p>#3<p/>
	<Row />
</div>
```

```jsx
<div style={{ width: '100%', height: '100%' }}>
	<Column x="center" y="center" style={{ width: '20%' }} debug>
		<p>#1<p/>
		<p>#2<p/>
		<p>#3<p/>
	<Column />
</div>
```

# Notes

API to align inner components differs from CSS flexbox, it is based on left/right/top/bottom rather than flex-start/flex-end. It allows to get get same reference system wether using a <Column /> or a <Row /> layout.

Unlike other UI frameworks which provides Grid layout like Bootstrap, Foundation or Semantic-UI you don't need to put <Columns /> in row. A <Column /> is a container which stacks its children one below the other, as such there is no reason nor need to put it inside a <Row /> and this prevents adding dummy component in your code and resulting <div>s in the DOM tree.

react-laybox overcomes some of the CSS flexbox limitations such as the impossibility to set max-height of an item in row mode (or max-width in column mode). // TODO

react-laybox allows to build full scaled layout ie. content will be resized based on container with. // TODO

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

# Dependencies

- React
- Prop Types

# Licence

[MIT](LICENSE)