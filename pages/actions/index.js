import { useState } from "react";
import { ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import AlunoController from "../../controller/alunoController";
import Aluno from "../../models/aluno";

export default function ActionsPage({navigation}){
    const [alunoData, setAlunoData] = useState({name:"", idDel:""});
    const [idNewAluno, setIdNewAluno] = useState(0);
    const [alunoDel, setAlunoDel] = useState(false);
    
    function sendNewAluno(){
        const { name } = alunoData;
        const aluno = new Aluno({name});
        AlunoController.addData(aluno)
        .then((res)=>setIdNewAluno(res));
    }

    function removeAluno(){
        const { idDel } = alunoData;
        const aluno = new Aluno({ id:idDel });
        AlunoController.deleteById(aluno)
        .then((res)=>setAlunoData(res != null));
    }

    return(
        <ScrollView style={{flex:1}}>
            <Text style={styles.title}>Ações de Controle</Text>
            <View style={styles.section}>
                <Text style={styles.titleSection}>Adicionar Aluno</Text>
                <View style={styles.wrapperInput}>
                    <Text style={styles.texts}>Nome do Aluno</Text>
                    <TextInput style={styles.inputs} onChangeText={(text)=>setAlunoData({...alunoData, name:text})} />
                </View>
                <View style={styles.wrapperInput}>
                    <TouchableOpacity style={styles.actionBtn} onPress={()=>sendNewAluno()}>
                        <Text style={styles.textActionBtn}>
                            Enviar
                        </Text>
                    </TouchableOpacity>
                </View>
                {idNewAluno !== 0 && <Text>Novo aluno adicionado com id {idNewAluno}</Text>}
            </View>
            <View style={styles.section}>
                <Text style={styles.titleSection}>Deletar Aluno</Text>
                <View style={styles.wrapperInput}>
                    <Text style={styles.texts}>Id do aluno</Text>
                    <TextInput keyboardType="numeric" style={styles.inputs} onChangeText={(text)=>setAlunoData({...alunoData, idDel:text})}/>
                </View>
                <View style={styles.wrapperInput}>
                    <TouchableOpacity onPress={()=>removeAluno()} style={styles.actionBtn}>
                        <Text style={styles.textActionBtn}>
                            Deletar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.section}>
                <TouchableOpacity style={styles.btnBack} onPress={()=>navigation.navigate("table")}>
                    <Text style={styles.textBtnBack}>
                        {"<"}
                    </Text>
                </TouchableOpacity>
            </View>
            <StatusBar/>
        </ScrollView>
    );
}