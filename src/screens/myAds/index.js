import { Card } from 'native-base';
import React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';
import Header from '../../components/header' ;
import colors from '../../constants/colors';
import {

    eggs,
    chick,
    chicken,tag,
    like,
    unlike
} from '../../constants/images' ;
import AppStyles from '../../styles' ;

const HEIGHT = Dimensions.get('window').height ;
const WIDTH = Dimensions.get('window').width ;
class Home extends React.Component{


    state={
        data:[
            {title:'AD # 1', image:chicken , route:'Rates',like:false,count:'10 likes',clickedCount:'post click :#10'},
            {title:'AD # 2', image:eggs,like:false,count:'20 likes',clickedCount:'post click :#12'},
        ]
    }

    renderItem=({item,index})=>{
        return(
            <Card style={styles.card}>
                 <View
                   // onPress={()=> this.props.navigation.navigate(item.route)}
                    style={styles.touchcard}>
                        <View style={styles.likeView}>
                            <View>
                                 <Text style={styles.text}>{item.title}</Text>
                                 <Text style={[styles.text,{marginVertical:0}]}>{item.clickedCount}</Text>
                            </View>
                               
                               <TouchableOpacity
                               style={{alignItems:'center'}}
                              // onPress ={()=>this.changeLikeIcon(index)}
                                >

                                       <Image style={styles.image} source={like}/>
                                       <Text style={[styles.text,{marginTop:-10}]}>{item.count}</Text>
                                 </TouchableOpacity>
                        </View>
                

                    <View style={styles.row}>

                            <View>
                                <View style={styles.row}>
                                    <Text >Weight</Text>
                                    <Text style={styles.blackText}>1134</Text>

                                </View>

                                <View style={styles.row}>
                                    <Text >Type</Text>
                                    <Text style={styles.blackText}>Lorem</Text>

                                </View>

                                <View style={styles.row}>
                                    <Text >rate </Text>
                                    <Text style={styles.blackText}>788</Text>

                                </View>
                                <View style={styles.row}>
                                    <Text >less on cash</Text>
                                    <Text style={styles.blackText}>2122</Text>

                                </View>

                                <View style={styles.row}>
                                    <Text >Address</Text>
                                    <Text style={styles.blackText}>4208</Text>

                                </View>

                                
                                <View style={styles.row}>
                                    <Text >city</Text>
                                    <Text style={styles.blackText}>Rome</Text>

                                </View>

                            </View>
                    

                            <View>
                                <View style={styles.row}>
                                    <Text >Weight</Text>
                                    <Text style={styles.blackText}>1134</Text>

                                </View>

                                <View style={styles.row}>
                                    <Text >Type</Text>
                                    <Text style={styles.blackText}>Lorem</Text>

                                </View>

                                <View style={styles.row}>
                                    <Text >rate </Text>
                                    <Text style={styles.blackText}>788</Text>

                                </View>
                                <View style={styles.row}>
                                    <Text >less on cash</Text>
                                    <Text style={styles.blackText}>2122</Text>

                                </View>

                                <View style={styles.row}>
                                    <Text >Address</Text>
                                    <Text style={styles.blackText}>4208</Text>

                                </View>

                                
                                <View style={styles.row}>
                                    <Text >city</Text>
                                    <Text style={styles.blackText}>Rome</Text>

                                </View>

                            </View>
                    


                    </View>
                    </View>
                    <View style={styles.bottomBtn}>
                        <TouchableOpacity>
                              <Text style={styles.redtext}>EDIT   </Text>

                        </TouchableOpacity>
                       
                        <View style={styles.line}/>

                        <TouchableOpacity>
                                <Text style={styles.redtext}>DELETE</Text>

                        </TouchableOpacity>

                    </View>
            </Card>
        )
    }

    render(){
        return(
            <View style={{flex:1,backgroundColor:colors.backColor}}>
                <Header title="میرے اشتھارات"  navigation={this.props.navigation} />


                <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.FlatListStyles}
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={(key,index) => index.toString()}
                />

                
            </View>
        )
    }
}
export default Home ;    

const styles = StyleSheet.create({
    card:{
        width: WIDTH / 1.1  ,
        height:HEIGHT / 2.2,
        borderRadius:20,
        marginVertical:5,
        elevation:5,
        marginHorizontal:10,
        marginVertical:5,
        alignSelf:'center'
    },
    FlatListStyles:{
        marginHorizontal:10
    },
    text:{
        color:colors.red,
        fontWeight:'bold',
        fontSize:12,
        marginVertical:10
    },
    redtext:{
        color:colors.red,
        fontWeight:'bold',
        fontSize:15,
    },
    line:{
        height:20,
        backgroundColor:'grey',
        width:2
    },
    image:{
        resizeMode:'contain',
        width:40,height:45
    },
    touchcard:{
        marginVertical:5,
        marginHorizontal:10,
        marginVertical:5
    },
    bottomBtn:{
        bottom:0,
        position:'absolute',
        alignItems:'center',
        justifyContent:'space-around',
        width:'90%',
        height:60,
        borderBottomEndRadius:20,
        borderBottomStartRadius:20,
        flexDirection:'row',
        borderTopWidth:1,
        borderTopColor:'grey',
        alignSelf:'center'
    },
    whiteText:{
        color:'white'
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:5
    },
    blackText:{
        marginLeft:10,
        color:colors.grey
    },
    likeView:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    immage:{
        width:30,
        height:30,
        resizeMode:'contain'
    }
})