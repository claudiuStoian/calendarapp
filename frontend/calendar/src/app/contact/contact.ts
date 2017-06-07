export class Contact {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public title: string,
        public message: string,
        public done: boolean,
    ) { }
}