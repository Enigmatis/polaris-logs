declare module 'logstash-tcp-wins' {
    import * as Transport from 'winston-transport';

    interface LogstashTransportOptions extends Transport.TransportStreamOptions {
        host?: string;
        port?: number;
        json?: boolean;
        trailingLineFeed?: boolean;
        trailingLineFeedChar?: string;
    }

    class LogstashTransport extends Transport {
        constructor({}: LogstashTransportOptions);
    }

    export = LogstashTransport;
}
