import React from 'react';
import Link from 'next/link';

export default function NavLink({ route, name }) {
	return (
		<Link
			href={route}
			className='hover:text-[#FAE373] transition duration-100 ease hover:animate-pulse text-2xl font-body font-bold tracking-wide'>
			{name}
		</Link>
	);
}
