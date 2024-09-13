import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PokemonCard({ name, image }) {
	return (
		<Link
			href={`/pokedex/${name}`}
			className='text-white'>
			<div
				className='border border-poke-blue bg-black rounded-lg flex flex-col items-center
             justify-between py-5 gap-2 h-36 font-body capitalize hover:border hover:border-poke-yellow hover:bg-neutral-950
              font-bold transition duration-200'
				draggable>
				{name}

				<Image
					alt={name}
					src={image}
					width={50}
					height={50}
				/>
			</div>
		</Link>
	);
}
