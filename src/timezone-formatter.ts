import * as moment from 'moment-timezone';
import * as winston from 'winston';

const timezone = 'Israel';

export const appendTimestamp = winston.format((info: any) => {
    info.timestamp = moment()
        .tz(timezone)
        .format();
    return info;
});
