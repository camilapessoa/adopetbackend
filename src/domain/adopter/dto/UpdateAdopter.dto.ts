import { PartialType } from '@nestjs/mapped-types';
import { CreateAdopterDTO } from './CreateAdopter.dto';

export class UpdateAdopterDTO extends PartialType(CreateAdopterDTO) {}
