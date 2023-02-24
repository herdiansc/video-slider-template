import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';
import {Logo} from './HelloWorld/Logo';
import {DURATION_VIDEO, FPS, WIDTH_SCREEN} from './HelloWorld/constants';
import data from './data.json';

export const DURATION = data.contents.length * 150;

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.ts <id> out/video.mp4
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={DURATION}
				fps={FPS}
				width={WIDTH_SCREEN}
				height={1080}
				// You can override these props for each render:
				// https://www.remotion.dev/docs/parametrized-rendering
				defaultProps={{
					titleText: data.title,
					subtitleText: data.subTitle,
					titleColor: 'white',
				}}
			/>
		</>
	);
};
