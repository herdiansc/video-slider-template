import React from 'react';
import {spring, useCurrentFrame, useVideoConfig, interpolate} from 'remotion';
import {WHITE, HEIGHT_SCREEN} from './constants';
import {fontFamily} from '../Root';

// https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Caveat&display=swap

// @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap');

const titleFontSize: number = 50;
const titleStartPos: number = (HEIGHT_SCREEN / 2) - (titleFontSize * 3);
const title: React.CSSProperties = {
	fontWeight: 'bold',
	fontSize: titleFontSize,
	textAlign: 'center',
	position: 'absolute',
	top: 25,
	width: '100%',
	textTransform: 'uppercase'
};

const word: React.CSSProperties = {
	marginLeft: 10,
	marginRight: 10,
	display: 'inline-block',
};

export const Title: React.FC<{
	titleText: string;
}> = ({titleText}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const scale = spring({
		fps: videoConfig.fps,
		frame: frame - 5,
		config: {
			damping: 200,
		},
	});
	const titleToTop = interpolate(
		frame,
		[0, 2000],
		[titleStartPos, 10]
	);
	return (
		<h1 style={{...title, fontFamily}}>
			<span
				key={titleText}
				style={{
					...word,
					color: WHITE,
					backgroundColor: '#333',
					padding: 10,
					transform: `scale(${scale})`,
					// transform: `scale(${scale}) translateY(${titleToTop})`,
					// transform: `translateX(100px) scale(2)`,
				}}
			>
				{titleText}
			</span>
		</h1>
	);
};
