import { useState } from "react";
import Input from "../components/inputComponent";
import Button from "../components/top bar/Button";

export default function SignInPage() {
	const [loading, setLoading] = useState(false);
	return (
		<div className="h-screen w-screen bg-slate-950 flex justify-center items-center">
			<div className="bg-gray-300 rounded-xl min-w-48 p-8">
				<Input placeholder={"Email"} />
				<Input placeholder={"Password"} />
				<div className="pt-4 flex justify-center">
					<Button variant="primary" text="Sign in" loading={loading} onClick={() => setLoading((_) => true)} />
				</div>
			</div>
		</div>
	);
}

