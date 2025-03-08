export interface PhraseObjectType {
  text: string;
  source?: string;
  author?: string;
  tags: string[];
  category: string;
}

export const phrases: PhraseObjectType[] = [
  {
    text: 'Do no be anxious about anything; but, in everything, with prayer and petition, with thanksgiving present your requests to God. And the the peace of God, which transcends all understanding, will guard your hearts and minds in Christ Jesus.',
    source: 'Phillipians 4:6-7',
    category: 'verse',
    tags: ['prayer', 'comfort', 'anxiety'],
  },
  {
    text: 'Be quick to listen, slow to speak and slow to become angry, because human anger does not produce the righteousness that God desires.',
    source: 'James 1:19b-20',
    category: 'verse',
    tags: ['anger', 'instruction'],
  },
  {
    author: 'Albert Einstein',
    text: 'Failure is success in progress.',
    tags: ['Inspiration', 'Persistence'],
    category: 'quote',
  },
  {
    author: 'Vincent Van Gogh',
    text: 'Great things are not done by impulse, but by a series of small things brought together.',
    tags: ['Inspiration', 'Persistence'],
    category: 'quote',
  },
  {
    author: 'Thomas Jefferson',
    text: 'Opportunity is missed by most people because it is dressed in overalls and looks like work.',
    tags: ['Inspiration', 'Determination'],
    category: 'quote',
  },
  {
    author: 'Mark Twain',
    text: "Why not go out on a limb? That's where the fruit is.",
    tags: ['Inspiration'],
    category: 'quote',
  },
  {
    author: 'William James',
    text: 'It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.',
    tags: ['Inspiration', 'Positivity'],
    category: 'quote',
  },
  {
    text: 'Koalas have fingerprints. Koalas are the only other animal besides humans that have fingerprints.',
    category: 'fact',
    tags: ['animals', 'koalas'],
  },
  {
    text: 'The sun is about 400 times larger than the moon.',
    category: 'fact',
    tags: ['space', 'sun', 'moon'],
  },
  {
    text: 'Never argue with stupid people, they will drag you down to their level and beat you with experience.',
    category: 'quote',
    tags: ['humor'],
    author: 'Mark Twain',
  },
  {
    text: 'Kindness is the language which the deaf can hear and the blind can see.',
    category: 'quote',
    tags: ['kindness'],
    author: 'Mark Twain',
  },
  {
    text: 'The only way to do great work is to love what you do.',
    category: 'quote',
    tags: ['inspiration', 'work'],
    author: 'Steve Jobs',
  },
  {
    text: 'Honesty is the first chapter in the book of wisdom.',
    category: 'quote',
    tags: ['wisdom', 'honesty'],
    author: 'Thomas Jefferson',
  },
  {
    category: 'verse',
    text: 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.',
    source: 'John 3:16',
    tags: ['salvation', 'eternal life'],
  },
  {
    category: 'verse',
    text: 'For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.',
    source: 'Jeremiah 29:11',
    tags: ['hope', 'future'],
  },
  {
    category: 'fact',
    text: 'The average person spends 6 months of their lifetime waiting on a red light to turn green.',
    tags: ['time', 'waiting'],
  },
  {
    category: 'verse',
    source: 'Joshuah 1:9',
    text: 'Have I not commanded you be strong and courageous. Do not be terrified; do not be discouraged, for the Lord your God will be with you wherever you go.',
    tags: ['courage', 'strength'],
  },
  {
    category: 'fact',
    text: 'Turtles can breathe through their butts.',
    tags: ['animals', 'turtles'],
  },
];
