import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePost } from "../../hooks/HTTPRequests";
import Cookies from 'js-cookie';
import Configuration from '../../Config.json';
import "./login.css";

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [loginError, setLoginError] = useState(null);
	
	const abortController = new AbortController();
	const postRequest = usePost(abortController);
	const navigate = useNavigate();
	const baseURL = Configuration.API_URL;

	useEffect(() => {
		if(Cookies.get("token") !== undefined)
		{
			console.log(Cookies.get("token") + "is set");
			navigate("/", {replace: true});
		}
	}, []);

	const handleLogin = (e) => 
	{
		e.preventDefault();

		const body = {
			username: username,
			password: password,
		}

    	const headers = {'Content-Type': 'application/json'};
		
		const onSuccess = (data) => 
		{
			Cookies.set("token", "Bearer " + data.token, {expires: 1});
			navigate('/', {replace: true});
		}
		
		const onFailure = (error) =>
		{
			if(error === 401)
				setLoginError("Invalid username and password combination.");
		}
		
		postRequest(baseURL + "users/authenticate", onSuccess, onFailure,{headers: headers, body: body});

	}

	useEffect(() => {
		return abortController.abort();
	}, []);

	return (
		<section className="h-100">
			<header className="container h-100 w-100">
				<div className="d-flex align-items-center flex-column justify-content-center h-100 w-100">
					<div className="logo">
						<span className="big">IMS</span>
						<div className="dot"></div>
						<span className="small">solutions</span>
					</div>
					<form style={{ width: "30%" }} className="d-flex flex-column" onSubmit={handleLogin}>
						<div className="form-group">
							<label htmlFor="username">Username:</label>
							<input className="form-control" value={username} onChange={(e) => {setUsername(e.target.value)} } type="text" name="username" placeholder="Enter username . . ." />
						</div>
						<div className="form-group">
							<label htmlFor="password">Password:</label>
							<input className="form-control" value={password} onChange={(e) => {setPassword(e.target.value)} } type="password" name="password" placeholder="Enter password . . ." />
						</div>
						<div className="form-group" style={{ textAlign: "center" }}>
							<span>{loginError}</span>
						</div>
						<div className="form-group" style={{ textAlign: "center" }}>
							<input type="submit" value="login" className="btn btn-primary" />
						</div>
					</form>
				</div>
			</header>
		</section>
	);
};

export default Login;