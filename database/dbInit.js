import DatabaseConnection from ".";
const db = DatabaseConnection.getConnection();

export default class DatabaseInit {
    constructor(){        
        this.InitDB();
    }

    InitDB(){
        const sql = [
            "DROP TABLE IF EXISTS alunos;",
            `CREATE TABLE IF NOT EXISTS alunos (
                id integer primary key autoincrement,
                name varchar(255)
            );`,
            "insert into alunos values (null,'christian');"
        ];
        db.transaction((command)=>{
            sql.forEach((code)=>{
                command.executeSql(code);
            })
        },
        (error)=>console.log(error),
        ()=>console.log("Banco de dados inicializado !!!"))
    }
}