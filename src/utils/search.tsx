import { Message } from "./parser";

class Search {
    private messages: Message[];

    constructor(messages: Message[]) {
        this.messages = messages;
    }

    public asName(name: string) {
        return this.messages.filter(message => message.name === name);
    }

    public asUuid(uuid: string) {
        return this.messages.filter(message => message.uuid === uuid);
    }

    public asContent(content: string) {
        return this.messages.filter(message => message.content.includes(content));
    }

}
