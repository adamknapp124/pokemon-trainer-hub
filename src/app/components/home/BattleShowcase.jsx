import React from 'react';
import Image from 'next/image';

import showcase from '../../../../public/images/genesect-vs-mewtwo.png';
import Divider from '../Divider';
import Blur from '../Blur';

export default function BattleShowcase() {
	return (
		<main className='bg-black'>
			<section className='text-white flex-col items-center py-40 gap-10'>
				<div>
					<Image
						src={showcase}
						alt='showcase'
					/>
				</div>
				<div className='flex gap-10 font-body'>
					<p>
						<span className='text-xl text-poke-red'>COMPARE.</span> Analyze
						the strengths and weaknesses of different Pokémon to choose the
						best team members for your strategy.
					</p>
					<p>
						<span className='text-xl text-poke-yellow'>STRATEGIZE.</span>{' '}
						Develop tactical plans using detailed stats and matchups to outwit
						your opponents in battles.
					</p>
					<p>
						<span className='text-xl text-poke-purple'>DOMINATE.</span>{' '}
						Utilize your optimized team and strategic insights to achieve
						victory and become a top Pokémon trainer.
					</p>
				</div>
			</section>
			<Divider />
			<Blur />
		</main>
	);
}
