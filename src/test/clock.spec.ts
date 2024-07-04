import { beforeEach, describe, it, expect, vi } from 'vitest';
import { render, screen, type RenderResult } from '@testing-library/svelte';
import { default as Clock } from '../lib/clock.svelte';

describe('Clock', () => {
	let component: RenderResult<Clock>;

	beforeEach(() => {
		component = render(Clock, {
			date: new Date(),
			config: {
				clock: 'clock',
				isHourOn: vi.fn(),
				isMinuteOn: vi.fn(),
				hours: { 0: [] },
				minutes: { 0: [] }
			}
		});
	});

	it('should render component', () => {
		expect(component).toBeTruthy();
	});

	it('should have clock div', () => {
		const div = component.container.getElementsByClassName('clock')[0];
		expect(div).toBeTruthy();
	});
});
