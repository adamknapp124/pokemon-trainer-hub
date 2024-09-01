import React from 'react';
import Blur from '../Blur';

import { featureLinks } from '@/app/constants/navLinks';
import NavLink from '../navbar/NavLink';

export default function MidNav() {
	return (
		<div className='text-white h-20 mt-20 flex justify-between w-full items-center relative'>
			<div className='z-50 flex justify-between items-center w-full font-body font-bold tracking-wide'>
				{featureLinks.map((link) => (
					<NavLink
						key={link.name}
						route={link.href}
						name={link.name}
					/>
				))}
			</div>
			<Blur />
		</div>
	);
}
