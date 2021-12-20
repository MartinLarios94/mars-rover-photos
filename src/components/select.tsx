import React from "react";

interface SelectProps {
  value: string;
  name: string;
}

export const SelectOptions: React.FC<SelectProps> = ({ value, name }) => {
  return <option value={value}>{name}</option>;
};
