import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Post,
} from '@nestjs/common';
import { SelfCarerAuthGuard } from 'src/auth/carer.guard';
import { FilledQuestionnaire } from 'src/types';
import { CarerService } from './carer.service';
import { UpdateCarerDto } from './dto/update-carer.dto';

@Controller('carer')
export class CarerController {
  constructor(private readonly carerService: CarerService) {}

  @UseGuards(SelfCarerAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carerService.findOne(id);
  }

  @UseGuards(SelfCarerAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarerDto: UpdateCarerDto) {
    return this.carerService.update(id, updateCarerDto);
  }

  @UseGuards(SelfCarerAuthGuard)
  @Post(':id/questionnaires')
  addQuestionnaires(
    @Param('id') id: string,
    @Body() questionnaires: Array<FilledQuestionnaire>
  ) {
    return this.carerService.addQuestionnaires(id, questionnaires);
  }

  @UseGuards(SelfCarerAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carerService.remove(id);
  }
}
