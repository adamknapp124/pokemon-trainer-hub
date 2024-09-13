import React from 'react';

export default function FooterBody() {
	return (
		<div className='bg-black border-t-4 border-poke-yellow'>
			<section className='flex-col gap-12 py-8'>
				<p className='font-stats text-lg tracking-wide font-bold'>
					<span className='text-poke-red font-stats text-lg tracking-wide font-bold'>
						About Us
					</span>{' '}
					| Learn moore about our mission to help Pokemon trainers build the
					best teams
				</p>
				<p className='font-stats text-lg tracking-wide font-bold'>
					<span className='text-poke-red font-stats text-lg tracking-wide font-bold'>
						Contact
					</span>{' '}
					| Have questions or feedback? Get in touch with us here.
				</p>
				<p className='font-stats text-lg tracking-wide font-bold'>
					<span className='text-poke-red font-stats text-lg tracking-wide font-bold'>
						Privacy Policy
					</span>{' '}
					| Read our policy on how we protect your data.
				</p>
				<p className='font-stats text-lg tracking-wide font-bold'>
					<span className='text-poke-red font-stats text-lg tracking-wide font-bold'>
						Terms of Service
					</span>{' '}
					| Understand the rules and guidelines for using our site.
				</p>
				<p className='text-poke-yellow font-stats text-lg tracking-wide font-bold m-auto'>
					© 2024 Pokémon Trainer Hub. All rights reserved.
				</p>
			</section>
		</div>
	);
}
