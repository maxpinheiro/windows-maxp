
export const toTitleCase = (str: string) => str.charAt(0).toUpperCase().concat(str.substring(1));

export const wordsToTitleCase = (str: string) => str.split(' ').map(s => toTitleCase(s)).join(' ');
