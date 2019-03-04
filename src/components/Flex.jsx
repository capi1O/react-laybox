import React from 'react';
import PropTypes from 'prop-types';

import flex from '../styles/flex.scss';


const debugColors =
[
	{ r: 255, g: 0, b: 0 }, // red
	{ r: 0, g: 255, b: 0 }, // green
	{ r: 0, g: 0, b: 255 }, // blue
	{ r: 0, g: 0, b: 0 }, // black
	{ r: 255, g: 255, b: 255 }, // white
	{ r: 0, g: 255, b: 255 }, // cyan
	{ r: 255, g: 255, b: 0 }, // yellow,
	{ r: 255, g: 0, b: 255 } // purple
];
const randomColor = () => debugColors[Math.floor(Math.random() * debugColors.length)];
const rgbaColor = (color, opacity) => `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`;
const debugStyle = (color) => ({ border: `1px solid ${rgbaColor(color, 1)}`, backgroundColor: rgbaColor(color, 0.5) });

const FlexWrapper = (direction) =>
{
	const Flex = (props) =>
	{
		const { x, y, grow, className, style, debug, children } = props;

		const growNumber = (typeof grow === 'boolean') ? grow ? 1 : 0 : grow;
		const dbgStyle = debug ? debugStyle(randomColor()) : {};

		return (<div className={`${flex[`${direction}-x-${x}--y-${y}`]} ${flex[`grow-${growNumber}`]} ${className}`} style={{ ...style, ...dbgStyle }}>{children}</div>);
	};

	Flex.propTypes =
	{
		// container props => apply to contained items
		x: PropTypes.oneOf(['left', 'center', 'right', 'space', 'stretch']),
		y: PropTypes.oneOf(['top', 'center', 'bottom', 'space', 'stretch']),

		// item props => apply to self inside parent
		grow: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),

		// custom style props
		className: PropTypes.string,
		style: PropTypes.object, // eslint-disable-line react/forbid-prop-types

		// debug props
		debug: PropTypes.bool,

		// react props
		children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string])
	};

	Flex.defaultProps =
	{
		x: 'center',
		y: 'center',
		grow: 0,
		className: '',
		style: {},
		debug: false,
		children: null
	};

	return Flex;
};

export const Row = FlexWrapper('hz');
export const Column = FlexWrapper('vt');

