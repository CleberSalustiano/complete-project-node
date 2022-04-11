import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity("appointments")
class Appointment {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()//caso a coluna possua outro nome no banco de dados, esse deve ser explicitado dentro dos parenteses
  provider: string;

  @Column('timestamp with time zone')
  date: Date;
}

export default Appointment;
