import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AdopterService } from './adopter.service';
import { CreateAdopterDTO } from './dto/CreateAdopter.dto';
import { AdopterListDTO } from './dto/ListAdopter.dto';
import { PipeHashing } from 'src/resources/pipes/hashing-pass.pipe';
import { UpdateAdopterDTO } from './dto/UpdateAdopter.dto';

@Controller('adotante')
export class AdopterController {
  constructor(private adopterService: AdopterService) {}

  @Post('/register')
  async createAdopter(
    @Body() { password, ...adopterData }: CreateAdopterDTO,
    @Body('password', PipeHashing) hashedPass: string,
  ) {
    const createdAdopter = await this.adopterService.createAdopter({
      ...adopterData,
      password: hashedPass,
    });
    return {
      message: `Adotante criado com sucesso`,
      adopter: new AdopterListDTO(createdAdopter.id, createdAdopter.nome),
    };
  }

  @Get()
  async adoptersList() {
    const savedAdopters = await this.adopterService.adoptersList();
    return {
      message: `Todos os adotantes`,
      adopters: savedAdopters,
    };
  }

  @Put('/:id')
  async updateAdopter(
    @Param('id') id: string,
    @Body() newData: UpdateAdopterDTO,
  ) {
    const updatedAdopter = await this.adopterService.updateAdopter(id, newData);
    return {
      message: `Atualização realizada com sucesso`,
      adopter: updatedAdopter,
    };
  }

  @Delete('/id')
  async removeAdopter(@Param('id') id: string) {
    const removedAdopter = await this.adopterService.deleteAdopter(id);
    return {
      message: `Perfil removido com sucesso`,
      adopter: removedAdopter,
    };
  }
}
