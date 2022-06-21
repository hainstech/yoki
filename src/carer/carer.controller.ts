import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FilledQuestionnaire } from 'src/types';
import { CarerService } from './carer.service';
import { CreateCarerDto } from './dto/create-carer.dto';
import { UpdateCarerDto } from './dto/update-carer.dto';

@Controller('carer')
export class CarerController {
  constructor(private readonly carerService: CarerService) {}

  @Post()
  create(@Body() createCarerDto: CreateCarerDto) {
    return this.carerService.create(createCarerDto);
  }

  @Get()
  findAll() {
    return this.carerService.findAll();
  }

  @Post('/filledQuestionnaire/:id')
  pushFilledQuestionnaire(
    @Param('id') id: string,
    @Body() filledQuestionnaire: FilledQuestionnaire
  ) {
    return this.carerService.pushFilledQuestionnaire(id, filledQuestionnaire);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carerService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarerDto: UpdateCarerDto) {
    return this.carerService.update(id, updateCarerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carerService.remove(id);
  }
}
