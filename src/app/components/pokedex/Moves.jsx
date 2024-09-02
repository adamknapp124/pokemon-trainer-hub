import React from 'react';

export default function Moves({ moves }) {
	return (
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
	);
}
