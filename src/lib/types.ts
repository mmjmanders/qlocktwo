export enum Language {
	en = 'en',
	nl = 'nl'
}

export abstract class Config {
	clock: string;
	protected hours: { [key: number]: number[] };
	protected minutes: { [key: number]: number[] };

	constructor(
		clock: string,
		hours: { [key: number]: number[] },
		minutes: { [key: number]: number[] }
	) {
		this.clock = clock;
		this.hours = hours;
		this.minutes = minutes;
	}

	abstract isHourOn(index: number, hours: number, minutes: number): boolean;
	abstract isMinuteOn(index: number, minutes: number): boolean;
}

export type ClockConfig = {
	[key in Language]: Config;
};
