import React from 'react';

import Link from 'next/link';

import Image from 'next/image';

import { Navlinks, authLinks } from '@/app/constants/navLinks';
import NavLink from './NavLink';

import logo from '../../../../public/images/poke-logo.png';
import Divider from '../Divider';

export default function Navbar() {
	return (
		<nav className='bg-black h-[100px] relative'>
			<section className='justify-center h-full items-center flex justify-between max-w-[1280px] m-auto font-navbar text-xl font-bold tracking-wide'>
				<Link href='/'>
					<Image
						src={logo}
						alt='logo'
						width={175}
						height={175}
						className='cursor-pointer'
					/>
				</Link>
				<div className='flex gap-10 text-white'>
					{Navlinks.map((link) => (
						<NavLink
							key={link.name}
							route={link.href}
							name={link.name}
						/>
					))}
				</div>
				<div className='flex gap-10 text-white'>
					{authLinks.map((link) => (
						<NavLink
							key={link.name}
							route={link.href}
							name={link.name}
						/>
					))}
				</div>
			</section>
			<Divider />
		</nav>
	);
}
