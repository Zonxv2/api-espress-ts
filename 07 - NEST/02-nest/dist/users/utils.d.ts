import { CreateUserDto } from './dto/create-user.dto';
export declare const createHash: (password: string) => string;
export declare const isValidPassword: (password: string, user: CreateUserDto) => boolean;
