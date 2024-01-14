import { Message } from "./parser";

class Search {
    private messages: Message[];
    public autoCompletes: string[];

    constructor(messages: Message[]) {
        this.messages = messages;
        this.autoCompletes = this.makeAutoCompletes();

    }

    public search(query: string) {
        const { key, value } = this.queryParser(query);

        const results = this.messages.filter(message => {
            if (key === "name") {
                return message.name === value;
            } else if (key === "uuid") {
                return message.uuid === value;
            } else {
                throw new Error("Invalid format");
            }
        });

        return results;
    }

    private queryParser(query: string) {
        const pattern = /^(\w+):(.*)$/;
        const match = query.match(pattern);
        if (!match) throw new Error("Invalid format");

        const key = match[1];
        const value = match[2];

        return {
            key,
            value
        }
    }

    private makeAutoCompletes() {
        const names = new Set(this.messages.map(message => message.name));
        const uuids = new Set(this.messages.map(message => message.uuid));

        return [...Array.from(names).map(name => {
            return `name:${name}`
        }),
        ...Array.from(uuids).map(uuid => {
            return `uuid:${uuid}`
        })]
    }

}