import * as React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Pages/Home/Home';
import ListaCommunity from './Pages/Community/Community';
import ListaFrontEnd from './Pages/FrontEnd/FrontEnd';
import ListaInvite from './Pages/Invite/Invite';
import { CommonActions } from '@react-navigation/native';
import { Text, BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
;
const Tab = createBottomTabNavigator();


const Salvo = () => {
    return (
        <View>
            <Text>Salvo</Text>
        </View>
    );
}

export default function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: true,
            }}
            tabBar={({ navigation, state, descriptors, insets }) => (
                <BottomNavigation.Bar
                    navigationState={state}
                    safeAreaInsets={insets}
                    onTabPress={({ route, preventDefault }) => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (event.defaultPrevented) {
                            preventDefault();
                        } else {
                            navigation.dispatch({
                                ...CommonActions.navigate(route.name, route.params),
                                target: state.key,
                            });
                        }
                    }}
                    renderIcon={({ route, focused, color }) => {
                        const { options } = descriptors[route.key];
                        if (options.tabBarIcon) {
                            return options.tabBarIcon({ focused, color, size: 24 });
                        }

                        return null;
                    }}
                    getLabelText={({ route }) => {
                        const { options } = descriptors[route.key];
                        const label =
                            options.tabBarLabel !== undefined
                                ? options.tabBarLabel
                                : options.title !== undefined
                                    ? options.title
                                    : route.title;

                        return label;
                    }}

                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', }}
                />
            )}
        >
            <Tab.Screen

                name="Geral" component={Home}
                options={{
                    tabBarLabel: 'Geral',
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name="home" size={size} color={color} ></Icon>;
                    },

                }}
            />
            <Tab.Screen
                name="Front-End" component={ListaFrontEnd}
                options={{
                    tabBarLabel: 'Front-End',
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name="computer" size={size} color={color} />;
                    },
                }}
            />
            <Tab.Screen
                name="Comunidades" component={ListaCommunity}
                options={{
                    tabBarLabel: 'Comunidades',
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name="groups" size={size} color={color} />;
                    },
                }}
            />
            <Tab.Screen
                name="Convida" component={ListaInvite}
                options={{
                    tabBarLabel: 'Convida',
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name="star" size={size} color={color} />;
                    },
                }}
            />
            <Tab.Screen
                name="Salvos" component={Salvo}
                options={{
                    tabBarLabel: 'Salvos',
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name="bookmark" size={size} color={color} />;
                    },
                }}
            />
        </Tab.Navigator>
    );
}

