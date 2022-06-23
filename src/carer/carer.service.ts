import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User, UserDocument } from 'src/user/user.schema';
import { UserService } from 'src/user/user.service';
import { Carer, CarerDocument } from './carer.schema';
import { CreateCarerDto } from './dto/create-carer.dto';
import { UpdateCarerDto } from './dto/update-carer.dto';

@Injectable()
export class CarerService {
  constructor(
    @InjectModel(Carer.name) private carerModel: Model<CarerDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly userService: UserService
  ) {}

  async create(createCarerDto: CreateCarerDto) {
    const createdCarer = new this.carerModel(createCarerDto);
    const user = new this.userModel({
      ...createCarerDto,
      type: 'carer',
    } as CreateUserDto);
    createdCarer.userId = user._id.toString();
    await createdCarer.save();
    user.carerId = createdCarer._id.toString();
    await user.save();
    return { createdCarer, user };
  }

  findAll() {
    return this.carerModel.find();
  }

  findOne(id: string) {
    return this.carerModel.findOne({ _id: id });
  }

  update(id: string, updateCarerDto: UpdateCarerDto) {
    return this.carerModel.updateOne({ _id: id }, updateCarerDto);
  }

  remove(id: string) {
    return this.carerModel.deleteOne({ _id: id });
  }
}
