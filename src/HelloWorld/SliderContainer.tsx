import React from 'react';
import {interpolate, useCurrentFrame, Img} from 'remotion';
import {COLOR_1, WHITE, FONT_FAMILY, DURATION_VIDEO, WIDTH_SCREEN} from './constants';
import data from '../data.json';
import {DURATION} from '../Root';

const subtitle: React.CSSProperties = {
	position: 'absolute',
	top: '15%',
  left: 0,
	width: '100%',
  height: '70%',
  backgroundColor: WHITE,
};

const sliderA: React.CSSProperties = {
	whiteSpace: 'nowrap',
	position: 'absolute',
	margin: 0,
	marginTop: 17,
};

const div1: React.CSSProperties = {
	borderColor: '#ddd',
	border: '1px solid #B4E4FF',
	width: 450,
	height: 720,
	display: 'inline-block',
	marginRight: 50,
	padding: 15,
	position: 'relative',
}

export const SliderContainer: React.FC = () => {
	const frame = useCurrentFrame();

	// Move the logo up by 150 pixels once the transition starts
	const to = (WIDTH_SCREEN - ((450+50)*data.contents.length))
	const logoTranslation = interpolate(
		frame,
		[0, DURATION],
		[0, to]
	);

	return (
		<div style={{...subtitle}}>
			<div style={{...sliderA, transform: `translateX(${logoTranslation}px)`,}}>
				{data.contents.map((k, i)=>(
					<div style={{...div1}}>
						<div style={{
							fontSize: 40,
							display: 'flex',
							justifyContent: 'center',
							color: '#00425A',
						}}
						>{k.title} {i+1}</div>

						<div style={{
							textAlign: 'center',
							marginTop: 50,
						}}>
							<Img src={k.image} />
						</div>

						<div style={{
							// border: '1px solid #B4E4FF',
							width: '420px',
							fontSize: 25,
							textAlign: 'center',
							color: '#333',
							position: 'absolute',
							bottom: 45,
						}}
						>{k.description} {i+1}</div>
					</div>
				))}
			</div>
		</div>
	);
};
