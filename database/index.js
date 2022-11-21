import * as SQLite from 'expo-sqlite'

export default class DatabaseConnection {
    static getConnection(){
        return SQLite.openDatabase("dbTeste.db")
    }
}