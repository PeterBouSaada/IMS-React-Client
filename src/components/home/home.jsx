import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../components';

function Home() {

	const navigate = useNavigate();

	useEffect(() => {
		if(localStorage.getItem("token") === null)
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