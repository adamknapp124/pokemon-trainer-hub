import react from 'react';

import Hero from '@/app/components/home/Hero';
import Divider from './components/Divider';
import BattleShowcase from './components/home/BattleShowcase';
import Footer from './components/footer/Footer';

export default function Home() {
	return (
		<main className='flex flex-col'>
			<Divider />
			<Hero />
			<BattleShowcase />
			<Footer />
		</main>
	);
}
