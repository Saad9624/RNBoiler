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
    unlike, fav,
    favourite,
    cursor,
    hen
} from '../../constants/images' ;
import AppStyles from '../../styles' ;
import Button from '../../components/button' ;

const HEIGHT = Dimensions.get('window').height ;
const WIDTH = Dimensions.get('window').width ;
class Home extends React.Component{

    state={
        from:'',
        route:'',
        header:"",
    }


    componentDidMount(){
        if(this.props.route.params){
            const from = this.props.route.params.from
            this.setState({header:from})
            
          
        }
      
    }


    state={
        data:[
            {title:'AD # 1', image:chicken , route:'Rates',like:false},
            {title:'AD # 2', image:eggs,like:false},
            {title:'AD # 2', image:tag,like:false},
            {title:'AD # 3', image:chick,like:false}
        ]
    }

    changeLikeIcon=(index) =>{
        //alert(index)
        let { data } = this.state;
        let targetPost = data[index];
    
        // Flip the 'liked' property of the targetPost
        targetPost.like = !targetPost.like;
    
        // Then update targetPost in 'posts'
        // You probably don't need the following line.
        // posts[index] = targetPost;
    
        // Then reset the 'state.posts' property
        this.setState({ data });
        }
    renderItem=({item,index})=>{
        return(
            <Card style={styles.card}>
                 <View
                   // onPress={()=> this.props.navigation.navigate(item.route)}
                    style={styles.touchcard}>
                        <View style={styles.likeView}>
                               <Text style={styles.text}>{item.title}</Text>
                               <TouchableOpacity
                               onPress ={()=>this.changeLikeIcon(index)}
                                >

                                       <Image style={styles.image} source={item.like ?fav : favourite}/>
                                 </TouchableOpacity>
                        </View>
                

                    <View style={styles.row}>

                            
                    

                            <View>

                                <Image style={{width:150,height:130}} source={hen}/>
                                {/* <View style={styles.row}>
                                    <Text >جنس</Text>
                                    <Text style={styles.blackText}>جنس</Text>

                                </View>

                                

                                <View style={styles.row}>
                                    <Text >ریٹ </Text>
                                    <Text style={styles.blackText}>ریٹ</Text>

                                </View>
                                <View style={styles.row}>
                                    <Text >عمر</Text>
                                    <Text style={styles.blackText}>عمر </Text>


                                </View>

                                <View style={styles.row}>
                                    <Text >فارم پتہ</Text>
                                    <Text style={styles.blackText}>فارم پتہ</Text>


                                </View>

                                 */}

                            </View>
                            <View>
                                <View style={styles.row}>
                                    <Text >نسل</Text>
                                    <Text style={styles.blackText}>نسل</Text>

                                </View>

                                <View style={styles.row}>
                                    <Text >وزن</Text>
                                    <Text style={styles.blackText}> وزن</Text>

                                </View>
                                <View style={styles.row}>
                                    <Text >تعداد</Text>
                                    <Text style={styles.blackText}>تعداد</Text>


                                </View>
                                <View style={styles.row}>
                                    <Text >تفصیل</Text>
                                    <Text style={styles.blackText}>تفصیل</Text>

                                </View>

                                

                            </View>
                    


                    </View>
                            <TouchableOpacity 
                            onPress={()=> this.props.navigation.navigate('ViewImages')}
                            >
                                    <Text style={[styles.text,{alignSelf:'center',fontSize:20,marginVertical:10}]}>View Full Add</Text>

                            </TouchableOpacity>
                    </View>

                    <View style={styles.bottomBtn}>
                             <Text style={styles.whiteText}>CALL NOW</Text>
                             <View style={styles.line}/>
                        {/* <Text style={styles.whiteText}>LIKE    </Text> */}
                        <View>
                                <Image
                            style={[styles.image,{tintColor:'white'}]}
                            source={cursor}
                            />
                        </View>
                    
                        <View style={styles.line}/>
                        <Image
                            style={styles.image}
                            source={like}
                            />
                                

                    </View>
            </Card>
        )
    }

    render(){
        const {from , route , header}= this.state ; 
        return(
            <View style={{flex:1,backgroundColor:colors.backColor}}>
                <Header title={header} back navigation={this.props.navigation} />

                <Text style={AppStyles.boldText}>دستیاب</Text>


                <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.FlatListStyles}
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={(key,index) => index.toString()}
                />


                <TouchableOpacity 
                    onPress={()=> this.props.navigation.navigate('GoldenMisriAdd',{
                        from
                    })}
                    style={styles.btn}>
                     <Text style={styles.title}>CREATE NEW POST</Text>

                </TouchableOpacity>
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
    line:{
        height:20,
        backgroundColor:'white',
        width:2
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
    image:{
        resizeMode:'contain',
        width:30,height:25
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
        backgroundColor:colors.red,
        width:'100%',
        height:60,
        borderBottomEndRadius:20,
        borderBottomStartRadius:20,
        flexDirection:'row'
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
    },
    btn:{
        width:'90%',
        borderRadius:5,
        alignSelf:'center',
        marginVertical:15,
        backgroundColor:colors.red,
        height:HEIGHT / 14 ,
        alignItems:'center',
        justifyContent:'center' 
    },
    title:{
        fontSize:17,
        color:'white',
        fontWeight:'bold'
    },
})