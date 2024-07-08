import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { Config } from '$lib';

describe('config', () => {
	let config: Config;

	beforeAll(() => {
		config = new (class extends Config {
			isHourOn(index: number, hours: number, minutes: number): boolean {
				const displayHour = ((minutes < 35 ? hours : hours + 1) + 12) % 12;
				const display = this.hours[displayHour];
				return display.includes(index);
			}

			isMinuteOn(index: number, minutes: number): boolean {
				const displayMinute = minutes - (minutes % 5);
				const display = this.minutes[displayMinute];
				return display.includes(index);
			}
		})(
			'itlisasampmacquarterdctwentyfivexhalfstenftopasterunineonesixthreefourfivetwoeightelevenseventwelvetenseoclock',
			{
				0: [93, 94, 95, 96, 97, 98],
				1: [55, 56, 57],
				2: [74, 75, 76],
				3: [61, 62, 63, 64, 65],
				4: [66, 67, 68, 69],
				5: [70, 71, 72, 73],
				6: [58, 59, 60],
				7: [88, 89, 90, 91, 92],
				8: [77, 78, 79, 80, 81],
				9: [51, 52, 53, 54],
				10: [99, 100, 101],
				11: [82, 83, 84, 85, 86, 87]
			},
			{
				0: [0, 1, 3, 4, 104, 105, 106, 107, 108, 109],
				5: [28, 29, 30, 31, 44, 45, 46, 47],
				10: [38, 39, 40, 44, 45, 46, 47],
				15: [11, 13, 14, 15, 16, 17, 18, 19, 44, 45, 46, 47],
				20: [22, 23, 24, 25, 26, 27, 44, 45, 46, 47],
				25: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 44, 45, 46, 47],
				30: [33, 34, 35, 36, 44, 45, 46, 47],
				35: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 42, 43],
				40: [22, 23, 24, 25, 26, 27, 42, 43],
				45: [11, 13, 14, 15, 16, 17, 18, 19, 42, 43],
				50: [38, 39, 40, 42, 43],
				55: [28, 29, 30, 31, 42, 43]
			}
		);
	});

	beforeEach(() => {
		vi.useFakeTimers();
	});

	afterEach(() => {
		vi.useRealTimers();
	});

	it.each([
		{ index: 93, hours: 0, minutes: 0, hourOn: true },
		{ index: 93, hours: 0, minutes: 35, hourOn: false },
		{ index: 55, hours: 0, minutes: 35, hourOn: true },
		{ index: 99, hours: 10, minutes: 30, hourOn: true },
		{ index: 99, hours: 10, minutes: 35, hourOn: false },
		{ index: 73, hours: 5, minutes: 10, hourOn: true },
		{ index: 73, hours: 5, minutes: 55, hourOn: false },
		{ index: 79, hours: 8, minutes: 10, hourOn: true },
		{ index: 79, hours: 8, minutes: 40, hourOn: false }
	])(
		'should have isHourOn "$hourOn", for index $index, hours $hours and minutes $minutes',
		({ index, hours, minutes, hourOn }) => {
			const date = new Date(0, 0, 0, hours, minutes);
			vi.setSystemTime(date);
			expect(config.isHourOn(index, date.getHours(), date.getMinutes())).toMatchSnapshot();
			expect(config.isHourOn(index, date.getHours(), date.getMinutes())).toBe(hourOn);
		}
	);

	it.each([
		{ index: 3, minutes: 0, minuteOn: true },
		{ index: 3, minutes: 7, minuteOn: false },
		{ index: 15, minutes: 45, minuteOn: true },
		{ index: 15, minutes: 47, minuteOn: true },
		{ index: 31, minutes: 28, minuteOn: true },
		{ index: 31, minutes: 29, minuteOn: true },
		{ index: 31, minutes: 30, minuteOn: false },
		{ index: 19, minutes: 16, minuteOn: true },
		{ index: 19, minutes: 19, minuteOn: true },
		{ index: 19, minutes: 21, minuteOn: false }
	])(
		'should have isMinuteOn "$minuteOn", for index $index and minutes $minutes',
		({ index, minutes, minuteOn }) => {
			const date = new Date(0, 0, 0, 0, minutes);
			vi.setSystemTime(date);
			expect(config.isMinuteOn(index, date.getMinutes())).toMatchSnapshot();
			expect(config.isMinuteOn(index, date.getMinutes())).toBe(minuteOn);
		}
	);
});
