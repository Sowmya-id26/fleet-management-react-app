import {useEffect, useRef, useState} from "react";
import { useNavigate } from "react-router-dom";

function Login() {
	const [email, setEmail] = useState("");
	const [Password, setPassword] = useState("");
	const emailRef = useRef();
	const navigate = useNavigate();

	useEffect(() => {
		emailRef.current.focus()
		const handelLogin = () => {
			if (email === "admin@gmail.com" && Password === admin1234) {
				alert("Login Sucessfull")
				localStorage.setItem("authicate true")
			} else {
				alert("wrong email or password")
			}
		}

	})


return (
	<div>
		<div>Login Page</div>
		<input ref={emailRef}
			type="Email"
			placeholder="Email"
			onChange={
				(e) => setEmail(e.target.value)
			}/>
		<input type="password" placeholder="password"
			onChange={
				(e) => setPassword(e.target.value)
			}/>
	</div>


)}export default Login;
