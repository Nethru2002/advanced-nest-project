import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly usersService: UsersService,
  ) {
    // Added a check to ensure the JWT_SECRET is defined
    const secret = configService.get<string>('JWT_SECRET');
    if (!secret) {
      throw new Error('JWT_SECRET is not defined in the environment variables');
    }

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secret, // Use the validated secret
    });
  }

  async validate(payload: { sub: number; email: string }) {
    const user = await this.usersService.findOneById(payload.sub);
    if (!user) {
        throw new UnauthorizedException();
    }
    // Passport attaches this return value to the request object as request.user
    // We remove password from the user object before returning
    const { password, ...result } = user;
    return { userId: result.id, email: result.email, name: result.name };
  }
}