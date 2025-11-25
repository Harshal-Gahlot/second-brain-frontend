import Button from "../components/top bar/Button";
import Card from "../components/main content/Card";
import PlusIcon from "../icons/plusicon";
import ShareIcon from "../icons/shareicon";
import CreateModel from "../components/top bar/model";
import { useState } from "react";
import SideBar from "../components/side bar/Sidebar";
import useContent from "../hooks/useContent";
import axios from "axios";
import { BACKEND_LINK } from "../config";
// todo: add hover effect to all buttonsO

export default function Dashboard() {
	const [modelOpen, setModelOpen] = useState(false);
	const [brainShared, setBrainShared] = useState(false);
	const [shareBrainText, setSharedBrainText] = useState("make brain private");
	const contents = useContent();

	async function getURL() {
		try {
			const res = await axios.post(
				`${BACKEND_LINK}/share`,
				{ share: true },
				{
					headers: { authorization: localStorage.getItem("jwt") },
				}
			);
			const shareUrl = `${BACKEND_LINK}/brain/${res.data.message}`;
			navigator.clipboard.writeText(shareUrl);
			alert(`activated url: ${shareUrl}\nCopied to clipboard`);
			setBrainShared(true);
			setSharedBrainText("make brain private");
		} catch (e) {
			console.log("error", e);
			alert("error");
		}
	}

	return (
		<div className="bg-black/98 text-amber-50">
			<div className="">
				<CreateModel
					open={modelOpen}
					onClose={() => {
						setModelOpen(false);
					}}
				/>
			</div>
			<div className="flex">
				<div>
					<SideBar />
				</div>
				<div className="p-4">
					<div className="flex justify-between items-center">
						<strong className="text-3xl">All Notes</strong>
						<div className="flex m-4 gap-4 justify-end">
							{/* todo: add onClick */}
							<Button
								variant="secondary"
								text={shareBrainText}
								loading={brainShared}
								startIcon={ShareIcon()}
								onClick={() => getURL()}
							/>
							<Button
								variant="primary"
								text="add content"
								startIcon={PlusIcon()}
								onClick={() => {
									setModelOpen((_) => true);
								}}
							/>
						</div>
					</div>
					<div className="flex flex-wrap gap-4 max-w-full">
						{contents?.map(({ title, link, type }, index) => (
							<Card key={index} title={title} link={link} type={type} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
