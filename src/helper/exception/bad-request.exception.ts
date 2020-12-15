import { HttpException, HttpStatus } from '@nestjs/common';

export class BadRequestException extends HttpException {
    constructor(reason: string) {
        super({
            status: HttpStatus.BAD_REQUEST,
            reason
        }, HttpStatus.BAD_REQUEST);
    }
}