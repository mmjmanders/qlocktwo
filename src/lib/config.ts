import { Config } from './types';

export class EnglishConfig extends Config {
	constructor() {
		super(
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
	}

	override isHourOn(index: number, hours: number, minutes: number): boolean {
		const displayHour = ((minutes < 35 ? hours : hours + 1) + 12) % 12;
		const display = this.hours[displayHour];
		return display.includes(index);
	}

	override isMinuteOn(index: number, minutes: number): boolean {
		const displayMinute = minutes - (minutes % 5);
		const display = this.minutes[displayMinute];
		return display.includes(index);
	}
}

export class DutchConfig extends Config {
	constructor() {
		super(
			'hetkisavijftienatzvoorovermekwarthalfspmovervoorthgeenstweeamcdrieviervijfzeszevenonegenachttienelftwaalfpmuur',
			{
				0: [99, 100, 101, 102, 103, 104],
				1: [51, 52, 53],
				2: [55, 56, 57, 58],
				3: [62, 63, 64, 65],
				4: [66, 67, 68, 69],
				5: [70, 71, 72, 73],
				6: [74, 75, 76],
				7: [77, 78, 79, 80, 81],
				8: [88, 89, 90, 91],
				9: [83, 84, 85, 86, 87],
				10: [92, 93, 94, 95],
				11: [96, 97, 98]
			},
			{
				0: [0, 1, 2, 4, 5, 107, 108, 109],
				5: [7, 8, 9, 10, 40, 41, 42, 43],
				10: [11, 12, 13, 14, 40, 41, 42, 43],
				15: [28, 29, 30, 31, 32, 40, 41, 42, 43],
				20: [11, 12, 13, 14, 18, 19, 20, 21, 33, 34, 35, 36],
				25: [7, 8, 9, 10, 18, 19, 20, 21, 33, 34, 35, 36],
				30: [33, 34, 35, 36],
				35: [7, 8, 9, 10, 22, 23, 24, 25, 33, 34, 35, 36],
				40: [11, 12, 13, 14, 22, 23, 24, 25, 33, 34, 35, 36],
				45: [28, 29, 30, 31, 32, 44, 45, 46, 47],
				50: [11, 12, 13, 14, 44, 45, 46, 47],
				55: [7, 8, 9, 10, 44, 45, 46, 47]
			}
		);
	}

	override isHourOn(index: number, hours: number, minutes: number): boolean {
		const displayHour = ((minutes < 20 ? hours : hours + 1) + 12) % 12;
		const display = this.hours[displayHour];
		return display.includes(index);
	}

	override isMinuteOn(index: number, minutes: number): boolean {
		const displayMinute = minutes - (minutes % 5);
		const display = this.minutes[displayMinute];
		return display.includes(index);
	}
}
