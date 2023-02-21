import React, {useEffect} from 'react'
import { useNavigate } from "react-router-dom";


const Logout = () => {
	const navigate = useNavigate();

	if(localStorage.getItem("token") != null)
	{
		localStorage.removeItem("token");
	}

	useEffect(() => 
	{
		navigate("/", {replace: true});
	}, []);

	return (
		<div>Logging you out...</div>
	);
}

export default Logout;