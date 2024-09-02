import React from 'react';

import Title from '@/app/components/pokedex/Title';
import Stats from '@/app/components/pokedex/Stats';
import Moves from '@/app/components/pokedex/Moves';

export default function Info({ name, sprites, stats, types, height, weight, moves, id }) {
	return (
		<section className='w-full justify-center flex-col items-center'>
			<Title name={name} />
			<Stats
				name={name}
				stats={stats}
				id={id}
				sprites={sprites}
				types={types}
				height={height}
				weight={weight}
			/>
			<Moves moves={moves} />
		</section>
	);
}
