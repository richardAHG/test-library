import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SaludoService } from './saludo.service';
import { CreateSaludoDto } from './dto/create-saludo.dto';
import { UpdateSaludoDto } from './dto/update-saludo.dto';

@Controller('saludo')
export class SaludoController {
  constructor(private readonly saludoService: SaludoService) {}

  @Post()
  create(@Body() createSaludoDto: CreateSaludoDto) {
    return this.saludoService.create(createSaludoDto);
  }

  @Get()
  findAll() {
    return this.saludoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saludoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSaludoDto: UpdateSaludoDto) {
    return this.saludoService.update(+id, updateSaludoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saludoService.remove(+id);
  }
}
