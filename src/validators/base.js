export default class Validators {
    static validate(opt) {
        if (opt !== '' && this[`${opt}`] !== undefined) {
            return this[`${opt}`]();
        } else return [];
    }

    static sanitizeLower() {
        return {
            options: (value, { req, location, path }) => {
                return value.toLowerCase();
            }
        };
    }
}