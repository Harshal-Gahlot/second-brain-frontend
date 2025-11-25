import { useRef, useState } from "react";
import Input from "../components/inputComponent";
import Button from "../components/top bar/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
	const usernameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const [loading, setLoading] = useState(false);
	const navi = useNavigate();

	async function signup() {
		setLoading((_) => true);
		const username = usernameRef.current?.value;
		const email = emailRef.current?.value;
		const password = passwordRef.current?.value;
		try {
			await axios.post("http://localhost:3000/api/v1/signup", {
				username: username,
				email: email,
				password: password,
			});
			navi("/signin");
		} catch (e) {
			alert("signed up failed");
			console.log("error", e);
		}
	}

	return (
		<div className="h-screen w-screen bg-slate-950 flex justify-center items-center">
			<div className="bg-gray-300 rounded-xl min-w-48 p-8">
				<Input ref={usernameRef} placeholder={"Username"} />
				<Input ref={emailRef} placeholder={"Email"} />
				<Input ref={passwordRef} placeholder={"Password"} />
				<div className="pt-4 flex justify-center">
					<Button variant="primary" text="Sign up" loading={loading} onClick={() => signup()} />
				</div>
			</div>
		</div>
	);
}
