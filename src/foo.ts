import { Action } from './entities/group-id';
import { KeyValuePair } from './entities/KeyValuePair';
import { LoggerLevel, PolarisLogger } from './main';

const logger = new PolarisLogger({
    loggerLevel: LoggerLevel.DEBUG,
    writeFullMessageToConsole: true,
    writeToConsole: true,
});
const keyVal: KeyValuePair<string, any> = {key: 'a', value: true};
const secondaryIds = new Array<KeyValuePair<string, any>>(keyVal, keyVal, keyVal, keyVal, keyVal);
const map = new Map<string, any>([
    ['a', "abc"],
    ['b', 'abc'],
    ['c', 'abc'],
    ['d', 'abc'],
    ['e', 'abc'],
]);
console.log(JSON.stringify(Object.fromEntries(map)));
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
    groupId: {
        id: 'a',
        action: Action.WRAP
    }
});
