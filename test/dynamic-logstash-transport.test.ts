import { LogstashProtocol } from '../src/configurations/logstash-protocol';
import { DynamicLogstashTransport } from '../src/transports/dynamic-logstash-transport';

jest.mock('object-sizeof', () => jest.fn().mockReturnValueOnce(50).mockReturnValueOnce(70000));

describe('dynamic-logstash-transport tests', () => {
    const logstashHost = 'test';
    const logstashPort = 8080;
    const dynamicLogstashTransport = new DynamicLogstashTransport({
        host: logstashHost,
        port: logstashPort,
    });
    const message = 'hi';
    const cb = {};
    test('gets message and sends it using UDP', async () => {
        await expect(dynamicLogstashTransport.send(message, cb)).rejects.toThrowError();
        expect((dynamicLogstashTransport as any).protocol).toEqual(LogstashProtocol.UDP);
    });
    test('gets message and sends it using TCP', async () => {
        await expect(dynamicLogstashTransport.send(message, cb)).rejects.toThrowError();
        expect((dynamicLogstashTransport as any).protocol).toEqual(LogstashProtocol.TCP);
    });
});
