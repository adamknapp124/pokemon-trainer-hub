import React from 'react';
import Image from 'next/image';

import { loadPokedex } from '../api/pokedex/route';
import PokemonCard from '../components/pokedex/PokemonCard';

export default async function Pokedex() {
	const pokedex = await loadPokedex();

	return (
		<section className='my-10 flex-col'>
			<div className='grid grid-cols-8 w-full h-full gap-2'>
				{pokedex.map((pokemon, index) => (
					<div
						key={index}
						className=''>
						<PokemonCard
							name={pokemon.name}
							image={pokemon.url}
						/>
					</div>
				))}
			</div>
		</section>
	);
}
