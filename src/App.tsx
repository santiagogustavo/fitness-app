import 'react-native-gesture-handler';

import React, { useReducer, useEffect, useMemo } from 'react';
import { AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Splash, SignIn, Dashboard, SignUp } from '@/views';

import { AuthContext } from '@/Contexts';

const Stack = createStackNavigator();

export default function App() {
  const [state, dispatch] = useReducer(
    function (prevState: any, action: any) {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
        default:
          return { ...prevState };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('access_token');
      } catch (e) {
        // Restoring token failed
      }

      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async (data: any) => {
        try {
          await AsyncStorage.setItem('access_token', data.access_token);
          dispatch({ type: 'SIGN_IN', token: data.access_token });
        } catch (e) {
          // Set token failed
        }
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('access_token');
          dispatch({ type: 'SIGN_OUT' });
        } catch (e) {
          // Remove token failed
        }
      },
      signUp: async (data: any) => {
        try {
          await AsyncStorage.setItem('access_token', data.access_token);
          dispatch({ type: 'SIGN_IN', token: data.access_token });
        } catch (e) {
          // Set token failed
        }
      },
    }),
    [],
  );

  return (
    <NavigationContainer>
      <AuthContext.Provider value={authContext}>
        <Stack.Navigator headerMode="none">
          {!state.userToken ? (
            <>
              <Stack.Screen name="Splash" component={Splash} />
              <Stack.Screen name="SignIn" component={SignIn} />
              <Stack.Screen name="SignUp" component={SignUp} />
            </>
          ) : (
            <>
              <Stack.Screen name="Dashboard" component={Dashboard} />
            </>
          )}
        </Stack.Navigator>
      </AuthContext.Provider>
    </NavigationContainer>
  );
}
