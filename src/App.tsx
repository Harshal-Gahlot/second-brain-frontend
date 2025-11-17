import Button from "./components/top bar/Button";
import Card from "./components/main content/Card";
import PlusIcon from "./icons/plusicon";
import ShareIcon from "./icons/shareicon";
import CreateModel from "./components/top bar/model";
import { useState } from "react";

function App() {
	const [modelOpen, setModelOpen] = useState(false);
	return (
		<div className="p-4">
			<div className="">
				<CreateModel
					open={modelOpen}
					onClose={() => {
						setModelOpen(false);
					}}
				/>
			</div>
			<div className="flex m-4 gap-4 justify-end">
				{/* todo: add onClick */}
				<Button
					variant="secondary"
					text="share brain"
					startIcon={ShareIcon()}
					onClick={() => {
						() => {};
					}}
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
			<div className="flex flex-wrap gap-4 max-w-full">
				<Card
					title="hello"
					link="https://www.youtube.com/embed/LdPp6ikd3Qw?si=xTGqjf802-uzA6cI"
					type="youtube"
				/>
				<Card title="hello" link="https://www.youtube.com/embed/8nX9P3Is8N8" type="youtube" />
				<Card
					title="hello"
					link="https://www.youtube.com/watch?v=PvLz5kCVIss&list=RDPvLz5kCVIss&start_radio=1"
					type="youtube"
				/>
				<Card title="hello" link="https://twitter.com/positronx_/status/1994904729072406835" type="twitter" />
				<Card title="hello" link="https://twitter.com/purusa0x6c/status/1995008245539422443" type="twitter" />
				<Card title="hello" link="https://x.com/purusa0x6c/status/1995049799318680004" type="twitter" />
			</div>
		</div>
	);
}

export default App;
