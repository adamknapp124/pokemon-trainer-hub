import React from 'react';
import Link from 'next/link';

export default function NavLink({ route, name }) {
	return (
		<Link
			href={route}
			className='hover:text-yellow-300 transition duration-100 ease hover:animate-pulse'>
			{name}
		</Link>
	);
}
