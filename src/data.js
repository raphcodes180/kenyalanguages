// src/data.js
const kikuyuData = [
  {
    id: 'kikuyu-1',
    word: 'Mũthenya',
    language: 'Kikuyu',
    partOfSpeech: 'noun',
    translations: [
      {
        language: 'English',
        word: 'Day',
        notes: 'A period of 24 hours.',
      },
    ],
    exampleSentences: [
      {
        sentence: 'Mũthenya mwega',
        translation: 'Good day',
      },
    ],
    pronunciation: 'moo-then-ya',
    audio: null,
    tags: ['time', 'greeting'],
    notes: 'Commonly used in greetings.',
    image:
      'https://images.unsplash.com/photo-1604480093534-f9985e438914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRheXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 'kikuyu-2',
    word: 'Nyũmba',
    language: 'Kikuyu',
    partOfSpeech: 'noun',
    translations: [
      {
        language: 'English',
        word: 'House',
        notes: 'A building for human habitation.',
      },
    ],
    exampleSentences: [
      {
        sentence: 'Nyũmba ĩno nĩ nene',
        translation: 'This house is big',
      },
    ],
    pronunciation: 'nyoom-ba',
    audio: null,
    tags: ['place', 'building'],
    notes: 'Refers to a physical structure.',
    image:
      'https://images.unsplash.com/photo-1568605114967-8e628aa3b6a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
];

const kiswahiliData = [
  {
    id: 'kiswahili-1',
    word: 'Siku',
    language: 'Kiswahili',
    partOfSpeech: 'noun',
    translations: [
      {
        language: 'English',
        word: 'Day',
        notes: 'A period of 24 hours.',
      },
    ],
    exampleSentences: [
      {
        sentence: 'Siku njema',
        translation: 'Good day',
      },
    ],
    pronunciation: 'see-koo',
    audio: null,
    tags: ['time', 'greeting'],
    notes: 'Commonly used in greetings.',
    image:
      'https://images.unsplash.com/photo-1604480093534-f9985e438914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRheXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 'kiswahili-2',
    word: 'Nyumba',
    language: 'Kiswahili',
    partOfSpeech: 'noun',
    translations: [
      {
        language: 'English',
        word: 'House',
        notes: 'A building for human habitation.',
      },
    ],
    exampleSentences: [
      {
        sentence: 'Nyumba hii ni kubwa',
        translation: 'This house is big',
      },
    ],
    pronunciation: 'nyoom-ba',
    audio: null,
    tags: ['place', 'building'],
    notes: 'Refers to a physical structure.',
    image:
      'https://images.unsplash.com/photo-1568605114967-8e628aa3b6a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
];

export { kikuyuData, kiswahiliData };
