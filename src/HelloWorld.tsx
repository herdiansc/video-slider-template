import {spring} from 'remotion';
import {
	AbsoluteFill,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Logo} from './HelloWorld/Logo';
import {Subtitle} from './HelloWorld/Subtitle';
import {Title} from './HelloWorld/Title';
import {SliderContainer} from './HelloWorld/SliderContainer';

export const HelloWorld: React.FC<{
	titleText: string;
	subtitleText: string;
	titleColor: string;
}> = ({titleText, subtitleText, titleColor}) => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();


	// Fade out the animation at the end
	const opacity = interpolate(
		frame,
		[durationInFrames - 25, durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return (
		<AbsoluteFill style={{backgroundColor: '#43A1D5'}}>
			<AbsoluteFill style={{opacity}}>
				<Sequence from={0}>
					<Title titleText={titleText} />
				</Sequence>
				<Sequence from={0}>
					<SliderContainer/>
				</Sequence>
				<Sequence from={0}>
					<Subtitle titleText={subtitleText}/>
				</Sequence>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
