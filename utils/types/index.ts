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
  option: PersonalityQuestionType["options"][0];
  selectedAnswer: string;
}

export interface ButtonProps {
  testId?: string;
  disabled?: boolean;
  onClick: () => void;
  title: string;
  hidden?: boolean;
  styleClass: string;
}

export interface StoredAssessmentType {
  name: string;
  createdAt: string;
  lastQuestionId: string;
  assesments:
    | Array<{
        id: string;
        selectedAnswer: string;
        question: string;
      }>
    | [];
}
