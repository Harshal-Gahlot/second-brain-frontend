import type { ReactElement } from "react";

interface ButtonProps {
	variant: "primary" | "secondary";
	text: string;
	startIcon?: ReactElement;
	onClick: () => void;
	loading?: boolean;
}
const buttonsBgVariant = {
	primary: "bg-primary600 text-white",
	secondary: "bg-secondary200",
};

export default function Button({ variant, text, startIcon, onClick, loading }: ButtonProps) {
	return (
		<button
			className={buttonsBgVariant[variant] + " px-4 py-2 rounded-md font-light flex gap-2 items-center  text-black" 
				+ `${loading ? " opacity-65" : " cursor-pointer hover:opacity-85"}`}
			disabled={loading}
			onClick={() => onClick()}>
			{startIcon}
			<div>{text}</div>
		</button>
	);
}
