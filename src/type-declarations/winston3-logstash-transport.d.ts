declare module 'winston3-logstash-transport' {
    import * as Transport from 'winston-transport';

    interface LogstashTransportOptions extends Transport.TransportStreamOptions {
        mode?: string;
        localhost?: string;
        host?: string;
        port?: number;
        applicationName?: string;
        pid?: string;
        silent?: boolean;
        maxConnectRetries?: number;
        timeoutConnectRetries?: number;
        label?: string;
        sslEnable?: boolean;
        sslKey?: string;
        sslCert?: string;
        sslCA?: string;
        sslPassPhrase?: string;
        rejectUnauthorized?: boolean;
        trailingLineFeed?: boolean;
        trailingLineFeedChar?: string;
        formatted?: boolean;
    }

    export class LogstashTransport extends Transport {
        constructor({}: LogstashTransportOptions);
    }
}
