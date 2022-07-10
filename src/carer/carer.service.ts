import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FilledQuestionnaire } from 'src/types';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User, UserDocument } from 'src/user/user.schema';
import { Carer, CarerDocument } from './carer.schema';
import { CreateCarerDto } from './dto/create-carer.dto';
import { UpdateCarerDto } from './dto/update-carer.dto';

@Injectable()
export class CarerService {
  constructor(
    @InjectModel(Carer.name) private carerModel: Model<CarerDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>
  ) {}

  async create(createCarerDto: CreateCarerDto) {
    try {
      const createdCarer = new this.carerModel(createCarerDto);
      const user = new this.userModel({
        ...createCarerDto,
        role: 'carer',
      } as CreateUserDto);
      createdCarer.userId = user._id.toString();
      await createdCarer.save();
      user.carerId = createdCarer._id.toString();
      await user.save();
      return { createdCarer, user };
    } catch (error) {
      throw new BadRequestException(error);
    }
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

  async addQuestionnaires(
    id: string,
    questionnaires: Array<FilledQuestionnaire>
  ) {
    const carer = await this.carerModel.findOne({ _id: id });
    const carerQuestionnaires = carer.filledQuestionnaires;
    const newQuestionnaires = carerQuestionnaires.concat(questionnaires);
    return this.carerModel.updateOne(
      { _id: id },
      { filledQuestionnaires: newQuestionnaires }
    );
  }
}
