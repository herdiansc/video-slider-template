import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {COLOR_1, WHITE, FONT_FAMILY} from './constants';

const subtitle: React.CSSProperties = {
	fontFamily: FONT_FAMILY,
	fontSize: 30,
	textAlign: 'center',
	position: 'absolute',
	bottom: 60,
	width: '100%',
	color: WHITE,
};

export const Subtitle: React.FC<{
	titleText: string;
}> = ({titleText}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 30], [0, 1]);
	return (
		<div style={{...subtitle, opacity}}>
			{titleText}
		</div>
	);
};
