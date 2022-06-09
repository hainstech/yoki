import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus(): string {
    return '٩(◕‿◕)۶ API is up';
  }
}
