class Connection {
    static instance = new Connection('admin', '123');

    constructor(username, password) {
        if(!Connection.instance) {
            this.username = username;
            this.password = password;
        }    
        return Connection.instance;
    }
}

const conn1 = new Connection();
const conn2 = new Connection();
console.log(conn1 === conn2);


// class Connection2 {

//     constructor(username, password) {
//         if (!Connection2.instance) {
//             this.username = username;
//             this.password = password;
//             Connection2.instance = this;
//         }
//         return Connection2.instance;
//     }

// }

// const conn3 = new Connection('admin', '123');
// const conn4 = new Connection('admin', '123');
// console.log(conn3 === conn4);