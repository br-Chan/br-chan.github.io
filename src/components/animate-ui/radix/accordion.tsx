"use client";

import { ChevronDown } from "lucide-react";
import {
	AnimatePresence,
	type HTMLMotionProps,
	motion,
	type Transition,
} from "motion/react";
import { Accordion as AccordionPrimitive } from "radix-ui";
import * as React from "react";
import type { IconType } from "react-icons/lib";
import { cn } from "@/lib/utils";

type AccordionItemContextType = {
	isOpen: boolean;
	setIsOpen: (open: boolean) => void;
};

const AccordionItemContext = React.createContext<
	AccordionItemContextType | undefined
>(undefined);

const useAccordionItem = (): AccordionItemContextType => {
	const context = React.useContext(AccordionItemContext);
	if (!context) {
		throw new Error(
			"useAccordionItem must be used within an AccordionItem",
		);
	}
	return context;
};

type AccordionProps = React.ComponentProps<typeof AccordionPrimitive.Root>;

function Accordion(props: AccordionProps) {
	return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

type AccordionItemProps = React.ComponentProps<
	typeof AccordionPrimitive.Item
> & {
	children: React.ReactNode;
};

function AccordionItem({ className, children, ...props }: AccordionItemProps) {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<AccordionItemContext.Provider value={{ isOpen, setIsOpen }}>
			<AccordionPrimitive.Item
				className={cn("border-b", className)}
				data-slot="accordion-item"
				{...props}
			>
				{children}
			</AccordionPrimitive.Item>
		</AccordionItemContext.Provider>
	);
}

type AccordionTriggerProps = React.ComponentProps<
	typeof AccordionPrimitive.Trigger
> & {
	transition?: Transition;
	startIcon?: IconType;
	chevron?: boolean;
};

function AccordionTrigger({
	ref,
	className,
	children,
	transition = { type: "spring", stiffness: 150, damping: 22 },
	startIcon,
	chevron = true,
	...props
}: AccordionTriggerProps) {
	const triggerRef = React.useRef<HTMLButtonElement | null>(null);
	React.useImperativeHandle(
		ref,
		() => triggerRef.current as HTMLButtonElement,
	);
	const { isOpen, setIsOpen } = useAccordionItem();
	const Icon: IconType | undefined = startIcon;

	React.useEffect(() => {
		const node = triggerRef.current;
		if (!node) return;

		const observer = new MutationObserver((mutationsList) => {
			mutationsList.forEach((mutation) => {
				if (mutation.attributeName === "data-state") {
					const currentState = node.getAttribute("data-state");
					setIsOpen(currentState === "open");
				}
			});
		});
		observer.observe(node, {
			attributes: true,
			attributeFilter: ["data-state"],
		});
		const initialState = node.getAttribute("data-state");
		setIsOpen(initialState === "open");
		return () => {
			observer.disconnect();
		};
	}, [setIsOpen]);

	return (
		<AccordionPrimitive.Header
			className="flex"
			data-slot="accordion-header"
		>
			<AccordionPrimitive.Trigger
				className={cn(
					"flex flex-1 cursor-pointer items-center justify-between px-4 py-4 text-start font-medium transition-colors duration-200 hover:bg-gray-100",
					className,
				)}
				data-slot="accordion-trigger"
				ref={triggerRef}
				{...props}
			>
				<motion.div
					animate={{
						padding: isOpen ? 1 : 32,
						fontSize: isOpen ? "18px" : "30px",
					}}
					className="flex flex-1 items-center justify-between"
				>
					{Icon && (
						<motion.div
							animate={
								isOpen
									? {
											height: 0,
											width: 0,
											opacity: 0,
											x: 200,
										}
									: {
											height: 120,
											width: 120,
											opacity: 100,
											x: 0,
										}
							}
							className="absolute size-30"
							initial={{
								height: 0,
								width: 0,
								opacity: 0,
								x: 200,
							}}
							transition={{
								type: "stiff",
							}}
						>
							<Icon className="-translate-x-10 size-full opacity-30" />
						</motion.div>
					)}

					<motion.span
						animate={{
							x: isOpen ? 0 : 100,
						}}
						transition={{ type: "stiff" }}
					>
						{children}
					</motion.span>

					{chevron && (
						<motion.div
							animate={{ rotate: isOpen ? 180 : 0 }}
							data-slot="accordion-trigger-chevron"
							transition={transition}
						>
							<ChevronDown className="size-5 shrink-0" />
						</motion.div>
					)}
				</motion.div>
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	);
}

type AccordionContentProps = React.ComponentProps<
	typeof AccordionPrimitive.Content
> &
	HTMLMotionProps<"div"> & {
		transition?: Transition;
	};

function AccordionContent({
	className,
	children,
	transition = { type: "spring", stiffness: 150, damping: 22 },
	...props
}: AccordionContentProps) {
	const { isOpen } = useAccordionItem();

	return (
		<AnimatePresence>
			{isOpen && (
				<AccordionPrimitive.Content forceMount {...props}>
					<motion.div
						animate={{
							height: "auto",
							opacity: 1,
							"--mask-stop": "100%",
						}}
						className="overflow-hidden"
						data-slot="accordion-content"
						exit={{ height: 0, opacity: 0, "--mask-stop": "0%" }}
						initial={{ height: 0, opacity: 0, "--mask-stop": "0%" }}
						key="accordion-content"
						style={{
							maskImage:
								"linear-gradient(black var(--mask-stop), transparent var(--mask-stop))",
							WebkitMaskImage:
								"linear-gradient(black var(--mask-stop), transparent var(--mask-stop))",
						}}
						transition={transition}
						{...props}
					>
						<div className={cn("pt-0 pb-4 text-sm", className)}>
							{children}
						</div>
					</motion.div>
				</AccordionPrimitive.Content>
			)}
		</AnimatePresence>
	);
}

export {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
	useAccordionItem,
	type AccordionItemContextType,
	type AccordionProps,
	type AccordionItemProps,
	type AccordionTriggerProps,
	type AccordionContentProps,
};
