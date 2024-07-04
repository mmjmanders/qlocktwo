import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/svelte';
import { default as Dot } from '../lib/dot.svelte';

describe('dot', () => {
	it('should render component', () => {
		const component = render(Dot, { index: 0, isOn: true });
		expect(component).toBeTruthy();
	});

	it.each([
		{ index: 1, isOn: true, result: true },
		{ index: 2, isOn: false, result: false }
	])('should have index $index and active $result for isOn $isOn', ({ index, isOn, result }) => {
		const component = render(Dot, { index, isOn });
		const div = component.container.getElementsByClassName('dot')[0];
		expect(div.classList.contains(`dot-${index}`)).toBe(true);
		expect(div.classList.contains('active')).toBe(result);
	});
});
