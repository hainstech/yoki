import { PartialType } from '@nestjs/mapped-types';
import { CreateCarerDto } from './create-carer.dto';

export class UpdateCarerDto extends PartialType(CreateCarerDto) {}
