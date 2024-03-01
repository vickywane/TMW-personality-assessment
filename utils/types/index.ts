export interface ALPHA_KEY {
  key: string;
  keyName: string;
  keyCode: number;
}

export interface useKeyBoardShortcutProps {
  callback: (keyName: string) => void;
  actionKey?: Record<string, string | number>;
}

export interface PersonalityQuestionType {
  id: string;
  question: string;
  options: Array<{
    alphaKey: string;
    value: string;
  }>;
}

export interface QuestionCardProps {
    data: PersonalityQuestionType;
    nextQuestionId?: string;
    prevQuestionId?: string;
  }
  
