import { Message, parse } from "./parser";


const line2message = (string: string) => {
    const message = parse(string);
    return message;
}

const lines2messages = (strings: string[]) => {
    const messages = strings.map(line2message);
    return messages;
}

const message2line = (message: Message) => {
    const line = `${message.timestamp} > ${message.name}(${message.uuid}) ${message.content}`;
    return line;
}

const messages2lines = (messages: Message[]) => {
    const lines = messages.map(message2line);
    return lines;
}

const indexing = (messages: Message[]) => {
    const names = new Set(messages.map(message => message.name));
    const uuids = new Set(messages.map(message => message.uuid));

    return {
        names: names,
        uuids: uuids
    }
}


