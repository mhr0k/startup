'use client';

import { createContext, useReducer, useContext, useEffect } from 'react';

type Auth = {
  loggedIn: boolean;
  user: object | null;
};

type Action =
  | { type: 'LOGIN'; payload: { user: Auth['user'] } }
  | { type: 'LOGOUT' };

function authReducer(state: Auth, action: Action): Auth {
  let newState;
  switch (action.type) {
    case 'LOGIN':
      newState = {
        ...state,
        loggedIn: true,
        user: action.payload.user,
      };
      localStorage.setItem('auth', JSON.stringify(newState));
      return newState;
    case 'LOGOUT':
      newState = { loggedIn: false, user: null };
      localStorage.removeItem('auth');
      return newState;
    default:
      return state;
  }
}

const AuthContext = createContext<{
  state: Auth;
  dispatch: React.Dispatch<Action>;
} | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, {
    loggedIn: false,
    user: null,
  });

  useEffect(() => {
    const savedAuth = localStorage.getItem('auth');
    if (savedAuth) {
      dispatch({
        type: 'LOGIN',
        payload: { user: JSON.parse(savedAuth).user },
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
