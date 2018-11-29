import * as winston from 'winston';
import * as appRoot from "app-root-path";

export class WinstonLogger {
    private logger: winston.Logger;

    constructor() {
        var options = {
            file: {
                level: 'info',
                filename: `${appRoot}/logs/app.log`,
                handleExceptions: true,
                json: true,
                maxsize: 5242880, // 5MB
                maxFiles: 5,
                colorize: false,
            },
            console: {
                level: 'debug',
                handleExceptions: true,
                json: false,
                colorize: true,
            },
        };

        this.logger = winston.createLogger({
            level: 'info',
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