import { apiCall } from "../utils/apiCall";

export interface CreateRoomInput {
  title: string;
  host_secret: string;
}

export interface RoomDao {
  create: (input: CreateRoomInput) => Promise<Room>;
  findById: (id: string) => Promise<Room>;
}

// errors handled in components
export class RoomDaoImpl implements RoomDao {
  async create(input: CreateRoomInput): Promise<Room> {
    const room = await apiCall.post<Room>("/rooms", input);
    return room;
  }

  async findById(id: string): Promise<Room> {
    const room = await apiCall.get<Room>(`/rooms/${id}`);
    return room;
  }
}
