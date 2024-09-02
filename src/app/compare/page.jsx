import React from 'react';
import { loadPokedex } from '@/app/api/pokedex/route';

import ComparePlaceholder from '../components/compare/ComparePlaceholder';

export default async function Compare() {
	const pokedex = await loadPokedex();

	return <ComparePlaceholder pokedex={pokedex} />;
}
