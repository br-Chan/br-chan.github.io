export const TextBox = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="my-2 flex w-full flex-col gap-2 border-y-2 bg-white px-4 py-2 md:rounded-md md:border-2">
			<p className="mt-1 text-black text-lg dark:text-slate-100">
				{children}
			</p>
		</div>
	);
};
