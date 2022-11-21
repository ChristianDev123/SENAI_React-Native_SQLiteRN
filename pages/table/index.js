import { ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Table, Row, Rows } from 'react-native-table-component';
import { useEffect, useState } from "react";
import AlunoController from "../../controller/alunoController";

export default function TablePage({navigation}){
    const [reload, setReload] = useState(false);
    const tableHead = ["id", "Name"];
    const [tableBody, setTableBody] = useState([]);
 
    useEffect(()=>{
        getAllAluno();
        navigation.addListener('focus',()=>setReload(!reload));
    },[reload ,navigation])
 
    function getAllAluno(){
        AlunoController.findAll()
        .then(({_array})=>setTableBody(_array.map(({id, name})=>[id,name])))
    }

    return(
        <ScrollView style={{flex:1}}>
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>
                        Tabela de Alunos
                    </Text>
                </View>
                <View style={styles.wrapperBtn}>
                    <TouchableOpacity style={styles.btnAdd} onPress={()=>navigation.navigate("actionspage")}>
                        <Text style={styles.textBtnAdd}>
                            +
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.wrapper}>
                    <Table borderStyle={{borderWidth: 2}}>
                        <Row data={tableHead} textStyle={styles.textHeader}/>
                        <Rows data={tableBody} textStyle={styles.text}/>
                    </Table>
                </View>
                <StatusBar/>
            </View>
        </ScrollView>
    )
}