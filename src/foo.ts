import { LoggerLevel, PolarisLogger } from './main';

const logger = new PolarisLogger({
    loggerLevel: LoggerLevel.DEBUG,
    writeFullMessageToConsole: true,
    writeToConsole: true,
});
const secondaryIds = new Map<string, any>([
    ['a', true],
    ['b', false],
    ['c', true],
    ['d', true],
    ['e', false],
]);
console.log(JSON.stringify(Object.fromEntries(secondaryIds)));
logger.debug('message', {
    entity: {
        secondaryIds,
        operationalData: secondaryIds,
        correlationIds: [
            { id: 'a', secondaryIds },
            { id: 'b', secondaryIds },
        ],
        subEntities: [
            { id: 'dc', secondaryIds, operationalData: secondaryIds },
            { id: 'es', operationalData: secondaryIds, secondaryIds },
        ],
    },
});
