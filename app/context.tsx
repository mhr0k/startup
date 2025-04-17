'use client';

import { createContext, useReducer, useContext } from 'react';

type Auth = {
  loggedIn: boolean;
  user: Object | null;
};

type Action =
  | { type: 'LOGIN'; payload: { user: Auth['user'] } }
  | { type: 'LOGOUT' };

function authReducer(state: Auth, action: Action): Auth {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        loggedIn: true,
        user: action.payload.user,
      };
    case 'LOGOUT':
      return { loggedIn: false, user: null };
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
