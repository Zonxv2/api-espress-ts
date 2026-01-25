import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { RequestUser, UserLogin } from './types';
export declare class UsersService {
    private UserModel;
    private JwtService;
    constructor(UserModel: Model<UserDocument>, JwtService: JwtService);
    register(createUserDto: CreateUserDto): Promise<import("mongoose").Document<unknown, {}, UserDocument, {}, import("mongoose").DefaultSchemaOptions> & User & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    findByEmail(email: string): Promise<UserDocument | null>;
    generateToken(user: UserDocument): string;
    login(user: UserLogin): Promise<string | null>;
    profile(req: RequestUser): import("./types").DataUser;
}
