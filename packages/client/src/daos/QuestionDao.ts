import { apiCall } from "../utils/apiCall";

export interface CreateQuestionInput {
  message: string;
  username: string;
  roomId: string;
}

export interface QuestionDao {
  create: (input: CreateQuestionInput) => Promise<Question>;
  findById: (id: string) => Promise<Question>;
}

// errors handled in components
export class QuestionDaoImpl implements QuestionDao {
  async create(input: CreateQuestionInput): Promise<Question> {
    const question = await apiCall.post<Question>("/questions", input);
    return question;
  }

  async findById(id: string): Promise<Question> {
    const question = await apiCall.get<Question>(`/questions/${id}`);
    return question;
  }
}
