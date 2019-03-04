# react-laybox

Set of react components to build any layout with ease, mostly based on CSS flexbox.

# Install

`npm install react-laybox`

# Demo

codepen // TODO

# Usage

```
<Row x="center" y="center" grow>
	<p>item veritcally centered<p/>
	<p>I will be stacked aside each other<p/>
<Row />
```
# Notes

API to align inner components differs from CSS flexbox, it is based on left/right/top/bottom rather than flex-start/flex-end. It allows to get get same reference system wether using a <Column /> or a <Row /> layout.

Unlike other UI frameworks which provides Grid layout like Bootstrap, Foundation or Semantic-UI you don't need to put <Columns /> in row. A <Column /> is a container which stacks its children one below the other, as such there is no reason nor need to put it inside a <Row /> and this prevents adding dummy component in your code and resulting <div>s in the DOM tree.

# Props

## props that applies to self (container)

| Name | Type | Description | Default Value |
| -------------  | ---- | ----------- | ------- |
| grow  | number or bool | flex-grow. 1 is grow={true}, 0 is grow={false}. | 0 |

## props that applies to items (children)

| Name | Type | Description | Default Value |
| -------------  | ---- | ----------- | ------- |
| x  | enum 'left', 'center', 'right', 'space', 'stretch' | horizontal aligment of items inside element | 'center' |
| y | enum 'top', 'center', 'bottom', 'space', 'stretch' | vertical aligment of items inside element | 'center' |

## custom styling props

| Name | Type | Description | Default Value |
| -------------  | ---- | ----------- | ------- |
| className | string | pass custom class to resulting div | '' |

# Dependencies

- React
- Prop Types
