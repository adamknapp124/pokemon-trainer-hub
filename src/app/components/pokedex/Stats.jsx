import React from 'react';
import Image from 'next/image';

import PokemonStats from '@/app/components/pokedex/PokemonStats';

export default function Stats({ name, stats, sprites, types, height, weight, id }) {
	return (
		<div className='flex items-center justify-between w-full h-[600px]'>
			<Image
				alt={name}
				src={sprites.other.dream_world.front_default}
				width={500}
				height={500}
			/>
			<PokemonStats
				stats={stats}
				types={types}
				height={height}
				weight={weight}
				id={id}
			/>
		</div>
	);
}
