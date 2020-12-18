import { Validator } from '../interface';

export class DateValidator implements Validator {

    private patterns: RegExp[] = [
        new RegExp(/^\d{4}-\d{2}-\d{2}$/),
        new RegExp(/^\d{4}-\d{2}-\d{2}$/)
    ]
    
    public isValid(target: string): boolean {
        return this.patterns.map(p => p.test(target)).includes(true);
    }

}