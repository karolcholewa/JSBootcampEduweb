//zamieniam funkcje EventEmitter na klase

class EventEmitter {

    constructor() {

        this.events = {}
    }

    //dodaje metode .on tzw.syntactic sugar

    on(type, fn) {

        if (!type || !fn) return;

        this.events[type] = this.events[type] || [];
        this.events[type].push(fn);

    }

    //dodaje metode .emit

    emit(type, data) {

        const fns = this.events[type];

        if (!fns || !fns.length) return;

        for (let i = 0; i < fns.length; i++) {
            fns[i](data);
        }

    };

}

class Database extends EventEmitter {
    
    constructor(url) {
        
        super();
        this.url = url;
        
        
    }
    
    connect(){

    // fikcyjne podłączenie do bazy

    this.emit("connect", this.url);

}
    
    disconnect() {

    // fikcyjne zakończenie połączenia z bazą

    this.emit("disconnect", this.url);

}
       
}


var db = new Database("db://localhost:3000"); // fikcyjny adres

db.on("connect", function (url) {
    console.log("Połączenie z bazą pod adresem " + url + " zostało ustanowione.");
});

db.on("disconnect", function (url) {
    console.log("Połączenie z bazą pod adresem " + url + " zostało zakończone.");
});

db.connect();

// po 5 sekundach rozłączamy się
setTimeout(function () {
    db.disconnect();
}, 5000);
