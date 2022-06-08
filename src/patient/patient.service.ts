import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient, PatientDocument } from './patient.schema';

@Injectable()
export class PatientService {
  constructor(
    @InjectModel(Patient.name) private patientModel: Model<PatientDocument>
  ) {}

  create(createPatientDto: CreatePatientDto) {
    return this.patientModel.create(createPatientDto);
  }

  findAll() {
    return this.patientModel.find();
  }

  findOne(id: string) {
    return this.patientModel.findOne({ _id: id });
  }

  update(id: string, updatePatientDto: UpdatePatientDto) {
    return this.patientModel.updateOne({ _id: id }, updatePatientDto);
  }

  remove(id: string) {
    return this.patientModel.deleteOne({ _id: id });
  }
}
