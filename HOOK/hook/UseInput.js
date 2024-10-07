import { useState } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChangeText = (newValue) => {
    setValue(newValue);
  };

  return { value, onChangeText };
}

export default useInput;
