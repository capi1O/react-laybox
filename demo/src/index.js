/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import ReactDOM from 'react-dom';

import ContainerDimensions from 'react-container-dimensions';

import { Row, Column } from 'components/Flex';
// import { Row, Column } from 'react-laybox';

import style from 'demo.scss';

const squareStyle = (width, height) => ({ width: `${Math.min(width, height) * 0.8}px`, height: `${Math.min(width, height) * 0.8}px` });

const Demo = () => (

	<Column x="stretch" y="center" className={style.demo}>

		<Row x="center" y="bottom" grow><h1>react-laybox</h1></Row>

		<Column x="center" y="top" className={style.content} grow>
			<ContainerDimensions>
				{ ({ width, height }) => (
					<div className={style.square} style={squareStyle(width, height)}>

						<Column x="center" y="top" className={style.Lleft} />

						<Row x="left" y="center" className={style.Lbottom} />

					</div>)}
			</ContainerDimensions>
		</Column>
	</Column>
);

ReactDOM.render(<Demo />, document.getElementById('root'));
