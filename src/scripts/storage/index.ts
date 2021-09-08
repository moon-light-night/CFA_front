export default class Storage {
    static getItem(key: string, isJson: boolean = false): any {
        const data = localStorage.getItem(key);
        if (isJson) {
            return data ? JSON.parse(data) : data;
        }
        return data;
    }

    static setItem(key: string, value: any, isJson: boolean = false) {
        const data = isJson ? JSON.stringify(value) : value;
        localStorage.setItem(key, data);
    }

    static removeItem(key: string) {
        localStorage.removeItem(key);
    }
}