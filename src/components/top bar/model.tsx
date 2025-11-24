import CrossIcon from "../../icons/CrossIcon";
import Input from "../inputComponent";
import Button from "./Button";

interface CreateModelType {
    open: boolean,
    onClose: () => void
}

export default function CreateModel({ open, onClose }: CreateModelType) {
	return (
		<div>
			{open && (
				<div className="w-full h-screen bg-black/60 fixed top-0 left-0 flex justify-center ">
					<span className="bg-slate-600 absolute opacity-100 top-[50%] -translate-y-[50%] w-96 h-96 rounded-2xl">
						<div className="flex justify-end p-1 cursor-pointer" onClick={() => onClose()}>
							<CrossIcon />
						</div>
						<div className="flex flex-col items-center">
							<Input placeholder="title" />
							<Input placeholder="link" />
                            {/* todo: add onClick */}
							<Button variant="primary" text="Submit" onClick={() => {() => {}}} />
						</div>
					</span>
				</div>
			)}
		</div>
	);
}