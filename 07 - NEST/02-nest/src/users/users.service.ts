import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { createHash, isValidPassword } from './utils';
import { RequestUser, UserLogin } from './types';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private UserModel: Model<UserDocument>,
    private JwtService: JwtService,
  ) {}

  async register(createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;
    const existUser = await this.findByEmail(email);
    if (existUser) throw new BadRequestException('User already exists');
    return await this.UserModel.create({
      ...createUserDto,
      password: createHash(password),
    });
  }

  async findByEmail(email: string): Promise<UserDocument | null> {
    return await this.UserModel.findOne({ email });
  }

  generateToken(user: UserDocument) {
    return this.JwtService.sign({
      firstname: user.first_name,
      email: user.email,
      role: user.role,
    });
  }

  async login(user: UserLogin): Promise<string | null> {
    const { email, password } = user;
    const existUser = await this.findByEmail(email);
    if (!existUser) throw new BadRequestException('Invalid credentials');
    const isValid = isValidPassword(password, existUser);
    if (!isValid) throw new BadRequestException('Invalid credentials');
    return this.generateToken(existUser);
  }

  profile(req: RequestUser) {
    return req.user;
  }
}
