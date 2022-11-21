import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        height:800
    },
    wrapper:{
        flex:1,
        width:'90%'
    },
    wrapperBtn:{
        flex:1
    },
    table:{
    },
    textHeader:{
        color:"#8A0531",
        fontSize:20,
        fontWeight:"600",
        paddingHorizontal:5
    },
    text:{
        
    },
    title:{
        fontSize:30,
        fontWeight:"600",
        color:"#8A0531",
        textAlign: "center",
        marginVertical:50
    },
    btnAdd:{
        backgroundColor:"rgba(255,0,0,0.5)",
        width:50,
        height:50,
        borderWidth:2,
        borderColor:"#8A0531",
        borderRadius:100,
        alignItems:"center",
        justifyContent:"center"
    },
    textBtnAdd:{
        color:"#fff",
        fontSize:35
    }
});