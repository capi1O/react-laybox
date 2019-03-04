import React from 'react';
import PropTypes from 'prop-types';

import flex from '../styles/flex.scss';

const propTypes =
{
	// container props => apply to contained items
	x: PropTypes.oneOf(['left', 'center', 'right', 'space', 'stretch']),
	y: PropTypes.oneOf(['top', 'center', 'bottom', 'space', 'stretch']),

	// item props => apply to self inside parent
	grow: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),

	// custom style props
	className: PropTypes.string,
	style: PropTypes.object, // eslint-disable-line react/forbid-prop-types

	// react props
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string])
};

const defaultProps =
{
	x: 'center',
	y: 'center',
	grow: 0,
	className: '',
	style: {},
	children: null
};

export const Row = (props) =>
{
	const { x, y, grow, className, style, children } = props;

	const growNumber = (typeof grow === 'boolean') ? grow ? 1 : 0 : grow;

	return (<div className={`${flex[`hz-x-${x}--y-${y}`]} ${flex[`grow-${growNumber} ${className}`]}`} style={style}>{children}</div>);
};

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export const Column = (props) =>
{
	const { x, y, grow, className, style, children } = props;

	const growNumber = (typeof grow === 'boolean') ? grow ? 1 : 0 : grow;

	return (<div className={`${flex[`vt-x-${x}--y-${y}`]} ${flex[`grow-${growNumber} ${className}`]}`} style={style}>{children}</div>);
};

Column.propTypes = propTypes;
Column.defaultProps = defaultProps;
