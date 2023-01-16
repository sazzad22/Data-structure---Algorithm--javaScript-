//*Singleton design pattern
//We can get a glimpse of the purpose of this design pattern from its name - SINGLEton. We use this design pattern when we only want a single instance of a class. That means we cannot create multiple instances - just one. If there is no instance, a new one is created. If there is an existing instance, it will use that one.

let instance = null;

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database:process.env.DATABASE
})

connection.connect((err) => {
    if (err) {
        console.log(err);
    }
})

//*Singleton
class DbService{
    static getDbInstance() {
        return instance ? instance : new DbService()
    }

    async getAllData() {
        
    }
    async getOneDataDetails() {
        
    }
    async postOneData() {
        
    }
}