import { PSpendingDto } from './pspending.dto';
import { UserDto } from './user.dto';

export interface SpendingDto {
    id?: number;
    amount: number;
    label: string;
    datetime: string;
    initiator: UserDto;
    type: PSpendingDto;
}