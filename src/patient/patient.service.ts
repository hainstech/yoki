import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/user/user.schema';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient, PatientDocument } from './patient.schema';

@Injectable()
export class PatientService {
  constructor(
    @InjectModel(Patient.name) private patientModel: Model<PatientDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>
  ) {}

  async create(createPatientDto: CreatePatientDto) {
    try {
      const createdPatient = new this.patientModel(createPatientDto);
      const user = new this.userModel({ ...createPatientDto, role: 'patient' });
      createdPatient.userId = user._id.toString();
      await createdPatient.save();
      user.patientId = createdPatient._id.toString();
      await user.save();
      return { createdPatient, user };
    } catch (error) {
      throw new BadRequestException(error);
    }
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
