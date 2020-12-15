import { Injectable } from '@nestjs/common';

import { UserDto } from '../../dto/user.dto';
import { Validator } from '../interface';

@Injectable()
export class UserValidator implements Validator {
    public isValid({ name, budget }: UserDto): boolean {
        return (typeof name === 'string')
            && (name.length > 0)
            && (typeof budget === 'number')
            && (budget >= 0);
    }
}