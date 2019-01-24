import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const a = 25;
    const b = 35;
    return `${a + b}`;
  }
}
