import React, { createContext, useReducer } from 'react';

export type State = {
  user: string | null;
  language: string;
};

export type Action =
  | { type: 'set-lang-to-english' }
  | { type: 'set-lang-to-german' };

export type ContextType = {
  globalState: State;
  dispatch: React.Dispatch<Action>;
};

const globalStateInit: State = {
    user: null,
    language: 'german'
};

const reducer = (state: State, action: Action) => {
    console.log('reducer executed!');

    if (action.type === 'set-lang-to-english')
      return { ...state, language: 'english' };
    if (action.type === 'set-lang-to-german')
      return { ...state, language: 'german' };

    console.log('action.type is unknown!');
    return state;
}

export const Context = createContext<ContextType>({
  globalState: globalStateInit,
  dispatch: () => undefined,
});

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [globalState, dispatch] = useReducer(reducer, globalStateInit);

  return (
    <Context.Provider value={{ globalState, dispatch }}>
        {children}
    </Context.Provider>
  );
};