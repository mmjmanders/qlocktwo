import { beforeEach, describe, expect, it } from 'vitest';
import { default as LanguageSelector } from '../lib/language-selector.svelte';
import { render, type RenderResult } from '@testing-library/svelte';
import { Language } from '$lib';

describe('language-selector', () => {
	let component: RenderResult<typeof LanguageSelector>;

	beforeEach(() => {
		component = render(LanguageSelector, {
			language: Language.en
		});
	});

	it('should render component', () => {
		expect(component).toBeTruthy();
	});

	it('should have language-selector div', () => {
		const element = component.container.getElementsByClassName('language-selector')[0];
		expect(element).toBeTruthy();
	});

	it('should have a number of buttons equal to the number of languages', () => {
		const divs = component.container.getElementsByClassName('language');
		expect(divs.length).toBe(Object.keys(Language).length);
	});
});
