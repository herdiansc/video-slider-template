import React from 'react';
import {interpolate, useCurrentFrame, Img, useVideoConfig} from 'remotion';
import {WHITE, WIDTH_SCREEN, FPS_PER_CARD, FPS} from './constants';
import data from '../data.json';
import {DURATION} from '../Root';

const subtitle: React.CSSProperties = {
	position: 'absolute',
	top: '15%',
  left: 0,
	width: '100%',
  height: '70%',
//   backgroundColor: WHITE,
};

const sliderA: React.CSSProperties = {
	whiteSpace: 'nowrap',
	position: 'absolute',
	margin: 0,
	marginTop: 17,
};

const div1: React.CSSProperties = {
	// border: 0,
	border: 'none',
	width: 450,
	height: 720,
	display: 'inline-block',
	marginRight: 50,
	padding: 15,
	position: 'relative',
	backgroundColor: WHITE,
}

export const SliderContainer: React.FC = () => {
	const frame = useCurrentFrame();

	// Move the logo up by 150 pixels once the transition starts
	const to = (WIDTH_SCREEN - ((450+50)*data.contents.length))
	const logoTranslation = interpolate(
		frame,
		[0, DURATION-FPS*6],
		[WIDTH_SCREEN, to]
	);

	return (
		<div style={{...subtitle}}>
			<div style={{...sliderA, transform: `translateX(${logoTranslation}px)`,}}>
				{data.contents.map((k, i)=>(
					<div style={{...div1}}>
						<div style={{
							fontSize: 50,
							display: 'flex',
							justifyContent: 'center',
							color: '#00425A',
						}}
						>#{data.contents.length - i}. {k.title}</div>

						<div style={{
							textAlign: 'center',
							marginTop: 50,
						}}>
							<Img style={{
								width:'400px',
								height:'400px',
							}} src={k.image} />
						</div>

						<div style={{
							width: '420px',
							fontSize: 35,
							textAlign: 'center',
							color: '#333',
							position: 'absolute',
							bottom: 45,
						}}
						>{k.description}</div>
					</div>
				))}
			</div>
		</div>
	);
};
