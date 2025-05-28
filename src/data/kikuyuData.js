const kikuyuData = [
  // Existing entries (1-10)
  {
    id: 'kikuyu-1',
    word: 'Mũthenya',
    language: 'Kikuyu',
    partOfSpeech: 'noun',
    translations: [
      { language: 'English', word: 'Day', notes: 'A period of 24 hours.' },
    ],
    exampleSentences: [{ sentence: 'Mũthenya mwega', translation: 'Good day' }],
    pronunciation: 'moo-then-ya',
    audio: null,
    tags: ['time', 'greeting'],
    notes: 'Commonly used in greetings.',
    image: 'https://images.unsplash.com/photo-1604480093534-f9985e438914',
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
      { sentence: 'Nyũmba ĩno nĩ nene', translation: 'This house is big' },
    ],
    pronunciation: 'nyoom-ba',
    audio: null,
    tags: ['place', 'building'],
    notes: 'Refers to a physical structure.',
    image: 'https://images.unsplash.com/photo-1568605114967-8e628aa3b6a0',
  },
  {
    id: 'kikuyu-3',
    word: 'Kũrĩa',
    language: 'Kikuyu',
    partOfSpeech: 'verb',
    translations: [
      { language: 'English', word: 'To eat', notes: 'To consume food.' },
    ],
    exampleSentences: [
      { sentence: 'Nĩngũkũrĩa irio', translation: 'I will eat food' },
    ],
    pronunciation: 'koo-ree-a',
    audio: null,
    tags: ['action', 'food'],
    notes: 'Basic verb for eating.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
  },
  {
    id: 'kikuyu-4',
    word: 'Mũtĩ',
    language: 'Kikuyu',
    partOfSpeech: 'noun',
    translations: [
      { language: 'English', word: 'Tree', notes: 'A woody perennial plant.' },
    ],
    exampleSentences: [
      { sentence: 'Mũtĩ ũyũ nĩ mũraihu', translation: 'This tree is tall' },
    ],
    pronunciation: 'moo-tee',
    audio: null,
    tags: ['nature', 'plant'],
    notes: 'General term for tree.',
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86',
  },
  {
    id: 'kikuyu-5',
    word: 'Mũndũ',
    language: 'Kikuyu',
    partOfSpeech: 'noun',
    translations: [
      { language: 'English', word: 'Person', notes: 'A human being.' },
    ],
    exampleSentences: [
      {
        sentence: 'Mũndũ ũyũ nĩ mũrathimu',
        translation: 'This person is kind',
      },
    ],
    pronunciation: 'moon-doo',
    audio: null,
    tags: ['people'],
    notes: 'Refers to a human being.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
  },
  {
    id: 'kikuyu-6',
    word: 'Kũnyua',
    language: 'Kikuyu',
    partOfSpeech: 'verb',
    translations: [
      { language: 'English', word: 'To drink', notes: 'To consume liquid.' },
    ],
    exampleSentences: [
      { sentence: 'Nĩngũkũnyua maaĩ', translation: 'I will drink water' },
    ],
    pronunciation: 'koo-nyoo-a',
    audio: null,
    tags: ['action', 'food'],
    notes: 'Basic verb for drinking.',
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504',
  },
  {
    id: 'kikuyu-7',
    word: 'Maaĩ',
    language: 'Kikuyu',
    partOfSpeech: 'noun',
    translations: [
      {
        language: 'English',
        word: 'Water',
        notes: 'A clear, colorless liquid.',
      },
    ],
    exampleSentences: [
      { sentence: 'Maaĩ maya nĩ matheru', translation: 'This water is clean' },
    ],
    pronunciation: 'ma-ai',
    audio: null,
    tags: ['nature', 'liquid'],
    notes: 'Essential for life.',
    image: 'https://images.unsplash.com/photo-1502675135487-e971002a6adb',
  },
  {
    id: 'kikuyu-8',
    word: 'Mwaki',
    language: 'Kikuyu',
    partOfSpeech: 'noun',
    translations: [
      {
        language: 'English',
        word: 'Fire',
        notes: 'Combustion producing heat and light.',
      },
    ],
    exampleSentences: [
      { sentence: 'Mwaki ũyũ nĩ mũhiũ', translation: 'This fire is hot' },
    ],
    pronunciation: 'mwa-ki',
    audio: null,
    tags: ['nature', 'element'],
    notes: 'Used for cooking and warmth.',
    image: 'https://images.unsplash.com/photo-1575435349939-0ffbdad70905',
  },
  {
    id: 'kikuyu-9',
    word: 'Kũrora',
    language: 'Kikuyu',
    partOfSpeech: 'verb',
    translations: [
      {
        language: 'English',
        word: 'To see',
        notes: 'To perceive with the eyes.',
      },
    ],
    exampleSentences: [
      { sentence: 'Nĩndĩrarora nyoni', translation: 'I am seeing a bird' },
    ],
    pronunciation: 'koo-ro-ra',
    audio: null,
    tags: ['action', 'perception'],
    notes: 'Related to visual perception.',
    image: null,
  },
  {
    id: 'kikuyu-10',
    word: 'Gũthiĩ',
    language: 'Kikuyu',
    partOfSpeech: 'verb',
    translations: [
      {
        language: 'English',
        word: 'To go',
        notes: 'To move from one place to another.',
      },
    ],
    exampleSentences: [
      {
        sentence: 'Nĩngũthiĩ gũcaria irio',
        translation: 'I will go to look for food',
      },
    ],
    pronunciation: 'goo-thee',
    audio: null,
    tags: ['action', 'movement'],
    notes: 'Basic verb for movement.',
    image: null,
  },

  // New entries (11-60)
  {
    id: "kikuyu-11",
    word: "Ĩgũrũ",
    language: "Kikuyu",
    partOfSpeech: "noun",
    translations: [
      { language: "English", word: "Sky", notes: "The atmosphere above the earth." }
    ],
    exampleSentences: [
      { sentence: "Ĩgũrũ rĩrĩ theru", translation: "The sky is clear" }
    ],
    pronunciation: "ee-goo-roo",
    audio: null,
    tags: ["nature", "space"],
    notes: "Refers to the sky.",
    image: "https://images.unsplash.com/photo-1503899036441-f008a92aeb94"
  },
  {
    id: "kikuyu-12",
    word: "Thĩ",
    language: "Kikuyu",
    partOfSpeech: "noun",
    translations: [
      { language: "English", word: "Earth", notes: "The planet we live on." }
    ],
    exampleSentences: [
      { sentence: "Thĩ nĩ nene", translation: "The earth is big" }
    ],
    pronunciation: "thee",
    audio: null,
    tags: ["nature", "planet"],
    notes: "Refers to the planet Earth.",
    image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d"
  },
  {
    id: "kikuyu-13",
    word: "Gũkũa",
    language: "Kikuyu",
    partOfSpeech: "verb",
    translations: [
      { language: "English", word: "To carry", notes: "To support and move (someone or something)." }
    ],
    exampleSentences: [
      { sentence: "Nĩngũkũa mũrigo", translation: "I will carry the load" }
    ],
    pronunciation: "goo-koo-a",
    audio: null,
    tags: ["action", "transport"],
    notes: "Basic verb for carrying.",
    image: null
  },
  {
    id: "kikuyu-14",
    word: "Mũrango",
    language: "Kikuyu",
    partOfSpeech: "noun",
    translations: [
      { language: "English", word: "Door", notes: "A hinged barrier used to close an opening." }
    ],
    exampleSentences: [
      { sentence: "Mũrango ũyũ nĩ mũgũrũ", translation: "This door is old" }
    ],
    pronunciation: "moo-ra-ngo",
    audio: null,
    tags: ["place", "building"],
    notes: "Refers to a door.",
    image: "https://images.unsplash.com/photo-1619741495542-8a954fca9493"
  },
  {
    id: "kikuyu-15",
    word: "Njĩra",
    language: "Kikuyu",
    partOfSpeech: "noun",
    translations: [
      { language: "English", word: "Road", notes: "A way or route between two places." }
    ],
    exampleSentences: [
      { sentence: "Njĩra ĩno nĩ ndaya", translation: "This road is wide" }
    ],
    pronunciation: "nji-ra",
    audio: null,
    tags: ["place", "transport"],
    notes: "Refers to a road.",
    image: "https://images.unsplash.com/photo-1547754980-c190957b559d"
  },
  {
    id: "kikuyu-16",
    word: "Gũthoma",
    language: "Kikuyu",
    partOfSpeech: "verb",
    translations: [
      { language: "English", word: "To read", notes: "To look at and understand written material." }
    ],
    exampleSentences: [
      { sentence: "Nĩngũthoma ibuku", translation: "I will read a book" }
    ],
    pronunciation: "goo-tho-ma",
    audio: null,
    tags: ["action", "education"],
    notes: "Basic verb for reading.",
    image: null
  },
  {
    id: "kikuyu-17",
    word: "Ibuku",
    language: "Kikuyu",
    partOfSpeech: "noun",
    translations: [
      { language: "English", word: "Book", notes: "A written or printed work consisting of pages glued or sewn together along one side and bound in covers." }
    ],
    exampleSentences: [
      { sentence: "Ibuku rĩrĩ nĩ rĩega", translation: "This book is good" }
    ],
    pronunciation: "ee-boo-koo",
    audio: null,
    tags: ["education", "literature"],
    notes: "Refers to a book.",
    image: "https://images.unsplash.com/photo-1516979188813-a9afc6caea48"
  },
  {
    id: "kikuyu-18",
    word: "Gũtũma",
    language: "Kikuyu",
    partOfSpeech: "verb",
    translations: [
      { language: "English", word: "To send", notes: "To cause to go or be taken to a destination." }
    ],
    exampleSentences: [
      { sentence: "Nĩngũtũma ndũmĩrĩri", translation: "I will send a message" }
    ],
    pronunciation: "goo-too-ma",
    audio: null,
    tags: ["action", "communication"],
    notes: "Basic verb for sending.",
    image: null
  },
  {
    id: "kikuyu-19",
    word: "Ndũmĩrĩri",
    language: "Kikuyu",
    partOfSpeech: "noun",
    translations: [
      { language: "English", word: "Message", notes: "A spoken or written piece of information conveyed from one person to another." }
    ],
    exampleSentences: [
      { sentence: "Ndũmĩrĩri ĩno nĩ ya bata", translation: "This message is important" }
    ],
    pronunciation: "ndoo-mee-ree-ree",
    audio: null,
    tags: ["communication", "information"],
    notes: "Refers to a message.",
    image: "https://images.unsplash.com/photo-1589742734176-e0f970f3b1b2"
  },
  {
    id: "kikuyu-20",
    word: "Ũgĩ",
    language: "Kikuyu",
    partOfSpeech: "noun",
    translations: [
      { language: "English", word: "Wisdom", notes: "The quality of having experience, knowledge, and good judgement." }
    ],
    exampleSentences: [
      { sentence: "Ũgĩ nĩ wa bata", translation: "Wisdom is important" }
    ],
    pronunciation: "oo-gee",
    audio: null,
    tags: ["quality", "knowledge"],
    notes: "Refers to wisdom.",
    image: "https://images.unsplash.com/photo-1507838153414-b4b79886a04c"
  },
  {
    id: "kikuyu-21",
    word: "Gũteithia",
    language: "Kikuyu",
    partOfSpeech: "verb",
    translations: [
      { language: "English", word: "To help", notes: "To give assistance or support to someone." }
    ],
    exampleSentences: [
      { sentence: "Nĩngũteithia mũndũ ũcio", translation: "I will help that person" }
    ],
    pronunciation: "goo-tei-thee-a",
    audio: null,
    tags: ["action", "support"],
    notes: "Basic verb for helping.",
    image: null
  },
  {
    id: "kikuyu-22",
    word: "Ũrata",
    language: "Kikuyu",
    partOfSpeech: "noun",
    translations: [
      { language: "English", word: "Friendship", notes: "The emotions or conduct of friends; the state of being friends." }
    ],
    exampleSentences: [
      { sentence: "Ũrata nĩ wa bata", translation: "Friendship is important" }
    ],
    pronunciation: "oo-ra-ta",
    audio: null,
    tags: ["relationship", "emotion"],
    notes: "Refers to friendship.",
    image: "https://images.unsplash.com/photo-1503435980610-aeb8e83344b9"
  },
  {
    id: "kikuyu-23",
    word: "Gũkenda",
    language: "Kikuyu",
    partOfSpeech: "verb",
    translations: [
      { language: "English", word: "To love", notes: "To have a strong feeling of affection for someone." }
    ],
    exampleSentences: [
      { sentence: "Nĩngũkenda mũno", translation: "I love you very much" }
    ],
    pronunciation: "goo-ken-da",
    audio: null,
    tags: ["emotion", "relationship"],
    notes: "Basic verb for loving.",
    image: null
  },
  {
    id: "kikuyu-24",
    word: "Ngoro",
    language: "Kikuyu",
    partOfSpeech: "noun",
    translations: [
      { language: "English", word: "Heart", notes: "A hollow muscular organ that pumps the blood through the circulatory system." }
    ],
    exampleSentences: [
      { sentence: "Ngoro yakwa nĩ ĩgĩcanjama", translation: "My heart is happy" }
    ],
    pronunciation: "ngo-ro",
    audio: null,
    tags: ["body", "emotion"],
    notes: "Refers to the heart.",
    image: "https://images.unsplash.com/photo-1541887049-dca0999450e4"
  },
  {
    id: "kikuyu-25",
    word: "Ũhoro",
    language: "Kikuyu",
    partOfSpeech: "noun",
    translations: [
      { language: "English", word: "News", notes: "Newly received or noteworthy information, especially about recent events." }
    ],
    exampleSentences: [
      { sentence: "Ũhoro ũcio nĩ mũũru", translation: "That news is bad" }
    ],
    pronunciation: "oo-ho-ro",
    audio: null,
    tags: ["information", "communication"],
    notes: "Refers to news.",
    image: "https://images.unsplash.com/photo-1495020689067-9588c892ca24"
  },
  {
    id: "kikuyu-26",
    word: "Gũcaria",
    language: "Kikuyu",
    partOfSpeech: "verb",
    translations: [
      { language: "English", word: "To search", notes: "To try to find something by looking or otherwise seeking carefully." }
    ],
    exampleSentences: [
      { sentence: "Nĩngũcaria mũthako", translation: "I will search for a toy" }
    ],
    pronunciation: "goo-ca-ree-a",
    audio: null,
    tags: ["action", "discovery"],
    notes: "Basic verb for searching.",
    image: null
  },
  {
    id: "kikuyu-27",
    word: "Mũthako",
    language: "Kikuyu",
    partOfSpeech: "noun",
    translations: [
      { language: "English", word: "Toy", notes: "An object for a child to play with." }
    ],
    exampleSentences: [
      { sentence: "Mũthako ũyũ nĩ mũnini", translation: "This toy is small" }
    ],
    pronunciation: "moo-tha-ko",
    audio: null,
    tags: ["object", "play"],
    notes: "Refers to a toy.",
    image: "https://images.unsplash.com/photo-1585336244342-97b941839c39"
  },
  {
    id: "kikuyu-28",
    word: "Gũtũũra",
    language: "Kikuyu",
    partOfSpeech: "verb",
    translations: [
      { language: "English", word: "To live", notes: "To reside or have one's life in a particular place or manner." }
    ],
    exampleSentences: [
      { sentence: "Nĩngũtũũra Nairobi", translation: "I will live in Nairobi" }
    ],
    pronunciation: "goo-too-oo-ra",
    audio: null,
    tags: ["action", "location"],
    notes: "Basic verb for living.",
    image: null
  },
  {
    id: "kikuyu-29",
    word: "Ũrugarĩ",
    language: "Kikuyu",
    partOfSpeech: "noun",
    translations: [
      { language: "English", word: "Heat", notes: "The quality of being hot; high temperature." }
    ],
    exampleSentences: [
      { sentence: "Ũrugarĩ ũyũ nĩ mũnene", translation: "This heat is intense" }
    ],
    pronunciation: "oo-roo-ga-ree",
    audio: null,
    tags: ["nature", "temperature"],
    notes: "Refers to heat.",
    image: "https://images.unsplash.com/photo-1517423440433-44e04ca5894a"
  },
  {
    id: "kikuyu-30",
    word: "Gũtheca",
    language: "Kikuyu",
    partOfSpeech: "verb",
    translations: [
      { language: "English", word: "To cook", notes: "To prepare food by heating it." }
    ],
    exampleSentences: [
      { sentence: "Nĩngũtheca irio", translation: "I will cook food" }
    ],
    pronunciation: "goo-the-ca",
    audio: null,
    tags: ["action", "food"],
    notes: "Basic verb for cooking.",
    image: null
  },
  {
    id: "kikuyu-31",
    word: "Irio",
    language: "Kikuyu",
    partOfSpeech: "noun",
    translations: [
      { language: "English", word: "Food", notes: "Any nutritious substance that people or animals eat or drink in order to maintain life and growth." }
    ],
    exampleSentences: [
      { sentence: "Irio icio nĩ njega", translation: "That food is good" }
    ],
    pronunciation: "ee-ree-o",
    audio: null,
    tags: ["food", "sustenance"],
    notes: "Refers to food.",
    image: "https://images.unsplash.com/photo-1482049016688-2d36e1b9ca55"
  },
  {
    id: "kikuyu-32",
    word: "Gũtemba",
    language: "Kikuyu",
    partOfSpeech: "verb",
    translations: [
      { language: "English", word: "To run", notes: "To move at a speed faster than a walk." }
    ],
    exampleSentences: [
      { sentence: "Nĩngũtemba kũndũ kũraya", translation: "I will run far away" }
    ],
    pronunciation: "goo-tem-ba",
    audio: null,
    tags: ["action", "movement"],
    notes: "Basic verb for running.",
    image: null
  },
  {
    id: "kikuyu-33",
    word: "Mbembe",
    language: "Kikuyu",
    partOfSpeech: "noun",
    translations: [
      { language: "English", word: "Corn", notes: "A tall annual cereal grass bearing kernels on large ears." }
    ],
    exampleSentences: [
      { sentence: "Mbembe ĩno nĩ nyumu", translation: "This corn is hard" }
    ],
    pronunciation: "mbem-be",
    audio: null,
    tags: ["food", "plant"],
    notes: "Refers to corn.",
    image: "https://images.unsplash.com/photo-1568496038674-f2937c054524"
  },
  {
    id: "kikuyu-34",
    word: "Gũceera",
    language: "Kikuyu",
    partOfSpeech: "verb",
    translations: [
      { language: "English", word: "To visit", notes: "To go to see and spend time with (someone) socially." }
    ],
    exampleSentences: [
      { sentence: "Nĩngũceera thukuru", translation: "I will visit the school" }
    ],
    pronunciation: "goo-cee-ra",
    audio: null,
    tags: ["action", "social"],
    notes: "Basic verb for visiting.",
    image: null
  },
  {
    id: "kikuyu-35",
    word: "Thukuru",
    language: "Kikuyu",
    partOfSpeech: "noun",
    translations: [
      { language: "English", word: "School", notes: "An institution for educating children." }
    ],
    exampleSentences: [
      { sentence: "Thukuru ĩno nĩ nene", translation: "This school is big" }
    ],
    pronunciation: "thoo-koo-roo",
    audio: null,
    tags: ["education", "place"],
    notes: "Refers to a school.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
  },
  {
    id: "kikuyu-36",
    word: "Gũthĩkĩrĩria",
    language: "Kikuyu",
    partOfSpeech: "verb",
    translations: [
      { language: "English", word: "To listen", notes: "To give one's attention to a sound." }
    ],
    exampleSentences: [
      { sentence: "Nĩngũthĩkĩrĩria nyĩmbo", translation: "I will listen to music" }
    ],
    pronunciation: "goo-thee-kee-ree-ree-a",
    audio: null,
    tags: ["action", "sound"],
    notes: "Basic verb for listening.",
    image: null
  },
  {
    id: "kikuyu-37",
    word: "Nyĩmbo",
    language: "Kikuyu",
    partOfSpeech: "noun",
    translations: [
      { language: "English", word: "Song", notes: "A musical composition with words for singing." }
    ],
    exampleSentences: [
      { sentence: "Nyĩmbo ĩno nĩ njega", translation: "This song is good" }
    ],
    pronunciation: "nyeem-bo",
    audio: null,
    tags: ["music", "art"],
    notes: "Refers to a song.",
    image: "https://images.unsplash.com/photo-1494859803428-4944d58a6823"
  },
  {
    id: "kikuyu-38",
    word: "Gũũria",
    language: "Kikuyu",
    partOfSpeech: "verb",
    translations: [
      { language: "English", word: "To ask", notes: "To put a question to (someone)." }
    ],
    exampleSentences: [
      { sentence: "Nĩngũũria kĩũria", translation: "I will ask a question" }
    ],
    pronunciation: "goo-oo-ree-a",
    audio: null,
    tags: ["action", "communication"],
    notes: "Basic verb for asking.",
    image: null
  },
  {
    id: "kikuyu-39",
    word: "Kĩũria",
    language: "Kikuyu",
    partOfSpeech: "noun",
    translations: [
      { language: "English", word: "Question", notes: "A sentence worded or expressed so as to elicit information." }
    ],
    exampleSentences: [
      { sentence: "Kĩũria gĩkĩ nĩ kĩrũru", translation: "This question is difficult" }
    ],
    pronunciation: "kee-oo-ree-a",
    audio: null,
    tags: ["communication", "information"],
    notes: "Refers to a question.",
    image: "https://images.unsplash.com/photo-1555625423-b92718786999"
  },
  {
    id: "kikuyu-40",
    word: "Gũcookeria",
    language: "Kikuyu",
    partOfSpeech: "verb",
    translations: [
      { language: "English", word: "To answer", notes: "To say something in response to a question." }
    ],
    exampleSentences: [
      { sentence: "Nĩngũcookeria kĩũria", translation: "I will answer the question" }
    ],
    pronunciation: "goo-coo-ke-ree-a",
    audio: null,
    tags: ["action", "communication"],
    notes: "Basic verb for answering.",
    image: null
  },
  {
    id: "kikuyu-41",
    word: "Ũrugũ",
    language: "Kikuyu",
    partOfSpeech: "noun",
    translations: [
      { language: "English", word: "Banana", notes: "A long curved fruit which grows in clusters and has soft pulpy flesh and a smooth yellow skin when ripe." }
    ],
    exampleSentences: [
      { sentence: "Ũrugũ ũyũ nĩ mũthami", translation: "This banana is sweet" }
    ],
    pronunciation: "oo-roo-goo",
    audio: null,
    tags: ["food", "fruit"],
    notes: "Refers to a banana.",
    image: "https://images.unsplash.com/photo-1587133355429-5d9983a90515"
  },
  {
    id: "kikuyu-42",
    word: "Gũtara",
    language: "Kikuyu",
    partOfSpeech: "verb",
    translations: [
      { language: "English", word: "To count", notes: "Determine the total number of (a collection of items)." }
    ],
    exampleSentences: [
      { sentence: "Nĩngũtara mbeca", translation: "I will count money" }
    ],
    pronunciation: "goo-ta-ra",
    audio: null,
    tags: ["action", "math"],
    notes: "Basic verb for counting.",
    image: null
  },
  {
    id: "kikuyu-43",
    word: "Mbeca",
    language: "Kikuyu",
    partOfSpeech: "noun",
    translations: [
      { language: "English", word: "Money", notes: "A current medium of exchange in the form of coins and banknotes." }
    ],
    exampleSentences: [
      { sentence: "Mbeca ĩno nĩ nyingi", translation: "This money is a lot" }
    ],
    pronunciation: "mbɛ-ca",
    audio: null,
    tags: ["finance", "economy"],
    notes: "Refers to money.",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e"
  },
  {
    id: "kikuyu-44",
    word: "Gũthaka",
    language: "Kikuyu",
    partOfSpeech: "verb",
    translations: [
      { language: "English", word: "To play", notes: "Engage in activity for enjoyment and recreation rather than a serious or practical purpose." }
    ],
    exampleSentences: [
      { sentence: "Nĩngũthaka na ciana", translation: "I will play with children" }
    ],
    pronunciation: "goo-tha-ka",
    audio: null,
    tags: ["action", "recreation"],
    notes: "Basic verb for playing.",
    image: null
  },
  {
    id: "kikuyu-45",
    word: "Ciana",
    language: "Kikuyu",
    partOfSpeech: "noun",
    translations: [
      { language: "English", word: "Children", notes: "A young human being below the age of puberty or full physical development." }
    ],
    exampleSentences: [
      { sentence: "Ciana icio nĩ njega", translation: "Those children are good" }
    ],
    pronunciation: "ci-a-na",
    audio: null,
    tags: ["people", "family"],
    notes: "Refers to children.",
    image: "https://images.unsplash.com/photo-1541963463532-d68292c34e14"
  },
  {
    id: "kikuyu-46",
    word: "Gũtũũria",
    language: "Kikuyu",
    partOfSpeech: "verb",
    translations: [
      { language: "English", word: "To wake up", notes: "Cease to sleep; get out of bed." }
    ],
    exampleSentences: [
      { sentence: "Nĩngũtũũria rũciinĩ", translation: "I will wake up early" }
    ],
    pronunciation: "goo-too-oo-ree-a",
    audio: null,
    tags: ["action", "daily life"],
    notes: "Basic verb for waking up.",
    image: null
  },
  {
    id: "kikuyu-47",
    word: "Rũciinĩ",
    language: "Kikuyu",
    partOfSpeech: "noun",
    translations: [
      { language: "English", word: "Morning", notes: "The period of time between sunrise and noon." }
    ],
    exampleSentences: [
      { sentence: "Rũciinĩ nĩ kũrĩ theru", translation: "The morning is bright" }
    ],
    pronunciation: "roo-ci-i-ni",
    audio: null,
    tags: ["time", "daily life"],
    notes: "Refers to the morning.",
    image: "https://images.unsplash.com/photo-1508760014957-ca0c6eadb396"
  },
  {
    id: "kikuyu-48",
    word: "Gũthĩna",
    language: "Kikuyu",
    partOfSpeech: "verb",
    translations: [
      { language: "English", word: "To sew", notes: "Join, fasten, or repair (something) by making stitches with a needle and thread or a sewing machine." }
    ],
    exampleSentences: [
      { sentence: "Nĩngũthĩna nguo", translation: "I will sew clothes" }
    ],
    pronunciation: "goo-thee-na",
    audio: null,
    tags: ["action", "craft"],
    notes: "Basic verb for sewing.",
    image: null
  },
  {
    id: "kikuyu-49",
    word: "Nguo",
    language: "Kikuyu",
    partOfSpeech: "noun",
    translations: [
      { language: "English", word: "Clothes", notes: "Items worn to cover the body." }
    ],
    exampleSentences: [
      { sentence: "Nguo ĩno nĩ njerũ", translation: "This cloth is new" }
    ],
    pronunciation: "ngoo",
    audio: null,
    tags: ["object", "fashion"],
    notes: "Refers to clothes.",
    image: "https://images.unsplash.com/photo-1592861956114-ca8480f98776"
  },
  {
    id: "kikuyu-50",
    word: "Gũtũũra",
    language: "Kikuyu",
    partOfSpeech: "verb",
    translations: [
      { language: "English", word: "To stay", notes: "Remain in the same place." }
    ],
    exampleSentences: [
      { sentence: "Nĩngũtũũra nyũmba", translation: "I will stay at home" }
    ],
    pronunciation: "goo-too-oo-ra",
    audio: null,
    tags: ["action", "location"],
    notes: "Basic verb for staying.",
    image: null
  },
  {
    id: "kikuyu-51",
    word: "Ũtukũ",
    language: "Kikuyu",
    partOfSpeech: "noun",
    translations: [
      { language: "English", word: "Night", notes: "The period from sunset to sunrise in each twenty-four hours." }
    ],
    exampleSentences: [
      { sentence: "Ũtukũ nĩ mũirũ", translation: "The night is dark" }
    ],
    pronunciation: "oo-too-koo",
    audio: null,
    tags: ["time", "daily life"],
    notes: "Refers to the night.",
    image: "https://images.unsplash.com/photo-1503435980610-aeb8e83344b9"
  },
  {
  id: 'kikuyu-51',
  word: 'Mũgũnda',
  language: 'Kikuyu',
  partOfSpeech: 'noun',
  translations: [
    { language: 'English', word: 'Farm', notes: 'A piece of land used for growing crops or raising animals.' }
  ],
  exampleSentences: [
    { sentence: 'Mũgũnda waku nĩ mũnene', translation: 'Your farm is big' }
  ],
  pronunciation: 'moo-goon-da',
  audio: null,
  tags: ['place', 'agriculture'],
  notes: 'Refers to a farm.',
  image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb'
},
{
  id: 'kikuyu-52',
  word: 'Gũcokia',
  language: 'Kikuyu',
  partOfSpeech: 'verb',
  translations: [
    { language: 'English', word: 'To return', notes: 'To come or go back to a place or person.' }
  ],
  exampleSentences: [
    { sentence: 'Nĩngũcokia nyũmba', translation: 'I will return home' }
  ],
  pronunciation: 'goo-co-kee-a',
  audio: null,
  tags: ['action', 'movement'],
  notes: 'Basic verb for returning.',
  image: null
},
{
  id: 'kikuyu-53',
  word: 'Mũhũũ',
  language: 'Kikuyu',
  partOfSpeech: 'noun',
  translations: [
    { language: 'English', word: 'Rain', notes: 'Water falling in drops from clouds.' }
  ],
  exampleSentences: [
    { sentence: 'Mũhũũ waku nĩ mweri', translation: 'Your rain is heavy' }
  ],
  pronunciation: 'moo-hoo',
  audio: null,
  tags: ['nature', 'weather'],
  notes: 'Refers to rain.',
  image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0'
},
{
  id: 'kikuyu-54',
  word: 'Gũthetha',
  language: 'Kikuyu',
  partOfSpeech: 'verb',
  translations: [
    { language: 'English', word: 'To speak', notes: 'To say something to convey information or feelings.' }
  ],
  exampleSentences: [
    { sentence: 'Nĩngũthetha ũhoro', translation: 'I will speak about the news' }
  ],
  pronunciation: 'goo-the-tha',
  audio: null,
  tags: ['action', 'communication'],
  notes: 'To communicate verbally.',
  image: null
},
{
  id: 'kikuyu-55',
  word: 'Ũhoro',
  language: 'Kikuyu',
  partOfSpeech: 'noun',
  translations: [
    { language: 'English', word: 'News', notes: 'Newly received or noteworthy information.' }
  ],
  exampleSentences: [
    { sentence: 'Ũhoro ũcio nĩ mũũru', translation: 'That news is bad' }
  ],
  pronunciation: 'oo-ho-ro',
  audio: null,
  tags: ['communication', 'information'],
  notes: 'Information about recent events.',
  image: 'https://images.unsplash.com/photo-1495020689067-9588c892ca24'
},
{
  id: 'kikuyu-56',
  word: 'Gũtũma',
  language: 'Kikuyu',
  partOfSpeech: 'verb',
  translations: [
    { language: 'English', word: 'To send', notes: 'Cause to go or be taken to a destination.' }
  ],
  exampleSentences: [
    { sentence: 'Nĩngũtũma ndũmĩrĩri', translation: 'I will send a message' }
  ],
  pronunciation: 'goo-too-ma',
  audio: null,
  tags: ['action', 'communication'],
  notes: 'To dispatch to a destination.',
  image: null
},
{
  id: 'kikuyu-57',
  word: 'Ndũmĩrĩri',
  language: 'Kikuyu',
  partOfSpeech: 'noun',
  translations: [
    { language: 'English', word: 'Message', notes: 'A spoken or written piece of information.' }
  ],
  exampleSentences: [
    { sentence: 'Ndũmĩrĩri ĩno nĩ ya bata', translation: 'This message is important' }
  ],
  pronunciation: 'ndoo-mee-ree-ree',
  audio: null,
  tags: ['communication', 'information'],
  notes: 'A piece of conveyed information.',
  image: 'https://images.unsplash.com/photo-1589742734176-e0f970f3b1b2'
},
{
  id: 'kikuyu-58',
  word: 'Gũthĩĩna',
  language: 'Kikuyu',
  partOfSpeech: 'verb',
  translations: [
    { language: 'English', word: 'To be tired', notes: 'In a state of reduced energy.' }
  ],
  exampleSentences: [
    { sentence: 'Nĩndathĩĩna mũno', translation: 'I am very tired' }
  ],
  pronunciation: 'goo-thee-ee-na',
  audio: null,
  tags: ['feeling', 'state'],
  notes: 'Feeling weary or fatigued.',
  image: null
},
{
  id: 'kikuyu-59',
  word: 'Njamba',
  language: 'Kikuyu',
  partOfSpeech: 'noun',
  translations: [
    { language: 'English', word: 'Hero', notes: 'A person admired for courage or noble qualities.' }
  ],
  exampleSentences: [
    { sentence: 'Njamba ĩyo nĩ ya gĩthũngũ', translation: 'That hero is brave' }
  ],
  pronunciation: 'nja-mba',
  audio: null,
  tags: ['people', 'quality'],
  notes: 'A person of distinguished courage.',
  image: 'https://images.unsplash.com/photo-1543590944-248a3960b51a'
},
{
  id: 'kikuyu-60',
  word: 'Gũtũũra',
  language: 'Kikuyu',
  partOfSpeech: 'verb',
  translations: [
    { language: 'English', word: 'To live', notes: 'To have one’s home in a particular place.' }
  ],
  exampleSentences: [
    { sentence: 'Nĩngũtũũra Nairobi', translation: 'I will live in Nairobi' }
  ],
  pronunciation: 'goo-too-oo-ra',
  audio: null,
  tags: ['action', 'location'],
  notes: 'To reside in a place.',
  image: null
},
{
  id: 'kikuyu-61',
  word: 'Ũrugarĩ',
  language: 'Kikuyu',
  partOfSpeech: 'noun',
  translations: [
    { language: 'English', word: 'Heat', notes: 'The quality of being hot; high temperature.' }
  ],
  exampleSentences: [
    { sentence: 'Ũrugarĩ ũyũ nĩ mũnene', translation: 'This heat is intense' }
  ],
  pronunciation: 'oo-roo-ga-ree',
  audio: null,
  tags: ['nature', 'temperature'],
  notes: 'The state of being hot.',
  image: 'https://images.unsplash.com/photo-1517423440433-44e04ca5894a'
},
{
  id: 'kikuyu-62',
  word: 'Gũtheca',
  language: 'Kikuyu',
  partOfSpeech: 'verb',
  translations: [
    { language: 'English', word: 'To cook', notes: 'Prepare food by heating it.' }
  ],
  exampleSentences: [
    { sentence: 'Nĩngũtheca irio', translation: 'I will cook food' }
  ],
  pronunciation: 'goo-the-ca',
  audio: null,
  tags: ['action', 'food'],
  notes: 'To prepare food by heating.',
  image: null
},
{
  id: 'kikuyu-63',
  word: 'Irio',
  language: 'Kikuyu',
  partOfSpeech: 'noun',
  translations: [
    { language: 'English', word: 'Food', notes: 'Any nutritious substance eaten or drunk.' }
  ],
  exampleSentences: [
    { sentence: 'Irio icio nĩ njega', translation: 'That food is good' }
  ],
  pronunciation: 'ee-ree-o',
  audio: null,
  tags: ['food', 'sustenance'],
  notes: 'Substance used as nourishment.',
  image: 'https://images.unsplash.com/photo-1482049016688-2d36e1b9ca55'
},
{
  id: 'kikuyu-64',
  word: 'Gũtemba',
  language: 'Kikuyu',
  partOfSpeech: 'verb',
  translations: [
    { language: 'English', word: 'To run', notes: 'Move at a speed faster than a walk.' }
  ],
  exampleSentences: [
    { sentence: 'Nĩngũtemba kũndũ kũraya', translation: 'I will run far away' }
  ],
  pronunciation: 'goo-tem-ba',
  audio: null,
  tags: ['action', 'movement'],
  notes: 'To move rapidly on foot.',
  image: null
},
{
  id: 'kikuyu-65',
  word: 'Mbembe',
  language: 'Kikuyu',
  partOfSpeech: 'noun',
  translations: [
    { language: 'English', word: 'Corn', notes: 'A tall cereal grass bearing kernels on ears.' }
  ],
  exampleSentences: [
    { sentence: 'Mbembe ĩno nĩ nyumu', translation: 'This corn is hard' }
  ],
  pronunciation: 'mbem-be',
  audio: null,
  tags: ['food', 'plant'],
  notes: 'A cereal plant.',
  image: 'https://images.unsplash.com/photo-1568496038674-f2937c054524'
},
{
  id: 'kikuyu-66',
  word: 'Gũceera',
  language: 'Kikuyu',
  partOfSpeech: 'verb',
  translations: [
    { language: 'English', word: 'To visit', notes: 'Go to see and spend time with someone.' }
  ],
  exampleSentences: [
    { sentence: 'Nĩngũceera thukuru', translation: 'I will visit the school' }
  ],
  pronunciation: 'goo-cee-ra',
  audio: null,
  tags: ['action', 'social'],
  notes: 'To go and spend time with someone.',
  image: null
},
{
  id: 'kikuyu-67',
  word: 'Thukuru',
  language: 'Kikuyu',
  partOfSpeech: 'noun',
  translations: [
    { language: 'English', word: 'School', notes: 'An institution for educating children.' }
  ],
  exampleSentences: [
    { sentence: 'Thukuru ĩno nĩ nene', translation: 'This school is big' }
  ],
  pronunciation: 'thoo-koo-roo',
  audio: null,
  tags: ['education', 'place'],
  notes: 'An educational institution.',
  image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b'
},
{
  id: 'kikuyu-68',
  word: 'Gũthĩkĩrĩria',
  language: 'Kikuyu',
  partOfSpeech: 'verb',
  translations: [
    { language: 'English', word: 'To listen', notes: 'Give attention to a sound.' }
  ],
  exampleSentences: [
    { sentence: 'Nĩngũthĩkĩrĩria nyĩmbo', translation: 'I will listen to music' }
  ],
  pronunciation: 'goo-thee-kee-ree-ree-a',
  audio: null,
  tags: ['action', 'sound'],
  notes: 'To pay attention to sound.',
  image: null
},
{
  id: 'kikuyu-69',
  word: 'Nyĩmbo',
  language: 'Kikuyu',
  partOfSpeech: 'noun',
  translations: [
    { language: 'English', word: 'Song', notes: 'A musical composition with words.' }
  ],
  exampleSentences: [
    { sentence: 'Nyĩmbo ĩno nĩ njega', translation: 'This song is good' }
  ],
  pronunciation: 'nyeem-bo',
  audio: null,
  tags: ['music', 'art'],
  notes: 'A musical composition.',
  image: 'https://images.unsplash.com/photo-1494859803428-4944d58a6823'
},
{
  id: 'kikuyu-70',
  word: 'Gũũria',
  language: 'Kikuyu',
  partOfSpeech: 'verb',
  translations: [
    { language: 'English', word: 'To ask', notes: 'Put a question to someone.' }
  ],
  exampleSentences: [
    { sentence: 'Nĩngũũria kĩũria', translation: 'I will ask a question' }
  ],
  pronunciation: 'goo-oo-ree-a',
  audio: null,
  tags: ['action', 'communication'],
  notes: 'To inquire of someone.',
  image: null
},
  {
  id: 'kikuyu-71',
  word: 'Mũthoni',
  language: 'Kikuyu',
  partOfSpeech: 'noun',
  translations: [
    { language: 'English', word: 'Flower', notes: 'The seed-bearing part of a plant, often colorful and fragrant.' }
  ],
  exampleSentences: [
    { sentence: 'Mũthoni ĩno nĩ mweri', translation: 'This flower is beautiful' }
  ],
  pronunciation: 'moo-tho-nee',
  audio: null,
  tags: ['nature', 'plant'],
  notes: 'A plant’s bloom.',
  image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6'
},
{
  id: 'kikuyu-72',
  word: 'Gũtũma',
  language: 'Kikuyu',
  partOfSpeech: 'verb',
  translations: [
    { language: 'English', word: 'To send', notes: 'Cause to go or be taken to a destination.' }
  ],
  exampleSentences: [
    { sentence: 'Nĩngũtũma ndũmĩrĩri', translation: 'I will send a message' }
  ],
  pronunciation: 'goo-too-ma',
  audio: null,
  tags: ['action', 'communication'],
  notes: 'To dispatch to a destination.',
  image: null
},
{
  id: 'kikuyu-73',
  word: 'Ndũmĩrĩri',
  language: 'Kikuyu',
  partOfSpeech: 'noun',
  translations: [
    { language: 'English', word: 'Message', notes: 'A spoken or written piece of information.' }
  ],
  exampleSentences: [
    { sentence: 'Ndũmĩrĩri ĩno nĩ ya bata', translation: 'This message is important' }
  ],
  pronunciation: 'ndoo-mee-ree-ree',
  audio: null,
  tags: ['communication', 'information'],
  notes: 'A piece of conveyed information.',
  image: 'https://images.unsplash.com/photo-1589742734176-e0f970f3b1b2'
},
{
  id: 'kikuyu-74',
  word: 'Gũthĩna',
  language: 'Kikuyu',
  partOfSpeech: 'verb',
  translations: [
    { language: 'English', word: 'To be tired', notes: 'In a state of reduced energy.' }
  ],
  exampleSentences: [
    { sentence: 'Nĩndathĩĩna mũno', translation: 'I am very tired' }
  ],
  pronunciation: 'goo-thee-na',
  audio: null,
  tags: ['feeling', 'state'],
  notes: 'Feeling weary or fatigued.',
  image: null
},
{
  id: 'kikuyu-75',
  word: 'Njamba',
  language: 'Kikuyu',
  partOfSpeech: 'noun',
  translations: [
    { language: 'English', word: 'Hero', notes: 'A person admired for courage or noble qualities.' }
  ],
  exampleSentences: [
    { sentence: 'Njamba ĩyo nĩ ya gĩthũngũ', translation: 'That hero is brave' }
  ],
  pronunciation: 'nja-mba',
  audio: null,
  tags: ['people', 'quality'],
  notes: 'A person of distinguished courage.',
  image: 'https://images.unsplash.com/photo-1543590944-248a3960b51a'
},
{
  id: 'kikuyu-76',
  word: 'Gũtũũra',
  language: 'Kikuyu',
  partOfSpeech: 'verb',
  translations: [
    { language: 'English', word: 'To live', notes: 'To have one’s home in a particular place.' }
  ],
  exampleSentences: [
    { sentence: 'Nĩngũtũũra Nairobi', translation: 'I will live in Nairobi' }
  ],
  pronunciation: 'goo-too-oo-ra',
  audio: null,
  tags: ['action', 'location'],
  notes: 'To reside in a place.',
  image: null
},
{
  id: 'kikuyu-77',
  word: 'Mũhũũ',
  language: 'Kikuyu',
  partOfSpeech: 'noun',
  translations: [
    { language: 'English', word: 'Rain', notes: 'Water falling in drops from clouds.' }
  ],
  exampleSentences: [
    { sentence: 'Mũhũũ waku nĩ mweri', translation: 'Your rain is heavy' }
  ],
  pronunciation: 'moo-hoo',
  audio: null,
  tags: ['nature', 'weather'],
  notes: 'Refers to rain.',
  image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0'
},
{
  id: 'kikuyu-78',
  word: 'Gũkora',
  language: 'Kikuyu',
  partOfSpeech: 'verb',
  translations: [
    { language: 'English', word: 'To find', notes: 'Discover or perceive by chance or unexpectedly.' }
  ],
  exampleSentences: [
    { sentence: 'Nĩngũkora mũthako', translation: 'I will find a toy' }
  ],
  pronunciation: 'goo-ko-ra',
  audio: null,
  tags: ['action', 'discovery'],
  notes: 'To discover unexpectedly.',
  image: null
},
{
  id: 'kikuyu-79',
  word: 'Mũthako',
  language: 'Kikuyu',
  partOfSpeech: 'noun',
  translations: [
    { language: 'English', word: 'Toy', notes: 'An object for a child to play with.' }
  ],
  exampleSentences: [
    { sentence: 'Mũthako ũyũ nĩ mũnini', translation: 'This toy is small' }
  ],
  pronunciation: 'moo-tha-ko',
  audio: null,
  tags: ['object', 'play'],
  notes: 'An object for play.',
  image: 'https://images.unsplash.com/photo-1585336244342-97b941839c39'
},
{
  id: 'kikuyu-80',
  word: 'Gũtũma',
  language: 'Kikuyu',
  partOfSpeech: 'verb',
  translations: [
    { language: 'English', word: 'To send', notes: 'Cause to go or be taken to a destination.' }
  ],
  exampleSentences: [
    { sentence: 'Nĩngũtũma ndũmĩrĩri', translation: 'I will send a message' }
  ],
  pronunciation: 'goo-too-ma',
  audio: null,
  tags: ['action', 'communication'],
  notes: 'To dispatch to a destination.',
  image: null
},
  
];

export default kikuyuData;
