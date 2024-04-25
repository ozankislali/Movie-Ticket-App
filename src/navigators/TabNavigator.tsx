import React from "react";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import TicketScreen from "../screens/TicketScreen";
import UserAccountScreen from "../screens/UserAccountScreen";
import {COLORS,FONTSIZE,SPACING} from '../theme/theme';
import CustomIcon from "../components/CustomIcon";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab= createBottomTabNavigator();

const TabNavigator = () => {
    return(
       <Tab.Navigator
            screenOptions={{
               tabBarHideOnKeyboard:true,
               headerShown:false,
               tabBarStyle:{
                backgroundColor:COLORS.Black,
                borderTopWidth:0,
                height:SPACING.space_10 * 10,
               },
            }}>
            <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
                tabBarShowLabel:false,
                tabBarIcon:({focused,color,size}) =>{
                    return ( 
                        <View style={[styles.activeTabBackground,
                        focused ? {backgroundColor:COLORS.Orange}:{},
                        ]}>
                            <MaterialCommunityIcons
                            name="video"
                            size={30}
                            color="white"
                            style={{transform:[{scaleX:-1
                            }]}}
                            />
                       
                        </View>
                    );
                },
            }} 
            />
            <Tab.Screen 
            name="Search" 
            component={SearchScreen} 
            options={{
                tabBarShowLabel:false,
                tabBarIcon:({focused,color,size}) =>{
                    return(
                        <View style={[styles.activeTabBackground,
                            focused ? {backgroundColor:COLORS.Orange}:{},
                            ]}>
                            <MaterialCommunityIcons name="search-web" color={COLORS.White} size={FONTSIZE.size_30}
                            />
                        </View>
                    );
                },
            }} 
            />
            <Tab.Screen 
            name="Ticket" 
            component={TicketScreen} 
            options={{
                tabBarShowLabel:false,
                tabBarIcon:({focused,color,size}) =>{
                    return ( 
                        <View style={[styles.activeTabBackground,
                            focused ? {backgroundColor:COLORS.Orange}:{},
                            ]}>
                            <MaterialCommunityIcons name="ticket" color={COLORS.White} size={FONTSIZE.size_30} 
                            />
                        </View>
                    );
                },
            }} 
            />
            <Tab.Screen name="User" component={UserAccountScreen} options={{
                tabBarShowLabel:false,
                tabBarIcon:({focused,color,size}) =>{
                    return( 
                        <View style={[styles.activeTabBackground,
                            focused ? {backgroundColor:COLORS.Orange}:{},
                            ]}>
                        <MaterialCommunityIcons name="account" color={COLORS.White} size={FONTSIZE.size_30} 
                        />
                        </View>
                    );
                },
            }} 
        />
      </Tab.Navigator>
    );
};

const styles= StyleSheet.create({
    activeTabBackground:{
        backgroundColor:COLORS.Black,
        padding:SPACING.space_18,
        borderRadius: SPACING.space_18 * 10,
    },
});

export default TabNavigator;