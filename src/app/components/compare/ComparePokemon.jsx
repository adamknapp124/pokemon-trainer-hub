import React from 'react';

export default function ComparePokemon({ pokemon1, pokemon2 }) {
	return (
		<div className='flex w-full h-full flex-col gap-2'>
			{pokemon1?.stats?.map((stat1, index) => {
				const stat2 = pokemon2?.stats[index];
				const totalStat = stat1.base_stat + (stat2?.base_stat || 0);

				const width1 = (stat1.base_stat / totalStat) * 100;
				const width2 = (stat2?.base_stat / totalStat) * 100;

				return (
					<div
						key={stat1.stat.name}
						className='flex w-full gap-1 h-14'>
						{/* Pokémon 1 Stats */}
						<div
							className='flex font-stats text-black text-sm font-bold tracking-wide
                            hover:text-white justify-between items-center bg-gradient-to-t
                            from-poke-yellow hover:from-poke-blue to-white border-2
                            border-poke-yellow rounded-tr rounded-br transition-all ease-in-out duration-500 h-full'
							style={{
								width: pokemon2
									? `${width1}%`
									: `${stat1.base_stat * 2.5}%`,
							}}>
							<span className='capitalize px-2'>{stat1.stat.name}</span>
							<span className='px-2'>{stat1.base_stat}</span>
						</div>

						{/* Pokémon 2 Stats */}
						{pokemon2 && (
							<div
								className='flex justify-between items-center font-stats font-bold 
                                           text-white text-sm hover:text-black
                                           bg-gradient-to-t from-poke-blue hover:from-poke-yellow
                                           to-neutral-950 hover:to-white border-2 border-poke-blue
                                           rounded-tl rounded-bl transition-all ease-in-out
                                           duration-500 h-full'
								style={{ width: `${width2}%` }}>
								<span className='px-2'>{stat2.base_stat}</span>
								<span className='capitalize px-2'>{stat2.stat.name}</span>
							</div>
						)}
					</div>
				);
			}) || <div>No Pokémon selected</div>}
		</div>
	);
}
