import React from 'react';

export default function PokemonStats({ stats, types, height, weight, id }) {
	return (
		<div className='flex flex-col'>
			<div className='flex gap-14 justify-center items-end h-64 p-4'>
				{stats.map((stat, index) => (
					<div
						key={index}
						className='flex flex-col items-center w-20'>
						<div
							className='w-full bg-gradient-to-t from-poke-yellow hover:from-poke-blue
                                         to-neutral-950 border-2 border-poke-yellow hover:border-poke-blue
                                          rounded-t transition duration-300'
							style={{ height: `${stat.base_stat * 2.5}px` }}
						/>
						<div className='mt-2'>{stat.base_stat}</div>
						<div
							className='mt-1 text-center text-xs capitalize truncate font-stats font-extrabold
                                                 tracking-wide'>
							{stat.stat.name}
						</div>
					</div>
				))}
			</div>
			<div className='font-stats flex w-full justify-between'>
				<div className='flex'>
					Type:
					{types.map((type, index) => (
						<div
							key={index}
							className='capitalize font-stats'>
							{' '}
							{type.type.name}
						</div>
					))}
				</div>
				<div className=''>Height: {height}</div>
				<div className=''>Weight: {weight}</div>
				<div className=''>ID: {id}</div>
			</div>
		</div>
	);
}
