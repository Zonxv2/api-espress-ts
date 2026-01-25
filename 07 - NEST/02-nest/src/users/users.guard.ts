import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class UsersGuard implements CanActivate {
  constructor(private JwtService: JwtService) {}

  private extractTokenFromHeader(request: Request): string | undefined {
    //"Bearer dfsdflksdfklsdfkl"
    const [type, token] = request.headers.authorization?.split(' ') ?? []; //[type: 'Bearer', token: 'dfsdflksdfklsdfkl']
    return type === 'Bearer' ? token : undefined;
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) throw new UnauthorizedException('Unauthorized');
    const payload = this.JwtService.verify(token, { secret: '1234' });
    request.user = payload;
    return true; //next()
  }
}
