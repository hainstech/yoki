import { Module } from '@nestjs/common';
import { CarerService } from './carer.service';
import { CarerController } from './carer.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CarerSchema } from './carer.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Carer',
        schema: CarerSchema,
      },
    ]),
  ],
  controllers: [CarerController],
  providers: [CarerService],
})
export class CarerModule {}
