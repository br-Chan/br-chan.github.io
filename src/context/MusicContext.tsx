import type { ReactNode } from "react";
import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import { useSound } from "use-sound";

interface MusicContextValue {
	isEnabled: boolean;
	volume: number;
	toggleMusic: () => void;
	setVolume: (volume: number) => void;
	play: () => void;
	stop: () => void;
}

const MusicContext = createContext<MusicContextValue | undefined>(undefined);

const MusicProvider = ({ children }: { children: ReactNode }) => {
	const [isEnabled, setIsEnabled] = useState(true);
	const [volume, setVolume] = useState(0.3);
	const [play, { stop }] = useSound("/too-good-to-be-true.wav", {
		volume,
	});
	// Hold the latest play callback so the effect can safely reuse it.
	const playRef = useRef(play);

	useEffect(() => {
		playRef.current = play;
	}, [play]);

	useEffect(() => {
		if (isEnabled) {
			playRef.current();
			return;
		}

		stop();
	}, [isEnabled, stop]);

	const toggleMusic = useCallback(() => {
		setIsEnabled((prev) => !prev);
	}, []);

	const value = useMemo(
		() => ({
			isEnabled,
			play,
			setVolume,
			stop,
			toggleMusic,
			volume,
		}),
		[isEnabled, volume, play, stop, toggleMusic],
	);

	return <MusicContext value={value}>{children}</MusicContext>;
};

const useMusic = (): MusicContextValue => {
	const context = useContext(MusicContext);
	if (!context) {
		throw new Error("useMusic must be used within a MusicProvider");
	}
	return context;
};

export { MusicProvider, useMusic };
