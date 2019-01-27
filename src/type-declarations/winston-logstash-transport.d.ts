declare module 'winston-logstash-transport' {
    import * as Transport from 'winston-transport';
    import {TransportStreamOptions} from 'winston-transport';

    interface logstashTransportOptions extends TransportStreamOptions {
        host?: string,
        port?: number,
        trailingLineFeed?: boolean,
        trailingLineFeedChar?: string
    }

    export class LogstashTransport extends Transport{
        constructor({}: logstashTransportOptions)
    }
}