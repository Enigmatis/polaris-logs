declare module 'winston-logstash-transport' {
    import * as Transport from 'winston-transport';

    interface LogstashTransportOptions extends Transport.TransportStreamOptions {
        host?: string,
        port?: number,
        trailingLineFeed?: boolean,
        trailingLineFeedChar?: string
    }

    export class LogstashTransport extends Transport {
        constructor({}: LogstashTransportOptions)
    }
}