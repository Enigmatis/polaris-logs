import * as winston from 'winston';

declare module 'winston' {
    export interface Logger {
        trace: winston.LeveledLogMethod;
        fatal: winston.LeveledLogMethod;
    }
}
