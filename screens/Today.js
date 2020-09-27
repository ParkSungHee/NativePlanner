import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    Platform,
    ScrollView
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { TextInput } from 'react-native-gesture-handler';
import ToDo from "./ToDo"
import { v4 as uuid } from 'uuid'

const { height, width } = Dimensions.get("window");

export default class Today extends Component {
    constructor(props) {
        super(props);
        console.log('TodayScreen에서 navigation 접근: ', props);

        this.state = {
            newToDo : "",
            loadedToDos : false,
            toDos: {}
        }
        this.componentDidMount = () => {
            this._loadToDos();
        }

        this.loadData = async () => {
            try {
                const jsonTodo = await AsyncStorage.getItem('@todo');
                let json = JSON.parse(jsonTodo);
                alert(json.category + json.should + json.goal);
            } catch (e) {
                console.log(e);
            }
        };

        // navigation focus 가 변경되는 것을 감시하는 리스너 추가
        // focus가 변경될 때 호출 됨
        this.props.navigation.addListener('focus', () => {
            this.getDataFromStopWatch();
            //this.setState({})
            // setState()로 셋팅하면 될듯?
        });
    }

    getDataFromStopWatch = async () => {
        const stopWatchStopped = await AsyncStorage.getItem('stopWatchStopped');
        console.log('##########', stopWatchStopped);
    };

    render() {
        const { newToDo, loadedToDos,toDos } = this.state;
        console.log(toDos);
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <TextInput 
                        style={styles.input} 
                        placeholder={"New to do"}
                        value = { newToDo }
                        onChangeText={this._controlNewToDo}
                        placeholderTextColor={"#999"}
                        returnKeyType={"done"}
                        autoCorrect={false}
                        onSubmitEditing={this._addToDo}
                        />
                    <ScrollView contentContainerStyle={styles.toDos}>
                        {Object.values(toDos).map(toDo => <ToDo key={toDo.id} {...toDo} />)}
                    </ScrollView>
                </View>
            </View>
        );
    }
    _controlNewToDo = text => {
        this.setState({
            newToDo:text
        })
    }
    _loadToDos =() => {
        this.setState({
            loadedToDos: true
        })
    }   
    _addToDo = () => {
        const { newToDo } = this.state;
        if(newToDo !== ""){
            this.setState(prevState => {
                const ID = uuid();
                console.log(ID);
                const newToDoObject = {
                    [ID]:{
                        id : ID,
                        isCompleted:false,
                        text: newToDo,
                        createdAt : Date.now()
                    }
                };
                const newState = {
                    ...prevState,
                    newToDo : "",
                    toDos : {
                        ...prevState.toDos, 
                        ...newToDoObject
                    }
                }
                return {...newState};
            })
            
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    card: {
        flex : 1, 
        width : width - 40,
        borderColor : '#FA5858',
        borderWidth:1,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        marginTop : 20,
        marginLeft:20,
        ...Platform.select({
            ios : {
                shadowColor: "rgb(50,50,50)",
                shadowOpacity : 0.5,
                shadowRadius:10,
                shadowOffset:{
                    height:-1,
                    width:0
                }
            },
            android : {
                elevation : 3
            }
        })
    },
    input : {
        padding:17,
        borderBottomColor: "#bbb",
        borderBottomWidth:1,
        fontSize:20
    },
    toDos : {
        alignItems:"center"
    }
});