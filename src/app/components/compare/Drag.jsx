'use client';

import React, { useState } from 'react';

import Drop from '@/app/components/compare/Drop';
import ComparePokemon from '@/app/components/compare/ComparePokemon';

export default function Drag({ dragged }) {
	const [pokemon1, setPokemon1] = useState(null);
	const [pokemon2, setPokemon2] = useState(null);

	const handleDragOver = (e) => {
		e.preventDefault();
	};

	const handleDrop1 = (pokemon) => {
		setPokemon1(pokemon);
	};

	const handleDrop2 = (pokemon) => {
		setPokemon2(pokemon);
	};

	return (
		<div className='mt-20 max-w-[1536px] m-auto'>
			<div className='w-full h-full flex justify-center items-center gap-2 transition duration-300 ease-in-out'>
				<Drop
					onDrop={handleDrop1}
					dragged={dragged}
				/>
				{pokemon1 && (
					<ComparePokemon
						pokemon1={pokemon1}
						pokemon2={pokemon2}
					/>
				)}
				{pokemon1 && (
					<Drop
						onDrop={handleDrop2}
						dragged={dragged}
					/>
				)}
			</div>
		</div>
	);
}
