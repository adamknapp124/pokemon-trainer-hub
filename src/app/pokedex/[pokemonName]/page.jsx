import React from 'react';
import Image from 'next/image';

import MidNav from '@/app/components/home/MidNav';

import { getPokemon } from '../../api/pokedex/route';

export default async function PokemonDetails({ params }) {
	const { stats, sprites, types, name, weight, moves, id, height, cries } =
		await getPokemon(params.pokemonName);

	return (
		<div className='text-white bg-black flex justify-center items-center'>
			<section className='w-full justify-center flex-col items-center'>
				<h1 className='capitalize font-stats text-5xl mt-20 font-bold tracking-widest'>
					{name}
				</h1>
				<div className='flex items-center justify-between w-full mt-20 h-[600px]'>
					<Image
						alt={name}
						src={sprites.other.dream_world.front_default}
						width={500}
						height={500}
					/>
					<div className='flex flex-col'>
						<div className='flex gap-14 justify-center items-end h-64 p-4'>
							{stats.map((stat, index) => (
								<div
									key={index}
									className='flex flex-col items-center w-20'>
									<div
										className='w-full bg-gradient-to-t from-poke-yellow to-neutral-950 border-2 border-poke-yellow rounded-t'
										style={{ height: `${stat.base_stat * 2.5}px` }}
									/>
									<div className='mt-2'>{stat.base_stat}</div>
									<div className='mt-1 text-center text-xs capitalize truncate font-stats font-extrabold tracking-wide'>
										{stat.stat.name}
									</div>
								</div>
							))}
						</div>
						<div className='font-stats'>
							<div className='flex'>
								Types:
								{types.map((type, index) => (
									<div
										key={index}
										className='capitalize font-stats'>
										{type.type.name}
									</div>
								))}
							</div>
							<div className=''>Height: {height}</div>
							<div className=''>Weight: {weight}</div>
							<div className=''>ID: {id}</div>
						</div>
					</div>
				</div>
				<div className='w-full p-10 font-stats mb-20'>
					<h2 className='my-5 font-bold text-3xl'>Moves</h2>
					<div
						className='grid grid-cols-6 grid-row-5 overflow-auto gap-4 h-48 no-scrollbar
                     border-2 border-poke-yellow rounded-md p-4 text-lg'>
						{moves.map((move, index) => (
							<div
								key={index}
								className='capitalize font-body'>
								{move.move.name}
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
