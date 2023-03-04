import React, { useState } from "react";
import Select from "react-select";

export default function Ddtest() {
  const options = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      <Select
      className="gender"
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: "white",
            primary: "var(--light)",
            // neutral80: "black",
          },
        })}
      />
    </>
  );
}
