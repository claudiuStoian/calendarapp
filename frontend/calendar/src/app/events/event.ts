export class csEvent {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public imagePath: string,
        public date: Date,
        public location: string,
        public faculty: string,
        public eventType: string,
        public lat: number,
        public lng: number
    ) { }
}
