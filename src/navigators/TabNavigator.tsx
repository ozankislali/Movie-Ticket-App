import React from "react";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import TicketScreen from "../screens/TicketScreen";
import UserAccountScreen from "../screens/UserAccountScreen";
import { COLORS, FONTSIZE, SPACING } from '../theme/theme';
import CustomIcon from "../components/CustomIcon";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

// Bottom tab navigator bileşeni
const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true, // Klavye açıkken tab bar'ı gizle
                headerShown: false, // Başlık çubuğunu gizle
                tabBarStyle: {
                    backgroundColor: COLORS.Black, // Tab bar'ın arka plan rengi
                    borderTopWidth: 0, // Tab bar'ın üst kenarında çizgiyi kaldır
                    height: SPACING.space_10 * 10, // Tab bar'ın yüksekliği
                },
            }}>
            {/* Home Screen */}
            <Tab.Screen
                name="Home" // Ekranın adı
                component={HomeScreen} // Hangi bileşenin ekranda gösterileceği
                options={{
                    tabBarShowLabel: false, // Tab bar'da yazı etiketini gizle
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <View style={[styles.activeTabBackground,
                            focused ? { backgroundColor: COLORS.Orange } : {},
                            ]}>
                                <MaterialCommunityIcons
                                    name="video" // Kullanılacak ikonun adı
                                    size={30} // İkon boyutu
                                    color="white" // İkon rengi
                                    style={{
                                        transform: [{ scaleX: -1 }] // İkonu yatay olarak ters çevir
                                    }}
                                />

                            </View>
                        );
                    },
                }}
            />
            {/* Search Screen */}
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <View style={[styles.activeTabBackground,
                            focused ? { backgroundColor: COLORS.Orange } : {},
                            ]}>
                                <MaterialCommunityIcons name="search-web" color={COLORS.White} size={FONTSIZE.size_30}
                                />
                            </View>
                        );
                    },
                }}
            />
            {/* Ticket Screen */}
            <Tab.Screen
                name="Ticket"
                component={TicketScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <View style={[styles.activeTabBackground,
                            focused ? { backgroundColor: COLORS.Orange } : {},
                            ]}>
                                <MaterialCommunityIcons name="ticket" color={COLORS.White} size={FONTSIZE.size_30}
                                />
                            </View>
                        );
                    },
                }}
            />
            {/* User Account Screen */}
            <Tab.Screen
                name="User"
                component={UserAccountScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <View style={[styles.activeTabBackground,
                            focused ? { backgroundColor: COLORS.Orange } : {},
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

// Stil tanımları
const styles = StyleSheet.create({
    activeTabBackground: {
        backgroundColor: COLORS.Black, // Aktif tab arka plan rengi
        padding: SPACING.space_18, // İçerik içi boşluk
        borderRadius: SPACING.space_18 * 10, // Kenar yarıçapı
    },
});

export default TabNavigator; // Bileşeni dışa aktar
