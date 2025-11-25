import { useRef, useState } from "react";
import Input from "../components/inputComponent";
import Button from "../components/top bar/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignInPage() {
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const [loading, setLoading] = useState(false);
	const navi = useNavigate();

	async function signin() {
		setLoading((_) => true);
		const email = emailRef.current?.value;
		const password = passwordRef.current?.value;

		try {
			const res = await axios.post("http://localhost:3000/api/v1/signin", {
				email,
				password,
			});

			localStorage.setItem("jwt", res.data.token);
			navi("/")
		} catch (e) {
			console.log("e", e);
			alert("failed");
		}
	}

	return (
		<div className="h-screen w-screen bg-slate-950 flex justify-center items-center">
			<div className="bg-gray-300 rounded-xl min-w-48 p-8">
				<Input ref={emailRef} placeholder={"Email"} />
				<Input ref={passwordRef} placeholder={"Password"} />
				<div className="pt-4 flex justify-center">
					<Button variant="primary" text="Sign in" loading={loading} onClick={() => signin()} />
				</div>
			</div>
		</div>
	);
}
