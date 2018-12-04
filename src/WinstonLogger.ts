import * as winston from 'winston';

export class WinstonLogger {
    private logger: winston.Logger;

    constructor() {

        this.logger = winston.createLogger({
            level: 'debug',
            format: winston.format.json(),
            transports: [
                new winston.transports.Console(),
                new winston.transports.File({filename: 'somefile.log'})
            ],
            exitOnError: false, // do not exit on handled exceptions
        });

    }

    getLogger() {
        return this.logger;
    }
}
