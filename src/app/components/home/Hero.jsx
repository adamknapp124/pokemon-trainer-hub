import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import ashPikachu from '../../../../public/images/ash-pikachu.svg';
import MidNav from './MidNav';
import Divider from '../Divider';

export default function Hero() {
	return (
		<>
			<section className='mt-8 flex-col'>
				<div className='flex justify-between w-full'>
					<div className='flex flex-col gap-5 justify-center'>
						<h1 className='text-6xl text-poke-yellow font-body font-bold tracking-evenWider'>
							Compare.
						</h1>
						<h1 className='text-6xl text-poke-yellow font-body font-bold tracking-evenWider'>
							Strategize.
						</h1>
						<h1 className='text-6xl text-poke-yellow font-body font-bold tracking-evenWider'>
							Dominate.
						</h1>
						<p className='text-white font-body text-lg tracking-wide w-[55%]'>
							Master the battlefield by analyzing stats, crafting unbeatable
							teams, and outsmarting every opponent.
						</p>
						<div className='flex gap-3 items-center'>
							<Link
								href='/signup'
								className='text-black py-3 px-8 bg-poke-yellow hover:bg-poke-blue hover:text-white transition duration-300 ease rounded-md font-extrabold tracking-wide'>
								Try it now
							</Link>
							<p className='text-white font-semibold'>
								Don't worry, it's free.
							</p>
						</div>
					</div>
					<Image
						src={ashPikachu}
						height={500}
						alt='hero-image'
					/>
				</div>
				<MidNav />
			</section>
			<Divider />
		</>
	);
}
