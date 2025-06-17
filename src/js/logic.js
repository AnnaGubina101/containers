export class Team {
    constructor() {
        this.members = new Set();
    }
    
    add(user) {
        this.members.add(user);
    }

    addAll(...users) {
        users.forEach(user => this.members.add(user))
    }

    toArray() {
        return Array.from(this.members);
    }
}

export class Character extends Team {
    constructor(user) {
        super();
        this.user = user;
    }
}

export class ErrorRepository {
    constructor() {
        this.map = new Map;
        this.map.set(404, 'Слишком красивый персонаж');
        this.map.set(500, 'Невозможно нанести урон');
    }

    translate(code) {
        if(this.map.has(code)) {
            return this.map.get(code);
        } else {
            return 'Unknown error'
        }
    }
}