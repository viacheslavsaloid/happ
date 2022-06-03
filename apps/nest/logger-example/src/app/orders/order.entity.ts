import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: "orders" })
export class OrderEntity {
  @PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
  name: string
}
