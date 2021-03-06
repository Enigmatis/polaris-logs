import { LogstashProtocol } from '../configurations/logstash-protocol';
import { LogstashOption, LogstashTransport } from 'winston-logstash-ts';

const sizeof = require('object-sizeof');

const MAX_UDP_PACKET_SIZE_IN_BYTES = 65535;
type DynamicProtocolOptions = Omit<LogstashOption, 'protocol'>;

export class DynamicLogstashTransport extends LogstashTransport {
    constructor(options: DynamicProtocolOptions) {
        super(options);
    }
    public send(message: any, callback: any): Promise<void> {
        if (sizeof(message) < MAX_UDP_PACKET_SIZE_IN_BYTES) {
            this.protocol = LogstashProtocol.UDP;
            return super.send(message, callback);
        } else {
            this.protocol = LogstashProtocol.TCP;
            return super.send(message, callback);
        }
    }
}
