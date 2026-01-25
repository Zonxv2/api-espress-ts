import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import type { RequestUser, UserLogin } from './types';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    register(body: CreateUserDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/user.schema").UserDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/user.schema").User & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    login(body: UserLogin): Promise<string | null>;
    profile(req: RequestUser): import("./types").DataUser;
}
