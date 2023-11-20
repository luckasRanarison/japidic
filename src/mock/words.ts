const words: Word[] = [
  {
    reading: {
      kana: "とうきょう",
      kanji: "東京",
      furigana: "[東京|とう|きょう]",
    },
    common: true,
    senses: [
      {
        glosses: ["Tokyo"],
        pos: [
          {
            Noun: "Normal",
          },
        ],
        language: "English",
      },
    ],
    audio: "/resource/audio/kanjialive/1447690",
    pitch: [
      {
        part: "と",
        high: false,
      },
      {
        part: "うきょう",
        high: true,
      },
    ],
  },
  {
    reading: {
      kana: "ざいとうきょう",
      kanji: "在東京",
      furigana: "[在東京|ざい|とう|きょう]",
    },
    common: false,
    senses: [
      {
        glosses: ["situated in Tokyo"],
        pos: [
          {
            Noun: "Normal",
          },
        ],
        language: "English",
      },
    ],
  },
];

export default words;
