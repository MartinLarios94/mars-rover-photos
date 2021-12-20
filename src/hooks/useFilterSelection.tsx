import { useState } from "react";
export const useFilterSelection = () => {
  const [selectedValue, setSelectedValue] = useState({
    rover: "curiosity",
    date: "earth",
    camera: "",
    solValue: "1000",
    dateValue: new Date().toISOString(),
    isFavorite: false,
    page: 1
  });

  const [isChange, setIsChange] = useState(false);

  const onChange = (
    value: string | boolean | number,
    field: keyof typeof selectedValue
  ) => {
    setSelectedValue({
      ...selectedValue,
      [field]: value,
    });
    setIsChange(true);
  };

  return {
    selectedValue,
    ...selectedValue,
    isChange,
    onChange,
    setSelectedValue,
  };
};
