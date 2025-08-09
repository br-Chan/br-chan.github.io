import {
	createContext,
	type Dispatch,
	type ReactNode,
	type SetStateAction,
	useContext,
	useState,
} from "react";

type StarContextValue = {
	starColor: string;
	setStarColor: Dispatch<SetStateAction<string>>;
};

const StarContext = createContext<StarContextValue>({} as StarContextValue);

export const StarContextProvider = ({ children }: { children: ReactNode }) => {
	const [starColor, setStarColor] = useState("#4b5563");

	return (
		<StarContext
			value={{
				starColor,
				setStarColor,
			}}
		>
			{children}
		</StarContext>
	);
};

export const useStarContext = () => {
	return useContext(StarContext);
};
