export enum Language {
	en = 'en',
	nl = 'nl'
}

export type ConfigPerLanguage = {
	clock: string;
	isHourOn: (
		index: number,
		hours: number,
		minutes: number,
		config: { [key: number]: number[] }
	) => boolean;
	isMinuteOn: (index: number, minutes: number, config: { [key: number]: number[] }) => boolean;
	hours: { [key: number]: number[] };
	minutes: { [key: number]: number[] };
};

export type Config = {
	[key in Language]: ConfigPerLanguage;
};
