import { NextResponse } from 'next/server';

export async function loadPokedex() {
	const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
	if (response.ok) {
		const data = await response.json();
		const pokemonDetails = data.results.map((poke, index) => {
			const id = poke.url.split('/').filter(Boolean).pop();
			const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
			return { url: imageURL, name: poke.name };
		});
		return pokemonDetails;
	} else {
		return null;
	}
}

export async function getPokemon(name) {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
	if (response.ok) {
		const data = await response.json();
		return data;
	} else {
		return null;
	}
}
