import { BACKEND_LINK } from "../../config";
import CrossIcon from "../../icons/CrossIcon";
import Input from "../inputComponent";
import Button from "./Button";
import axios from "axios";
import { useRef } from "react";

interface CreateModelType {
	open: boolean;
	onClose: () => void;
}

export default function CreateModel({ open, onClose }: CreateModelType) {
	const titleRef = useRef<HTMLInputElement>(null);
	const linkRef = useRef<HTMLInputElement>(null);
	// const typeRef = useRef<HTMLInputElement>(null);

	async function addContent() {
		const title = titleRef.current?.value;
		const link = linkRef.current?.value;
		let type = link?.split("//")[1]?.replace("www.", "")?.split(".")[0];
		type = type?.toLowerCase() === "x" ? "tweet" : type

		try {
			const res = await axios.post(
				`${BACKEND_LINK}/content`,
				{
					title,
					link,
					type,
				},
				{ headers: { authorization: localStorage.getItem("jwt") } }
			);
			console.log("res", res);
			onClose()
			// alert("success");
		} catch (e) {
			alert("failed");
		}
	}

	return (
		<div>
			{open && (
				<div className="w-full h-screen bg-black/60 fixed top-0 left-0 flex justify-center ">
					<span className="bg-slate-600 absolute opacity-100 top-[50%] -translate-y-[50%] rounded-2xl">
						<div className="flex justify-end p-1 cursor-pointer" onClick={() => onClose()}>
							<CrossIcon />
						</div>
						<div className="flex flex-col items-center gap-4 pt-1 pb-10 px-8">
							<Input ref={titleRef} placeholder="title" />
							<Input ref={linkRef} placeholder="link" />
							{/* todo: add onClick */}
							<Button variant="primary" text="Submit" onClick={() => addContent()} />
						</div>
					</span>
				</div>
			)}
		</div>
	);
}
