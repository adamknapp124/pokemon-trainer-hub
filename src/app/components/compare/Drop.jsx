'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { getPokemon } from '@/app/api/pokedex/route';

export default function Drop({ dragged, onDrop }) {
	const [droppedPokemon, setDroppedPokemon] = useState(null);

	const handleDrop = async (e) => {
		e.preventDefault();
		if (dragged) {
			const pokemonData = await getPokemon(dragged.name);
			if (pokemonData) {
				const updatedPokemon = {
					name: pokemonData.name,
					stats: pokemonData.stats,
					url: dragged.url,
				};
				setDroppedPokemon(updatedPokemon);
				console.log('stats', pokemonData.stats);

				onDrop(updatedPokemon);
			}
		}
	};

	const handleDragOver = (e) => {
		e.preventDefault();
	};

	return (
		<div
			className='flex gap-3 justify-center'
			onDrop={handleDrop}
			onDragOver={handleDragOver}>
			{droppedPokemon ? (
				<div
					className='h-[400px] w-[400px] flex flex-col items-center rounded-lg border-2 border-poke-blue p-3'
					onDrop={handleDrop}>
					{droppedPokemon && (
						<>
							<Image
								alt={droppedPokemon.name}
								src={droppedPokemon.url}
								width={200}
								height={200}
								className='h-3/4 flex w-full items-center justify-center flex-grow'
							/>
							<div className='text-white h-1/4 w-full flex items-center justify-center font-stats font-bold tracking-widest text-lg capitalize'>
								{droppedPokemon.name}
							</div>
						</>
					)}
				</div>
			) : (
				<div className='min-h-[400px] min-w-[400px] flex justify-center items-center rounded-lg border-2 border-poke-yellow text-white text-xl font-bold font-stats'>
					Drop Pokemon Here
				</div>
			)}
		</div>
	);
}
