export interface PhraseObjectType {
  text: string;
  source?: string;
  author?: string;
  tags: string[];
  phraseType: string;
}

export const phrases: PhraseObjectType[] = [
  {
    text: 'Do no be anxious about anything; but, in everything, with prayer and petition, with thanksgiving present your requests to God. And the the peace of God, which transcends all understanding, will guard your hearts and minds in Christ Jesus.',
    source: 'Phillipians 4:6-7',
    phraseType: 'verse',
    tags: ['prayer', 'comfort', 'anxiety'],
  },
  {
    text: 'Be quick to listen, slow to speak and slow to become angry, because human anger does not produce the righteousness that God desires.',
    source: 'James 1:19b-20',
    phraseType: 'verse',
    tags: ['anger', 'instruction'],
  },
  {
    author: 'Albert Einstein',
    text: 'Failure is success in progress.',
    tags: ['Inspiration', 'Persistence'],
    phraseType: 'quote',
  },
  {
    author: 'Vincent Van Gogh',
    text: 'Great things are not done by impulse, but by a series of small things brought together.',
    tags: ['Inspiration', 'Persistence'],
    phraseType: 'quote',
  },
  {
    author: 'Thomas Jefferson',
    text: 'Opportunity is missed by most people because it is dressed in overalls and looks like work.',
    tags: ['Inspiration', 'Determination'],
    phraseType: 'quote',
  },
  {
    author: 'Mark Twain',
    text: "Why not go out on a limb? That's where the fruit is.",
    tags: ['Inspiration'],
    phraseType: 'quote',
  },
  {
    author: 'William James',
    text: 'It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.',
    tags: ['Inspiration', 'Positivity'],
    phraseType: 'quote',
  },
  {
    text: 'Koalas have fingerprints. Koalas are the only other animal besides humans that have fingerprints.',
    phraseType: 'fact',
    tags: ['animals', 'koalas'],
  },
  {
    text: 'The sun is about 400 times larger than the moon.',
    phraseType: 'fact',
    tags: ['space', 'sun', 'moon'],
  },
];
