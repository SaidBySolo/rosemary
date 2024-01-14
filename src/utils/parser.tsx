export interface Message {
    timestamp: string;
    name: string;
    uuid: string;
    what: string;
    whereSimpleName: string;
    why: string;
}

// 2024/01/11 22:25:54 > A_bins(cbe06212-6680-4775-ad3b-7395b18777f0) asdasdasd at Test because GIVING
const pattern = /^(\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}) > (\w+)\(([\w-]+)\) (.*) at (\w+) because (.*)$/;

export const parse = (string: string) => {
    const match = string.match(pattern);
    if (!match) throw new Error("Invalid format");

    const timestamp = match[1];
    const name = match[2];
    const uuid = match[3];
    const what = match[4];
    const whereSimpleName = match[5];
    const why = match[6];

    return {
        timestamp,
        name,
        uuid,
        what,
        whereSimpleName,
        why
    };

}

