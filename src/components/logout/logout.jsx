import React, {useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const Logout = () => {
	const navigate = useNavigate();

	if(Cookies.get("token") !== undefined)
	{
		Cookies.remove("token");
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