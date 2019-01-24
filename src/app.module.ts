import { InputController } from './files/input.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, InputController],
  providers: [AppService],
})
export class AppModule {}
