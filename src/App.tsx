import Dashboard from "./pages/dashboard";
import SignInPage from "./pages/signinPage";
import SignUpPage from "./pages/signupPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/signup" element={ <SignUpPage />}/>
				<Route path="/signin" element={ <SignInPage />}/>
				<Route path="/" element={ <Dashboard />}/>
			</Routes>
		</BrowserRouter>
	);
}
