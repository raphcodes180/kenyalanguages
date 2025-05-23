const grammarData = {
  kikuyu: [
    {
      title: 'Noun Classes',
      summary:
        'Kikuyu uses noun classes to group nouns, which affects how verbs and adjectives agree with nouns.',
      details: `There are several noun classes in Kikuyu, each with its own prefix. For example:
- Class 1 (Person): mũndũ (person)
- Class 2 (People): andũ (people)
- Class 3 (Tree): mũtĩ (tree)
- Class 4 (Trees): mĩtĩ (trees)
Noun class affects agreement in verbs and adjectives.`,
    },
    {
      title: 'Verb Conjugation',
      summary:
        'Verbs in Kikuyu change form based on tense, aspect, and subject.',
      details: `The verb root is modified with prefixes and suffixes. For example:
- Present: ndĩna (I have)
- Past: ndarĩ na (I had)
- Future: ndĩgũa na (I will have)
Subject prefixes change depending on the person (I, you, he/she, etc.).`,
    },
    {
      title: 'Basic Sentence Structure',
      summary: 'Kikuyu sentences generally follow a Subject-Verb-Object order.',
      details: `Example: Mũndũ arĩa gĩkũyũ. (The person eats maize.)
- Mũndũ (subject) arĩa (verb) gĩkũyũ (object).`,
    },
    {
      title: 'Adjectives',
      summary:
        'Adjectives in Kikuyu agree with the noun class of the noun they modify.',
      details: `Adjectives follow the noun they describe and take a prefix that matches the noun class. For example:
- Mũndũ mũega (good person) - Class 1
- Andũ ega (good people) - Class 2
- Mũtĩ mũnene (big tree) - Class 3
- Mĩtĩ mĩnene (big trees) - Class 4`,
    },
    {
      title: 'Possessives',
      summary:
        'Possessives in Kikuyu also agree with the noun class of the possessed noun.',
      details: `Possessive forms change depending on the noun class. For example:
- Mũndũ wakwa (my person) - Class 1
- Andũ akwa (my people) - Class 2
- Mũtĩ wakwa (my tree) - Class 3
- Mĩtĩ yakwa (my trees) - Class 4`,
    },
    {
      title: 'Demonstratives',
      summary: 'Demonstratives (this, that) change according to noun class.',
      details: `For example:
- ũyũ (this, class 1), aya (these, class 2)
- ũno (this, class 3), ino (this, class 4)`,
    },
    {
      title: 'Questions',
      summary: 'Questions are formed using question words and intonation.',
      details: `Common question words:
- Nũũ? (Who?)
- Atĩa? (What?)
- Rĩ? (When?)
- Kũ? (Where?)`,
    },
    {
      title: 'Negation',
      summary: 'Negation is formed by adding specific prefixes or particles.',
      details: `For example:
- Ndĩndĩgũra (I am not buying)
- Ndathie (I did not go)`,
    },
    {
      title: 'Imperative Mood',
      summary: 'Used for commands and requests.',
      details: `The verb stem is used for commands:
- Thie! (Go!)
- Kũgũra! (Buy!)`,
    },
    {
      title: 'Polite Requests',
      summary: 'Add “ndũgũ” to make a request polite.',
      details: `Example:
- Thie ndũgũ (Please go)`,
    },
    {
      title: 'Relative Clauses',
      summary:
        'Relative clauses are introduced by a relative pronoun that agrees with the noun it modifies.',
      details: `Example: Mũndũ ũrĩa ũrenda (The person who wants)
- Relative pronoun agrees with the noun class.`,
    },
    {
      title: 'Object Prefixes',
      summary:
        'Object prefixes are inserted between the subject prefix and the verb stem.',
      details: `Example: Nĩndĩgũkũgũra (I am buying you)
- subject prefix + object prefix + verb stem`,
    },
    {
      title: 'Passive Voice',
      summary:
        'The passive voice is used to emphasize the action rather than the actor.',
      details: `Example: Nyũmba ĩno yakĩrũo (This house was built)
- Verb stem + -ũo`,
    },
    {
      title: 'Causative Verbs',
      summary:
        'Causative verbs indicate that someone or something is causing an action to happen.',
      details: `Example: Nĩndĩmũrutire (I taught him/her)
- Verb stem + -ithia`,
    },
    {
      title: 'Reciprocal Verbs',
      summary:
        'Reciprocal verbs indicate that two or more subjects are performing an action on each other.',
      details: `Example: Nĩmarendanagia (They love each other)
- Verb stem + -an-`,
    },
    {
      title: 'Reflexive Verbs',
      summary:
        'Reflexive verbs indicate that the subject is performing an action on itself.',
      details: `Example: Nĩndĩyendete (I love myself)
- Verb stem + -ĩ-`,
    },
    {
      title: 'Negative Imperative',
      summary:
        'The negative imperative is used to tell someone not to do something.',
      details: `Example: Ndũkaathiĩ! (Don’t go!)
- Ndũka- + verb stem`,
    },
    {
      title: 'Negative Subjunctive',
      summary:
        'The negative subjunctive is used to express wishes or possibilities that are not happening.',
      details: `Example: Ĩngĩndũkaathiĩ (If I didn’t go)
- Conditional marker + negative marker + verb stem`,
    },
    {
      title: 'Numbers: 1-10',
      summary: 'Numbers in Kikuyu have specific forms and are used with nouns.',
      details: `Example: Mũndũ ũmwe (one person), Andũ erĩ (two people)
- Number + noun`,
    },
    {
      title: 'Numbers: 11-20',
      summary:
        'Numbers from 11 to 20 are formed using a combination of "ikũmi" (ten) and the numbers 1-9.',
      details: `Example: Ikũmi na ũmwe (eleven), Ikũmi na ĩtandatũ (sixteen)
- Ikũmi na + number`,
    },
    {
      title: 'Numbers: 20+',
      summary:
        'Numbers above 20 are formed using a combination of "mĩrongo" (tens) and the numbers 1-9.',
      details: `Example: Mĩrongo ĩĩrĩ (twenty), Mĩrongo ĩĩtatũ na ũmwe (thirty-one)
- Mĩrongo + number`,
    },
    {
      title: 'Time Expressions',
      summary:
        'Time expressions are used to indicate when something is happening.',
      details: `Example: Rũciinĩ (in the morning), Ũtukũ (at night)
- Time word`,
    },
    {
      title: 'Days of the Week',
      summary: 'Days of the week have specific names in Kikuyu.',
      details: `Example: Njũri (Monday), Ĩthenya (Tuesday)
- Day name`,
    },
    {
      title: 'Months of the Year',
      summary: 'Months of the year have specific names in Kikuyu.',
      details: `Example: Mweri wa mbere (January), Mweri wa kerĩ (February)
- Mweri wa + number`,
    },
    {
      title: 'Seasons',
      summary: 'Seasons are referred to with specific terms in Kikuyu.',
      details: `Example: Kĩmera (dry season), Mũthenya wa mbura (rainy season)
- Season name`,
    },
    {
      title: 'Colors',
      summary:
        'Colors have specific names in Kikuyu and are used as adjectives.',
      details: `Example: Ndege njerũ (white bird), Ndege ndũmũ (black bird)
- Color name + noun`,
    },
    {
      title: 'Family Relationships',
      summary:
        'Family relationships are expressed with specific terms in Kikuyu.',
      details: `Example: Baba (father), Nyina (mother), Mwana (child)
- Relationship term`,
    },
    {
      title: 'Comparatives',
      summary: 'Comparatives are used to compare two things.',
      details: `Example: Mũndũ mũnene kuruta ũyũ (This person is bigger than that one)
- Adjective + kuruta + comparison`,
    },
    {
      title: 'Superlatives',
      summary: 'Superlatives are used to show the highest degree.',
      details: `Example: Mũndũ mũnene mũno (The biggest person)
- Adjective + mũno`,
    },
    {
      title: 'Prepositions',
      summary:
        'Prepositions indicate the relationship between a noun and another word in the sentence.',
      details: `Example: Thĩinĩ wa nyũmba (inside the house)
- Preposition + noun`,
    },
    {
      title: 'Adverbs',
      summary:
        'Adverbs modify verbs, adjectives, or other adverbs, providing more information about the action or quality.',
      details: `Example: Areenda mũno (He/She wants a lot)
- Adverb + verb/adjective/adverb`,
    },
    {
      title: 'Conjunctions',
      summary: 'Conjunctions connect words, phrases, or clauses.',
      details: `Example: Nĩndĩenda na nĩngũthiĩ (I want and I will go)
- Word/phrase/clause + conjunction + word/phrase/clause`,
    },
  ],
  kiswahili: [
    {
      title: 'Noun Classes',
      summary:
        'Kiswahili also uses noun classes, called "ngeli", which affect agreement in the sentence.',
      details: `Some common noun classes:
- M-WA: mtu (person), watu (people)
- KI-VI: kitabu (book), vitabu (books)
- N: nyumba (house), nyumba (houses)
Noun class affects how verbs, adjectives, and pronouns agree.`,
    },
    {
      title: 'Verb Conjugation',
      summary: 'Verbs are conjugated for tense, subject, and sometimes object.',
      details: `Verb structure: Subject Prefix + Tense Marker + Verb Root + Object Suffix
Example: Ninakula (I am eating)
- Ni- (I) + na- (present) + -kula (eat)`,
    },
    {
      title: 'Basic Sentence Structure',
      summary: 'Kiswahili sentences also follow Subject-Verb-Object order.',
      details: `Example: Mtoto anasoma kitabu. (The child is reading a book.)
- Mtoto (subject) anasoma (verb) kitabu (object).`,
    },
    {
      title: 'Adjectives',
      summary:
        'Adjectives in Kiswahili agree with the noun class of the noun they modify.',
      details: `Adjectives typically follow the noun they modify and must agree in class. For example:
- mtu mzuri (good person) - M-WA class
- watu wazuri (good people) - M-WA class
- kitabu kizuri (good book) - KI-VI class
- vitabu vizuri (good books) - KI-VI class`,
    },
    {
      title: 'Tense Markers',
      summary: 'Kiswahili uses specific markers to indicate different tenses.',
      details: `Common tense markers include:
- na-: present continuous (ninasoma - I am reading)
- li-: past (nilisoma - I read)
- ta-: future (nitasoma - I will read)
- me-: perfect/completed (nimesoma - I have read)
- ki-: conditional (nikisoma - if I read)`,
    },
    {
      title: 'Questions',
      summary: 'Questions are formed using question words and intonation.',
      details: `Common question words:
- Nani? (Who?)
- Nini? (What?)
- Lini? (When?)
- Wapi? (Where?)`,
    },
    {
      title: 'Negation',
      summary: 'Negation is formed by adding specific prefixes or particles.',
      details: `For example:
- Sisomi (I am not reading)
- Sikuenda (I did not go)`,
    },
    {
      title: 'Imperative Mood',
      summary: 'Used for commands and requests.',
      details: `The verb stem is used for commands:
- Soma! (Read!)
- Kula! (Eat!)`,
    },
    {
      title: 'Polite Requests',
      summary: 'Add “tafadhali” to make a request polite.',
      details: `Example:
- Tafadhali, nisaidie (Please help me)`,
    },
    {
      title: 'Relative Clauses',
      summary:
        'Relative clauses are introduced by a relative pronoun that agrees with the noun it modifies.',
      details: `Example: Mtu ambaye anasoma (The person who is reading)
- Relative pronoun agrees with the noun class.`,
    },
    {
      title: 'Object Prefixes',
      summary:
        'Object prefixes are inserted between the subject prefix and the verb stem.',
      details: `Example: Ninakupenda (I love you)
- subject prefix + object prefix + verb stem`,
    },
    {
      title: 'Passive Voice',
      summary:
        'The passive voice is used to emphasize the action rather than the actor.',
      details: `Example: Nyumba imejengwa (The house has been built)
- Verb stem + -wa`,
    },
    {
      title: 'Causative Verbs',
      summary:
        'Causative verbs indicate that someone or something is causing an action to happen.',
      details: `Example: Ninasababisha (I cause)
- Verb stem + -sha/-za`,
    },
    {
      title: 'Reciprocal Verbs',
      summary:
        'Reciprocal verbs indicate that two or more subjects are performing an action on each other.',
      details: `Example: Wanapendana (They love each other)
- Verb stem + -ana`,
    },
    {
      title: 'Reflexive Verbs',
      summary:
        'Reflexive verbs indicate that the subject is performing an action on itself.',
      details: `Example: Najipenda (I love myself)
- Verb stem + ji-`,
    },
    {
      title: 'Negative Imperative',
      summary:
        'The negative imperative is used to tell someone not to do something.',
      details: `Example: Usisome! (Don’t read!)
- Us(i)- + verb stem`,
    },
    {
      title: 'Negative Subjunctive',
      summary:
        'The negative subjunctive is used to express wishes or possibilities that are not happening.',
      details: `Example: Nisingesoma (If I didn’t read)
- Conditional marker + negative marker + verb stem`,
    },
    {
      title: 'Numbers: 1-10',
      summary:
        'Numbers in Kiswahili have specific forms and are used with nouns.',
      details: `Example: mtu mmoja (one person), watu wawili (two people)
- Number + noun`,
    },
    {
      title: 'Numbers: 11-20',
      summary:
        'Numbers from 11 to 20 are formed using a combination of "kumi" (ten) and the numbers 1-9.',
      details: `Example: kumi na moja (eleven), kumi na sita (sixteen)
- kumi na + number`,
    },
    {
      title: 'Numbers: 20+',
      summary:
        'Numbers above 20 are formed using a combination of "ishirini" (twenty) and the numbers 1-9.',
      details: `Example: ishirini (twenty), ishirini na moja (twenty-one)
- ishirini na + number`,
    },
    {
      title: 'Time Expressions',
      summary:
        'Time expressions are used to indicate when something is happening.',
      details: `Example: asubuhi (in the morning), usiku (at night)
- Time word`,
    },
    {
      title: 'Days of the Week',
      summary: 'Days of the week have specific names in Kiswahili.',
      details: `Example: Jumatatu (Monday), Jumanne (Tuesday)
- Day name`,
    },
    {
      title: 'Months of the Year',
      summary: 'Months of the year have specific names in Kiswahili.',
      details: `Example: Januari (January), Februari (February)
- Month name`,
    },
    {
      title: 'Seasons',
      summary: 'Seasons are referred to with specific terms in Kiswahili.',
      details: `Example: kiangazi (dry season), masika (rainy season)
- Season name`,
    },
    {
      title: 'Colors',
      summary:
        'Colors have specific names in Kiswahili and are used as adjectives.',
      details: `Example: ndege mweupe (white bird), ndege mweusi (black bird)
- Color name + noun`,
    },
    {
      title: 'Family Relationships',
      summary:
        'Family relationships are expressed with specific terms in Kiswahili.',
      details: `Example: baba (father), mama (mother), mtoto (child)
- Relationship term`,
    },
    {
      title: 'Comparatives',
      summary: 'Comparatives are used to compare two things.',
      details: `Example: mtu mkubwa kuliko huyu (This person is bigger than that one)
- Adjective + kuliko + comparison`,
    },
    {
      title: 'Superlatives',
      summary: 'Superlatives are used to show the highest degree.',
      details: `Example: mtu mkubwa sana (The biggest person)
- Adjective + sana`,
    },
    {
      title: 'Prepositions',
      summary:
        'Prepositions indicate the relationship between a noun and another word in the sentence.',
      details: `Example: ndani ya nyumba (inside the house)
- Preposition + noun`,
    },
    {
      title: 'Adverbs',
      summary:
        'Adverbs modify verbs, adjectives, or other adverbs, providing more information about the action or quality.',
      details: `Example: Anapenda sana (He/She likes a lot)
- Adverb + verb/adjective/adverb`,
    },
    {
      title: 'Conjunctions',
      summary: 'Conjunctions connect words, phrases, or clauses.',
      details: `Example: Ninataka na nitaenda (I want and I will go)
- Word/phrase/clause + conjunction + word/phrase/clause`,
    },
  ],
};

export default grammarData;
