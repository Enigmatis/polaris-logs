import * as path from 'path';

export function appendSuffixToFileName(filePath: string, suffixToAppend: string) {
    const fileExtension = path.extname(filePath);
    const fileNameWithoutExtension = path.basename(filePath, fileExtension);
    const dirName = path.dirname(filePath);
    return `${dirName}${fileNameWithoutExtension}${suffixToAppend}${fileExtension}`;
}
