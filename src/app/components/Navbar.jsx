import React from 'react';

import Image from 'next/image';

import logo from '../../../public/images/poke-logo.png';
import Divider from '../components/Divider';

const Navlinks = [
	{
		name: 'Features',
		link: '/features',
	},
	{
		name: 'Updates',
		link: '/updates',
	},
	{
		name: 'Requests',
		link: '/requests',
	},
	{
		name: 'Guide',
		link: '/guide',
	},
];

const authLinks = [
	{
		name: 'Login',
		link: '/login',
	},
	{
		name: 'Sign up',
		link: '/signup',
	},
];

export default function Navbar() {
	return (
		<nav className='bg-black h-[100px] relative'>
			<section className='justify-center h-full items-center flex justify-between max-w-[1280px] m-auto font-navbar text-xl'>
				<Image
					src={logo}
					alt='logo'
					width={150}
					height={150}
					className='cursor-pointer'
				/>
				<div className='flex gap-10 text-white'>
					{Navlinks.map((link) => (
						<button key={link.name}>{link.name}</button>
					))}
				</div>
				<div className='flex gap-10 text-white'>
					{authLinks.map((link) => (
						<button key={link.name}>{link.name}</button>
					))}
				</div>
			</section>
			<Divider />
		</nav>
	);
}
