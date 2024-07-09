import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, type RenderResult } from '@testing-library/svelte';
import { default as Clock } from '../lib/clock.svelte';
import { Config } from '$lib';

describe('clock', () => {
	let component: RenderResult<Clock>;

	beforeEach(() => {
		component = render(Clock, {
			date: new Date(),
			config: new (class extends Config {
				isHourOn(index: number, hours: number, minutes: number): boolean {
					return index === hours + minutes;
				}

				isMinuteOn(index: number, minutes: number): boolean {
					return index === minutes;
				}
			})('clock', { 0: [0] }, { 0: [0] })
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
