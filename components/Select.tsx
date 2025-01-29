
import { SelectNative } from "@/components/ui/select-native";
import { useId } from "react";

interface Props {
    options: string[]; 
  }

export default function Select({ options }: Props) {
  const id = useId();
  return (
    <div className="space-y-2 block md:hidden w-full">
        
      <SelectNative id={id} defaultValue="" className="bg-black text-white border-yellow-200/50 h-14 focus:border-yellow-200/80 [&>option:active]:bg-neutral-950 [&>option]">
        <option value="" disabled className="bg-black focus:bg-red-50">
          Izberi storitev
        </option>
        {options.length > 0 ? (
          options.map((option, index) => (
            <option key={index} className="!bg-neutral-950 text-white hover:bg-neutral-900" value={option}>{option}</option>
          ))
        ) : (
          <option disabled>Ni možnosti</option>
        )}
      </SelectNative>
    </div>
  );
}
