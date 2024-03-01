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

export interface QuestionOptionProps {
  handleAnswerClick: (value: string) => void;
  option: any;
  selectedAnswer: string;
}


export interface ButtonProps {
  disabled?: boolean
  onClick : () => void
  title : string
  hidden?: boolean
  styleClass : string
}