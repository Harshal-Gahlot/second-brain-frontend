import BrainIcon from "../../icons/brainicon";
import DocumentIcon from "../../icons/documentIcon";
import LinkIcon from "../../icons/linkIcon";
import TwitterIcon from "../../icons/twittericon";
import YoutubeIcon from "../../icons/youtubeIcon";
import SideBarItem from "./SidebarItem";

export default function SideBar() {
	return (
		<div className="h-screen w-64 bg-slate-700/50 text-amber-50 p-4 ">
			<div className="flex text-2xl justify-left items-center gap-4 pb-8 cursor-pointer">
				<div className="text-primary600">
					<BrainIcon />
				</div>
				<div>Second Brain</div>
			</div>
			<SideBarItem text="Twitter" icon={<TwitterIcon />} />
			<SideBarItem text="Youtube" icon={<YoutubeIcon />} />
			<SideBarItem text="Documents" icon={<DocumentIcon />} />
			<SideBarItem text="Links" icon={<LinkIcon />} />
		</div>
	);
}
