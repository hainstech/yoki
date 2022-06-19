import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { sign } from 'jsonwebtoken';
import { Payload } from 'src/types';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async signPayload(payload: Payload) {
    // TODO: expiration
    return sign(payload, process.env.SECRET_KEY);
  }

  async validateUser(payload: Payload) {
    return await this.userService.findByPayload(payload);
  }
}
