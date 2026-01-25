"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("./schema/user.schema");
const mongoose_2 = require("mongoose");
const jwt_1 = require("@nestjs/jwt");
const utils_1 = require("./utils");
let UsersService = class UsersService {
    UserModel;
    JwtService;
    constructor(UserModel, JwtService) {
        this.UserModel = UserModel;
        this.JwtService = JwtService;
    }
    async register(createUserDto) {
        const { email, password } = createUserDto;
        const existUser = await this.findByEmail(email);
        if (existUser)
            throw new common_1.BadRequestException('User already exists');
        return await this.UserModel.create({
            ...createUserDto,
            password: (0, utils_1.createHash)(password),
        });
    }
    async findByEmail(email) {
        return await this.UserModel.findOne({ email });
    }
    generateToken(user) {
        return this.JwtService.sign({
            firstname: user.first_name,
            email: user.email,
            role: user.role,
        });
    }
    async login(user) {
        const { email, password } = user;
        const existUser = await this.findByEmail(email);
        if (!existUser)
            throw new common_1.BadRequestException('Invalid credentials');
        const isValid = (0, utils_1.isValidPassword)(password, existUser);
        if (!isValid)
            throw new common_1.BadRequestException('Invalid credentials');
        return this.generateToken(existUser);
    }
    profile(req) {
        return req.user;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], UsersService);
//# sourceMappingURL=users.service.js.map