import React from 'react';

export default function Title({ name }) {
	return (
		<h1 className='capitalize font-stats text-5xl mt-20 font-bold tracking-widest'>
			{name}
		</h1>
	);
}
