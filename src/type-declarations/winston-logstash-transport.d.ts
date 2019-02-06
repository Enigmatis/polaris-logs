declare module 'winston-logstash-transport' {
    import * as Transport from 'winston-transport';

    interface LogstashTransportOptions extends Transport.TransportStreamOptions {
        host?: string,
        port?: number,
        trailingLineFeed?: boolean,
        trailingLineFeedChar?: string
    }

    interface LogstashTransportInstance extends Transport {
        options: LogstashTransportOptions;

        new(options?: LogstashTransportOptions): LogstashTransportInstance;
    }

    export const LogstashTransport: LogstashTransportInstance;
}
