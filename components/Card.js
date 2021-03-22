import React from 'react';
import { View } from "react-native";
import {globalStyle} from '../Styles'

function Card({children}) {
    return (
        <View style={[globalStyle.backgroun, {alignItems:'center',justifyContent:'center',}]}>
            <View style={globalStyle.containerCenter}>
                {children}
            </View>
            
        </View>

    );
}

export default Card;