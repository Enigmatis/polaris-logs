import { LogstashProtocol } from './logstash-protocol';

export interface LogstashConfiguration {
    host: string;
    port: number;
    protocol: LogstashProtocol;
}
