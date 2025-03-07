import { PhraseObjectType } from './constants';

export const capitalizeString = (str: string): string => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getPhrasesByType = (
  phrases: PhraseObjectType[],
  phraseType: string
): PhraseObjectType[] => {
  switch (phraseType) {
    case 'quote':
      return phrases
        .filter((phrase) => phrase.phraseType === phraseType)
        .sort((a, b) => a.author!.localeCompare(b.author!));
    case 'verse':
      return phrases
        .filter((phrase) => phrase.phraseType === phraseType)
        .sort((a, b) => a.source!.localeCompare(b.source!));
    case 'fact':
      return phrases.filter((phrase) => phrase.phraseType === phraseType);
    default:
      return phrases;
  }
};

export const getPhrasesWithAuthors = (
  phrases: PhraseObjectType[]
): PhraseObjectType[] => {
  return phrases
    .filter((phrase) => phrase.author)
    .toSorted((a, b) => a.author!.localeCompare(b.author!));
};
