import { Module } from '@nestjs/common';
import { TypezController } from './typez.controller';
import { TypezService } from './typez.service';

@Module({
  controllers: [TypezController],
  providers: [TypezService]
})
export class TypezModule {}
