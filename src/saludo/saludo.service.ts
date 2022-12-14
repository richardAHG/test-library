import { Injectable } from '@nestjs/common';
import { CreateSaludoDto } from './dto/create-saludo.dto';
import { UpdateSaludoDto } from './dto/update-saludo.dto';

@Injectable()
export class SaludoService {
  create(createSaludoDto: CreateSaludoDto) {
    return 'This action adds a new saludo';
  }

  findAll() {
    return `This action returns all saludo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} saludo`;
  }

  update(id: number, updateSaludoDto: UpdateSaludoDto) {
    return `This action updates a #${id} saludo`;
  }

  remove(id: number) {
    return `This action removes a #${id} saludo`;
  }
}
