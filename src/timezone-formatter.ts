import * as moment from 'moment-timezone';
import * as winston from 'winston';

export const appendTimestamp = (timezone: string) => {
    return winston.format((info: any) => {
        info.timestamp = moment()
            .tz(timezone)
            .format();
        return info;
    });
};
