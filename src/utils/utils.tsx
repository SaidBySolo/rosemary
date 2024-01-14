import { Message, parse } from "./parser"


const line2message = (string: string) => {
    const message = parse(string);
    return message;
}

export const lines2messages = (strings: string[]) => {
    const messages = strings.map(line2message);
    return messages;
}

const message2line = (message: Message) => {
    const line = `${message.timestamp} > ${message.name}(${message.uuid}) ${message.what} at ${message.whereSimpleName} because ${message.why}`;
    return line;
}

export const messages2lines = (messages: Message[]) => {
    const lines = messages.map(message2line);
    return lines;
}


