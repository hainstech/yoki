import { Module } from '@nestjs/common';
import { CarerService } from './carer.service';
import { CarerController } from './carer.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CarerSchema } from './carer.schema';
import { UserModule } from 'src/user/user.module';
import { UserSchema } from 'src/user/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Carer',
        schema: CarerSchema,
      },
      {
        name: 'User',
        schema: UserSchema,
      },
    ]),
    UserModule,
  ],
  controllers: [CarerController],
  providers: [CarerService],
  exports: [CarerService],
})
export class CarerModule {}
