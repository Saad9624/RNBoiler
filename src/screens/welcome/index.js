import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import AppStyles from '../../styles';
import Button from '../../components/button' ;
import TextInput from '../../components/textInput' ;
import colors from '../../constants/colors';
import{
    phone,logo
} from '../../constants/images' ;

class Home extends React.Component{

    render(){
        return(
            <View style={{flex:1,backgroundColor:colors.backColor}}>
               <Image style={AppStyles.imageLogo} source={logo}/>
                <View style={AppStyles.line}></View>
                <Text style={AppStyles.boldText}>Welcome</Text>

                <TextInput
                length={11}
                keyboardType={'numeric'}
                image={phone} placeholder="Phone Number"/>
                <Button 
                onPress={()=> this.props.navigation.navigate('Verfication')}
                red
                title="SIGN UP"/>  

                <View style={AppStyles.bottomView}>
                    <Text style={AppStyles.smallText}>Already Have an account?</Text>
                    <Button title="LOGIN"/>  

                </View>  
            </View>
        )
    }
}
export default Home ;                   