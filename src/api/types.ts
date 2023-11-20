type Language =
  | "English"
  | "German"
  | "Spanish"
  | "Russain"
  | "Swedish"
  | "French"
  | "Dutch"
  | "Hungarian";

type SearchQuery = {
  query: string;
  language?: Language;
  noEnglish?: boolean;
};

type CompletionQuery = {
  input: string;
  lang:
    | "en-US"
    | "de-DE"
    | "es-ES"
    | "fr-FR"
    | "nl-NL"
    | "sv-SE"
    | "ru"
    | "hu"
    | "sl-SI";
  searchType: "Words" | "Kanji" | "Sentences" | "Names";
  radicals?: string[];
};

type Kanji = {
  literal: string;
  meanings: string[];
  grade: number;
  strokeCount: number;
  frequency: number;
  jlpt: number;
  onyomi: string[];
  kunyomi: string[];
  chinese: string[];
  koreanR: string[];
  koreanH: string[];
  parts: string[];
  radical: string;
  strokeFrames: string;
};

type Word = {
  reading: {
    kana: string;
    kanji: string;
    furigana: string;
  };
  common: boolean;
  senses: [
    {
      glosses: string[];
      pos: string[];
      language: Language;
    }
  ];
  audio?: string;
  pitch: [
    {
      part: string;
      high: boolean;
    }
  ];
};

type WordResponse = {
  kanji: Kanji[];
  words: Word[];
};

type NameType =
  | "Company"
  | "Female"
  | "Male"
  | "Place"
  | "Given"
  | "Organization"
  | "Person"
  | "Product"
  | "RailwayStation"
  | "Surname"
  | "Unclassified"
  | "Work";

type JapaneseName = {
  kana: string;
  kanji: string;
  transcription: string;
  nameType: NameType;
};

type Sentence = {
  content: string;
  furigana: string;
  translation: string;
  language: string;
};

type Suggestion = {
  primary: string;
  secondary?: string;
};

type CompletionResult = {
  suggestions: Suggestion[];
  suggestionType: "default";
};
