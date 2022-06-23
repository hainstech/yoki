import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  UnauthorizedException,
} from '@nestjs/common';
import { SelfCarerAuthGuard } from 'src/auth/carer.guard';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { CarerService } from './carer.service';
import { UpdateCarerDto } from './dto/update-carer.dto';

@Controller('carer')
export class CarerController {
  constructor(private readonly carerService: CarerService) {}

  @UseGuards(SelfCarerAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string, @Request() req) {
    return this.carerService.findOne(id);
  }

  @UseGuards(SelfCarerAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCarerDto: UpdateCarerDto,
    @Request() req
  ) {
    return this.carerService.update(id, updateCarerDto);
  }

  @UseGuards(SelfCarerAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string, @Request() req) {
    return this.carerService.remove(id);
  }
}
