import react from 'react';

import Hero from '@/app/components/home/Hero';
import Divider from './components/Divider';
import BattleShowcase from './components/home/BattleShowcase';

export default function Home() {
	return (
		<main>
			<Divider />
			<Hero />
			<BattleShowcase />
		</main>
	);
}
