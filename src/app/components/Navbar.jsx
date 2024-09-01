import React from 'react';

import Image from 'next/image';

import { Navlinks, authLinks } from '@/app/constants/navLinks';

import logo from '../../../public/images/poke-logo.png';
import Divider from '../components/Divider';

export default function Navbar() {
	return (
		<nav className='bg-black h-[100px] relative'>
			<section className='justify-center h-full items-center flex justify-between max-w-[1280px] m-auto font-navbar text-xl font-bold tracking-wide'>
				<Image
					src={logo}
					alt='logo'
					width={175}
					height={175}
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

// Create navlink component to break down code even more, then use the map function to replace the buttons with nav
// Links for navigation
