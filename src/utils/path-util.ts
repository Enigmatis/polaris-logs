import * as path from 'path';

export function appendSuffixToFileName(filePath: string, suffixToAppend: string): string {
    const fileExtension = path.extname(filePath) ? path.extname(filePath) : '.log';
    const fileNameWithoutExtension = path.basename(filePath, fileExtension);
    const dirName = path.dirname(filePath);
    return `${dirName}${fileNameWithoutExtension}${suffixToAppend}${fileExtension}`;
}
