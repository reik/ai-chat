import React, { createContext } from "react";

type FormContextProps = {
  size: number;
  color: string;
};

const initialFormContext: FormContextProps = {
  size: 12,
  color: "black",
};

const FormContext = createContext<FormContextProps>(initialFormContext);

export const FormContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <FormContext.Provider value={initialFormContext}>
      {children}
    </FormContext.Provider>
  );
};
