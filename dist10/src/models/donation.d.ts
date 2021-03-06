import { Entity } from '@loopback/repository';
export declare class Donation extends Entity {
    id?: number;
    amount: number;
    user_id: number;
    charity_id: number;
    charity_name: string;
    getId(): number | undefined;
}
