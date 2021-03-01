interface Room {
  _id: string;
  title: string;
  questions: Question[];
}

interface Question {
  _id: string;
  upvotes: number;
  room: string;
  message: string;
  username: string;
  createdAt: string;
  updatedAt: string;
}
