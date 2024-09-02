import React from 'react';

import Info from '@/app/components/pokedex/Info';

import { getPokemon } from '../../api/pokedex/route';

export default async function PokemonDetails({ params }) {
	const { stats, sprites, types, name, weight, moves, id, height, cries } =
		await getPokemon(params.pokemonName);

	return (
		<Info
			name={name}
			sprites={sprites}
			moves={moves}
			stats={stats}
			types={types}
			id={id}
			weight={weight}
			height={height}
		/>
	);
}
