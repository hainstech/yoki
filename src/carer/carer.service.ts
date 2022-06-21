import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FilledQuestionnaire } from 'src/types';
import { Carer, CarerDocument } from './carer.schema';
import { CreateCarerDto } from './dto/create-carer.dto';
import { UpdateCarerDto } from './dto/update-carer.dto';

@Injectable()
export class CarerService {
  constructor(
    @InjectModel(Carer.name) private carerModel: Model<CarerDocument>
  ) {}

  create(createCarerDto: CreateCarerDto) {
    return this.carerModel.create(createCarerDto);
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

  async pushFilledQuestionnaire(
    id: string,
    filledQuestionnaire: FilledQuestionnaire
  ) {
    const carer = await this.carerModel.findOne({ _id: id });
    carer.filledQuestionnaires.push(filledQuestionnaire);
    return carer.save();
  }
}
