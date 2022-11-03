interface Color<T> {
	[key: string]: T;
}

export const colors: Color<string> = {
	primary: '#32343E',
	secondary: '#121223',
	purple: '#646982',
	fadePurple: '#A0A5BA',
	orange: '#FF7622',
	fadeOrange: '#FFE1CE',
	white: '#FFFFFF',
	white_2: '#F0F5FA',
	red: '#FF0000'
};
