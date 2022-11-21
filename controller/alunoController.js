import DatabaseConnection  from '../database';
const db = DatabaseConnection.getConnection();

export default class AlunoController{
    static async addData(aluno){
        return await new Promise((resolve, reject)=>db.transaction((command)=>command.executeSql(`insert into alunos values (null, '${aluno.name}');`,[],(db, { insertId })=>resolve(insertId))));
    }

    static async deleteById(aluno){
        return await new Promise((resolve, reject)=>db.transaction((command)=>command.executeSql(`delete from alunos where id = ${aluno.id};`,[],(db, { rows } )=>resolve(rows)),(error)=>console.log(error)));
    }

    static async findAll(){
        return new Promise((resolve, reject)=> db.transaction((command)=>command.executeSql("select * from alunos;",[],(db,{ rows })=>resolve(rows)))) 
    }
}