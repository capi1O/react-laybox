import React from 'react';
import PropTypes from 'prop-types';

import flex from '../styles/flex.scss';

const propTypes =
{
	x: PropTypes.oneOf(['left', 'center', 'right', 'space', 'stretch']),
	y: PropTypes.oneOf(['top', 'center', 'bottom', 'space', 'stretch']),

	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string])
};

const defaultProps =
{
	x: 'center',
	y: 'center',
	children: null
};

export const Row = (props) =>
{
	const { x, y, children } = props;

	return (<div className={flex[`hz-x-${x}--y-${y}`]}>{children}</div>);
};

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export const Column = (props) =>
{
	const { x, y, children } = props;

	return (<div className={flex[`vt-x-${x}--y-${y}`]}>{children}</div>);
};

Column.propTypes = propTypes;
Column.defaultProps = defaultProps;
