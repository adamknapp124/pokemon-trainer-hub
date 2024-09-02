'use client';

import React, { useState } from 'react';
import Drag from '@/app/components/compare/Drag';
import PokemonCard from '@/app/components/pokedex/PokemonCard';

export default function ComparePlaceholder({ pokedex }) {
	const [dragged, setDragged] = useState(null);
	const handleDragStart = (pokemon) => {
		setDragged(pokemon);
	};

	return (
		<div className='my-10 px-5 flex-col h-[300px]'>
			<div className='grid grid-cols-8 w-full h-full gap-2 overflow-y-auto no-scrollbar'>
				{pokedex.map((pokemon, index) => (
					<div
						key={index}
						className='hover:scale-110 duration-500'
						draggable
						onDragStart={() => handleDragStart(pokemon)}>
						<PokemonCard
							name={pokemon.name}
							image={pokemon.url}
						/>
					</div>
				))}
			</div>
			<Drag dragged={dragged} />
		</div>
	);
}
