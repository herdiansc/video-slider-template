import {Freeze, spring} from 'remotion';
import {
	Audio,
	AbsoluteFill,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
	staticFile,
} from 'remotion';
import {Subtitle} from './HelloWorld/Subtitle';
import {Title} from './HelloWorld/Title';
import {SliderContainer} from './HelloWorld/SliderContainer';
import background from "../public/bg_image.jpg";
import {WHITE, WIDTH_SCREEN, FPS_PER_CARD, FPS} from './HelloWorld/constants';
import { DURATION } from './Root';

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
		<AbsoluteFill style={{backgroundColor: '#000'}}>
			<AbsoluteFill style={{backgroundImage: `url(${background})`, backgroundSize: 'cover' ,opacity: 0.5}}>
			</AbsoluteFill>
			<AbsoluteFill>
      			<Audio
					volume={(f) =>
						interpolate(f, [DURATION-(FPS*7), DURATION], [1, 0], { extrapolateRight: "clamp" })
					}
					src={staticFile('bg_music.mp3')} />
    		</AbsoluteFill>
			<AbsoluteFill>
				<Sequence from={0}>
					<Title titleText={titleText} />
				</Sequence>
				<Sequence from={100}>
					<SliderContainer/>
				</Sequence>
				<Sequence from={0}>
					<Subtitle titleText={subtitleText}/>
				</Sequence>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
