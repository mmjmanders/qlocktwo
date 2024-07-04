import { describe, it, expect } from 'vitest';
import { default as Letter } from '../lib/letter.svelte';
import { render } from '@testing-library/svelte';

describe('letter', () => {
	it('should render component', () => {
		const component = render(Letter, { isOn: true, letter: 'a' });
		expect(component).toBeTruthy();
	});

	it.each([
		{ isOn: true, letter: 'a', active: true },
		{ isOn: false, letter: 'b', active: false }
	])('should have isOn $isOn for active $active and letter $letter', ({ isOn, letter, active }) => {
		const component = render(Letter, { isOn, letter });
		const element = component.container.getElementsByClassName('letter')[0];
		expect(element.classList.contains('active')).toBe(active);
		expect(element.innerHTML).toBe(letter);
	});
});
