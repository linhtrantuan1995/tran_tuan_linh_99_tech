import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    DeleteDateColumn,
    Index,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";
@Entity()
export class resource {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', {nullable: false, length: 255})
    name: string;

    @Column('varchar', {nullable: true, length: 255})
    type: string;

    @Column('text', {nullable: true})
    data: string;

    @Index()
    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    })
    createdAt: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    })
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}