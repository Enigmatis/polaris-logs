import { LogstashProtocols } from './logstash-protocols';

export interface LogstashConfiguration {
    logstashHost: string;
    logstashPort: number;
    logstashProtocol: LogstashProtocols;
}
