import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    TextInput
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from "prop-types"
const { height, width } = Dimensions.get("window");

export default class ToDo extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isEditing: false,
            toDoValue: props.text
        };
        console.log('ToDo props 접근: ', props);
    }

    static PropTypes = {
        text : PropTypes.string.isRequired,
        isCompleted:PropTypes.bool.isRequired,
        deleteToDo : PropTypes.func.isRequired,
        id : PropTypes.string.isRequired,
        uncompleteToDo : PropTypes.func.isRequired,
        completeToDo : PropTypes.func.isRequired,
        updateToDo : PropTypes.func.isRequired
    };

    componentDidMount() {
        var year = new Date().getFullYear(); //Current Year
        var month = new Date().getMonth() + 1; //Current Month
        var day = new Date().getDay() + 1; //Current Day
        this.setState({
            date:
                year + '-' + month + '-' + day
        });
    }

    render() {
        const { isEditing, toDoValue } = this.state;
        const { text, id, deleteToDo, isCompleted }=this.props;
        return (
            <View style={styles.container}>
                <View style={styles.column}>
                <TouchableOpacity onPress={this._toggleComplete}>
                    <View style={[
                        styles.circle,
                        isCompleted ? styles.completedCircle : styles.uncompletedCircle
                    ]} />
                </TouchableOpacity>
                { isEditing ? (
                    <TextInput 
                        style={[
                            styles.text,
                            styles.input,
                            isCompleted ? styles.completedText : styles.uncompletedText]} 
                        value={toDoValue} 
                        multiline={true}
                        onChangeText={this._controlInput}
                        returnKeyType={"done"}
                        onBlur={this._finishEditing}
                        />
                ) : (
                    <Text 
                        style={[
                            styles.text,
                            isCompleted ? styles.completedText : styles.uncompletedText
                        ]}>
                            {text}
                        </Text>
                    )}
                </View>
                {isEditing ? (
                    <View style={styles.actions}>
                        <TouchableOpacity onPressOut={this._finishEditing}>
                            <View style={[styles.actionContainer, { paddingRight: 15 }]}>
                                <Icon name={'checkbox-outline'} size={30} />
                            </View>
                        </TouchableOpacity>
                    </View>
                ) : (
                        <View style={styles.actions}>
                            <TouchableOpacity onPressOut={this._startEditing}>
                                <View style={[styles.actionContainer, { paddingTop: 8 }]} >
                                    <Icon name={'pencil-outline'} size={25} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPressOut={() => deleteToDo(id)}>
                                <View style={styles.actionContainer}>
                                    <Icon name={'close-outline'} size={40} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
            </View>
        )
    }
    _toggleComplete = () => {
        const { isCompleted, uncompleteToDo, completeToDo, id } = this.props;
        if(isCompleted){
            uncompleteToDo(id)
        } else {
            completeToDo(id);
        }
    }
    _startEditing = () => {
        this.setState({
            isEditing: true
        });
    };
    _finishEditing = () => {
        const { toDoValue } = this.state;
        const { id, updateToDo } = this.props;
        updateToDo(id, toDoValue);
        this.setState({
            isEditing: false
        })
    }
    _controlInput = (text) => {
        this.setState({
            toDoValue : text
        })
    }
}

const styles = StyleSheet.create({
    container: {
        width: width - 50,
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 3,
        marginRight: 20,
        marginLeft: 10
    },
    text: {
        fontWeight: "600",
        fontSize: 20,
        marginVertical: 20
    },
    completedCircle: {
        borderColor: "#bbb"
    },
    uncompletedCircle: {
        borderColor: "#FA5858"
    },
    completedText: {
        color: "#bbb",
        textDecorationLine: "line-through"
    },
    uncompletedText: {
        color: "#353839"
    },
    column: {
        flexDirection: "row",
        alignItems: "center",
        width: width / 2
    },
    actions: {
        flexDirection: "row"
    },
    actionContainer: {
        marginVertical: 5,
        marginHorizontal: 5
    },
    input : {
        width: width/2,
        marginVertical:15,
        paddingBottom:5
    }
});