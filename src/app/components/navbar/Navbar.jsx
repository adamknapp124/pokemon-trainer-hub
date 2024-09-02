'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { navlinks, authLinks, featureLinks } from '@/app/constants/navLinks';
import NavLink from './NavLink';

import logo from '../../../../public/images/poke-logo.png';
import Divider from '../Divider';

export default function Navbar() {
	const pathname = usePathname();
	return (
		<nav className='bg-black h-[100px] relative'>
			<section className='justify-center h-full items-center flex justify-between max-w-[1280px] m-auto font-body text-xl font-bold tracking-wide'>
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
					{pathname === '/'
						? navlinks.map((link) => (
								<NavLink
									key={link.name}
									route={link.href}
									name={link.name}
								/>
						  ))
						: featureLinks.map((link) => (
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
