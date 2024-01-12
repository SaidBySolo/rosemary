
export interface Message {
    timestamp: string;
    name: string;
    uuid: string;
    content: string;
}

const pattern = /^(\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}) > (\w+)\(([\w-]+)\) (.*)$/


export const parse = (string: string) => {
    const match = string.match(pattern);
    if (!match) {
        throw new Error
    }
    const timestamp = match[1];
    const name = match[2];
    const uuid = match[3];
    const content = match[4];

    return {
        timestamp: timestamp,
        name: name,
        uuid: uuid,
        content: content
    }
}