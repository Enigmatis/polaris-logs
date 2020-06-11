import * as winston from 'winston';

export interface Logger extends winston.Logger {
    fatal: winston.LeveledLogMethod;
    trace: winston.LeveledLogMethod;
}
