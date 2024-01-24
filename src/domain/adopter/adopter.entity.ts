// import { PedidoEntity } from '../pedido/pedido.entity';
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity({ name: 'adopters' })
export class AdopterEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'nome', length: 100 })
  nome: string;

  @Column({ name: 'email', length: 70, nullable: false })
  email: string;

  // @Exclude()
  @Column({ name: 'senha', length: 255, nullable: false })
  password: string;

  @Column({ name: 'telefone', length: 15, nullable: true })
  telefone: string;

  @Column({ name: 'cidade', length: 50, nullable: true })
  cidade: string;

  @Column({ name: 'sobre', nullable: true })
  sobre: string;

  @Column({ name: 'fotoPerfil', nullable: true })
  fotoPerfil: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;

  //   @OneToMany(() => PedidoEntity, (pedido) => pedido.usuario)
  //   pedidos: PedidoEntity[]; mensagem
}
