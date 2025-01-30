import { SelectNative } from "@/components/ui/select-native";
import { useId, useState } from "react";
import { ChangeEvent } from "react";

interface Props {
  options: string[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void; // Popravljeno ime propsa
}

export default function Select({ options, onChange }: Props) {
  const id = useId();
  const [selectedValue, setSelectedValue] = useState("1");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    onChange(event); // Pravilno uporabljeno ime propsa
  };

  return (
    <div className="space-y-2 block  w-full border border-yellow-200/[0.6] ]">
      <SelectNative
        id={id}
        value={selectedValue}
        onChange={handleChange} // Pravilno uporabljeno onChange
        className="bg-black text-white border w-full h-14 focus:border-red-200/[0.9] [&>option:active]:bg-neutral-950 [&>option:active]:border-red-200/[0.9] [&>option]"
      >
        <option value="" disabled className="bg-black ">
          Izberi storitev
        </option>
        {options.length > 0 ? (
          options.map((option, index) => (
            <option
              key={index}
              className="!bg-neutral-950 text-white "
              value={index+1} // Pravilno nastavljena vrednost
              
            >
              {option}
            </option>
          ))
        ) : (
          <option disabled>Ni možnosti</option>
        )}
      </SelectNative>
    </div>
  );
}
