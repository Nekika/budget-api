import { Injectable } from '@nestjs/common';

import { Validator } from '../interface';
import { DateValidator } from './date.validator';

import { SpendingDto } from 'src/dto/spending.dto';


@Injectable()
export class SpendingValidator implements Validator {

    constructor(
        private dateValidator: DateValidator
    ) { }
    
    public isValid({ amount, label, datetime }: SpendingDto): boolean {
        return (typeof amount === 'number')
            && (amount >= 0)
            && (typeof label === 'string')
            && (label.length > 0)
            && (typeof datetime === 'string')
            && (this.dateValidator.isValid(datetime))
    }

}