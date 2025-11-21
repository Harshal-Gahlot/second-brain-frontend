import type { ReactElement } from "react";

interface SideBarItemType {
	text: string;
	icon: ReactElement;
}

export default function SideBarItem({ text, icon }: SideBarItemType) {
	return (
		<div className="w-full p-2 rounded-md text-xl cursor-pointer">
			<div className="flex justify-left gap-6 h-12 p-4 rounded-md items-center hover:bg-primary600/90 transition-all duration-150">
				<div>{icon}</div>
				<div>{text}</div>
			</div>
		</div>
	);
}
