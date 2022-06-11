import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQuestionnaireDto } from './dto/create-questionnaire.dto';
import { UpdateQuestionnaireDto } from './dto/update-questionnaire.dto';
import { Questionnaire, QuestionnaireDocument } from './questionnaire.schema';

@Injectable()
export class QuestionnaireService {
  constructor(
    @InjectModel(Questionnaire.name)
    private questionnaireModel: Model<QuestionnaireDocument>
  ) {}

  create(createQuestionnaireDto: CreateQuestionnaireDto) {
    return this.questionnaireModel.create(createQuestionnaireDto);
  }

  findAll() {
    return this.questionnaireModel.find();
  }

  findOne(id: string) {
    return this.questionnaireModel.findOne({ _id: id });
  }

  update(id: string, updateQuestionnaireDto: UpdateQuestionnaireDto) {
    return this.questionnaireModel.updateOne({
      _id: id,
      updateQuestionnaireDto,
    });
  }

  remove(id: string) {
    return this.questionnaireModel.remove({ _id: id });
  }
}
