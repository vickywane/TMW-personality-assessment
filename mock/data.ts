import { ALPHA_KEY } from "@/utils/types";

export const TRAIT = {
  introvert: [
    "Ask them, please, to find somebody else for a change",
    "Notice that they’re alone, but don’t go over to talk with them",
    "Don’t dare show that you don’t know anything about the subject",
    "Heave a sigh of relief and look forward to a day without stress",
    "Think it’s for the best — it was a lame joke anyway",
    "Hang around you all evening",
    "Interrupt and explain that you are really busy at the moment",
    "Follow the group without question",
    "Complain in a loud voice, while tapping your foot impatiently",
    "Think that they are obviously right",
    "Look at your watch every two minutes",
    "Don’t dare to interrupt them",
    "Hardly notice them at all",
    "Barely follow the discussion",
    "Know that somebody will find a reason to come and bother you",
  ],
  extrovert: [
    "Continuously interrupt your colleague",
    "Are right up the front, adding your own comments in a loud voice",
    "Keep telling it until they pay attention",
    "Talk privately between themselves",
    "Listen, but with only with half an ear",
    "Explain to other equally impatient people in the room that the doctor is always running late",
    "Defend your own point of view, tooth and nail",
    "Make sure that everyone is able to hear properly",
    "Talk privately between themselves",
    "Wait to share it with your friends after work",
    "Pick up the phone and start filling up your agenda with meetings",
    "Ask lots of questions to learn more about it",
    "Go and have a chat with them",
    "Give them a hand, as usual",
    "Loudly make it known that you’re annoyed",
  ],
};

export const PERSONALITY_RESULT_DETAILS = [
  {
    type: "introvert",
    title: "You have proven to be an introvert. So calm!",
    text: "An introvert is someone who finds solace and strength in their inner world. Preferring reflection over constant social interaction, introverts often recharge by spending time alone or in small, intimate settings. They tend to be observant listeners, valuing deep connections and meaningful conversations. While they may appear reserved in large gatherings, introverts often possess rich inner lives, harboring creative thoughts, ideas, and a unique perspective on the world. They thrive in environments where they can engage in introspection, pursue their passions, and cultivate meaningful relationships with a select few.",
  },
  {
    type: "extrovert",
    title: "You are more of an introvert. Quite Interesting!",
    text: "You feel that living alone is to live happily, and you prefer hiding in a crowd rather than standing out in one. You are perpetually tormented by the idea of doing things wrong, not understanding or not being alert enough or intelligent enough to do what others expect of you. You lack in self-confidence and you seem to believe that others are better than you. While in a conversation, for example, you would be more likely to go along with the other’s points of view as you don’t fully respect your own opinions. Where there’s a low level task to complete or a service to be allotted, it’s you who volunteers. When people want to get out of a task, they naturally come to you as they know that you never say ‘no’. It’s not surprising that you sometimes have the impression of being permanently exploited, but you don’t really know how to break this vicious circle. On the rare occasions that you’ve tried to do so, this uncharacteristic defiance has caused uproar and you’ve ended up backing down. You are afraid of contact with others as you imagine that they are constantly judging you and that their probing looks will obviously find your faults. So, you try to remain the most transparent and discreet possible.",
  }
];

export const QUESTIONS = [
  {
    id: "ac8a1e71-03e3-48c2-80e4-3d3660e0e5f5",
    question:
      "You’re really busy at work and a colleague is telling you their life story and personal woes. You:",
    options: [
      {
        alphaKey: "A",
        value: "Don’t dare to interrupt them",
      },
      {
        alphaKey: "B",
        value:
          "Think it’s more important to give them some of your time; work can wait",
      },
      {
        alphaKey: "C",
        value: "Listen, but with only with half an ear",
      },
      {
        alphaKey: "D",
        value: "Interrupt and explain that you are really busy at the moment",
      },
    ],
  },
  {
    id: "b2f5c6b8-f464-4a8d-a63d-2516e9bc76e4",
    question:
      "You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:",
    options: [
      {
        alphaKey: "A",
        value: "Look at your watch every two minutes",
      },
      {
        alphaKey: "B",
        value: "Bubble with inner anger, but keep quiet",
      },
      {
        alphaKey: "C",
        value:
          "Explain to other equally impatient people in the room that the doctor is always running late",
      },
      {
        alphaKey: "D",
        value: "Complain in a loud voice, while tapping your foot impatiently",
      },
    ],
  },
  {
    id: "c3e5024b-70c1-4d17-9c2b-7b5fb1b35742",
    question:
      "You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:",
    options: [
      {
        alphaKey: "A",
        value: "Don’t dare contradict them",
      },
      {
        alphaKey: "B",
        value: "Think that they are obviously right",
      },
      {
        alphaKey: "C",
        value: "Defend your own point of view, tooth and nail",
      },
      {
        alphaKey: "D",
        value: "Continuously interrupt your colleague",
      },
    ],
  },
  {
    id: "da9b396a-1cf6-49ac-a29c-93ecdfb9c7e9",
    question: "You are taking part in a guided tour of a museum. You:",
    options: [
      {
        alphaKey: "A",
        value:
          "Are a bit too far towards the back so don’t really hear what the guide is saying",
      },
      {
        alphaKey: "B",
        value: "Follow the group without question",
      },
      {
        alphaKey: "C",
        value: "Make sure that everyone is able to hear properly",
      },
      {
        alphaKey: "D",
        value:
          "Are right up the front, adding your own comments in a loud voice",
      },
    ],
  },
  {
    id: "e6d3b8ec-001d-4a5a-b40a-67a5e8a0b183",
    question:
      "During dinner parties at your home, you have a hard time with people who:",
    options: [
      {
        alphaKey: "A",
        value: "Ask you to tell a story in front of everyone else",
      },
      {
        alphaKey: "B",
        value: "Talk privately between themselves",
      },
      {
        alphaKey: "C",
        value: "Hang around you all evening",
      },
      {
        alphaKey: "D",
        value: "Always drag the conversation back to themselves",
      },
    ],
  },
  {
    id: "f9b33f02-5ff7-44b2-9f2e-6f430a7fb024",
    question:
      "You crack a joke at work, but nobody seems to have noticed. You:",
    options: [
      {
        alphaKey: "A",
        value: "Think it’s for the best — it was a lame joke anyway",
      },
      {
        alphaKey: "B",
        value: "Wait to share it with your friends after work",
      },
      {
        alphaKey: "C",
        value: "Try again a bit later with one of your colleagues",
      },
      {
        alphaKey: "D",
        value: "Keep telling it until they pay attention",
      },
    ],
  },
  {
    id: "1c6e620d-30b5-47d8-b19c-64e6a1239275",
    question: "This morning, your agenda seems to be free. You:",
    options: [
      {
        alphaKey: "A",
        value: "Know that somebody will find a reason to come and bother you",
      },
      {
        alphaKey: "B",
        value:
          "Heave a sigh of relief and look forward to a day without stress",
      },
      {
        alphaKey: "C",
        value:
          "Question your colleagues about a project that’s been worrying you",
      },
      {
        alphaKey: "D",
        value:
          "Pick up the phone and start filling up your agenda with meetings",
      },
    ],
  },
  {
    id: "2f4c44c4-12aa-475a-af09-bdbf731a2cb2",
    question:
      "During dinner, the discussion moves to a subject about which you know nothing at all. You:",
    options: [
      {
        alphaKey: "A",
        value: "Don’t dare show that you don’t know anything about the subject",
      },
      {
        alphaKey: "B",
        value: "Barely follow the discussion",
      },
      {
        alphaKey: "C",
        value: "Ask lots of questions to learn more about it",
      },
      {
        alphaKey: "D",
        value: "Change the subject of discussion",
      },
    ],
  },
  {
    id: "3a9a7611-dbb5-4385-8850-228d8636a04a",
    question:
      "You’re out with a group of friends and there’s a person who’s quite shy and doesn’t talk much. You:",
    options: [
      {
        alphaKey: "A",
        value: "Notice that they’re alone, but don’t go over to talk with them",
      },
      {
        alphaKey: "B",
        value: "Go and have a chat with them",
      },
      {
        alphaKey: "C",
        value: "Shoot some friendly smiles in their direction",
      },
      {
        alphaKey: "D",
        value: "Hardly notice them at all",
      },
    ],
  },
  {
    id: "4c7e70fa-b2f7-4c87-9c0a-3a9cf0d1b7b0",
    question:
      "At work, somebody asks for your help for the hundredth time. You:",
    options: [
      {
        alphaKey: "A",
        value: "Give them a hand, as usual",
      },
      {
        alphaKey: "B",
        value: "Accept — you’re known for being helpful",
      },
      {
        alphaKey: "C",
        value: "Ask them, please, to find somebody else for a change",
      },
      {
        alphaKey: "D",
        value: "Loudly make it known that you’re annoyed",
      },
    ],
  },
];

export const SUPPORTED_ALPHA_KEYS: Array<ALPHA_KEY> = [
  {
    key: "Enter",
    keyName: "Enter",
    keyCode: 13,
  },
  {
    key: "A",
    keyName: "KeyA",
    keyCode: 65,
  },
  {
    key: "B",
    keyName: "KeyB",
    keyCode: 66,
  },
  {
    key: "C",
    keyName: "KeyC",
    keyCode: 67,
  },
  {
    key: "D",
    keyName: "KeyD",
    keyCode: 68,
  },
];

export const ENTER_KEY = {
  key: "Enter",
  keyName: "Enter",
  keyCode: 13,
};
