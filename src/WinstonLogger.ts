import * as winston from 'winston';

const {createLogger, format, transports} = require('winston');
const {combine} = format;

export class WinstonLogger {
    private readonly logger;

    constructor() {
        const myFormat = winston.format.combine(
            winston.format.timestamp(),
            winston.format.align(),
            winston.format.printf((info) => {
                const {
                    timestamp, level, message, ...args
                } = info;

                const ts = timestamp.slice(0, 19).replace('T', ' ');
                return `${ts} [${level}]: ${message}\n${Object.keys(args).length ? JSON.stringify(args, null, 2) : ''}`;
            }));

        const customLevels = {
            levels: {
                error: 0,
                warn: 1,
                info: 2,
                debug: 3,
                trace: 4
            },
            colors: {
                error: 'red',
                warn: 'yellow',
                info: 'green',
                trace: 'magenta',
                debug: 'blue',
            }
        };

        this.logger = createLogger({
            level: 'trace',
            levels: customLevels.levels,
            format: format.json(),
            transports: [
                new transports.File({
                    filename: 'somefile.log', format: combine(myFormat)
                })
            ],
            exitOnError: false, // do not exit on handled exceptions
        });

        winston.addColors(customLevels.colors);
        this.logger.add(new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                myFormat)
        }));
    }

    getLogger() {
        return this.logger;
    }
}
