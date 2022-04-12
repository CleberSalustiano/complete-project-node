import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity("appointments")
class Appointment {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()//caso a coluna possua outro nome no banco de dados, esse deve ser explicitado dentro dos parenteses
  provider: string;

  @Column('timestamp with time zone')
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}

export default Appointment;
