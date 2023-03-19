import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../components';
import Cookies from 'js-cookie';

function Home() {

	const navigate = useNavigate();

	useEffect(() => {
		if(Cookies.get("token") === undefined)
		{
			navigate('/login', {replace: true});
		}
	}, []);

	return (
		<div className='home-container'>
			<Navbar />
			<div className="content">
				this is home
			</div>
		</div>
	)
}

export default Home