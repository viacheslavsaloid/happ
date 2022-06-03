import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: "users" })
export class UserEntity {
  @PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
  name: string
}
