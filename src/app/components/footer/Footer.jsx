import React from 'react';

import Divider from '../Divider';

import FooterBody from './FooterBody';
import Disclaimer from './Disclaimer';

export default function Footer() {
	return (
		<div className='m-auto w-full bg-black'>
			<FooterBody />

			<Disclaimer />
		</div>
	);
}
