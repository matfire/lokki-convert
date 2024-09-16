import { useEffect, useRef } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Currency } from "../utils/types.ts";
import Check from "@/icons/Check.tsx";
import Flash from "@/icons/Flash.tsx";

interface ConversionSelectorProps {
  currencies: Array<Currency>;
  handleClick: (el: Currency) => void;
  value: Currency;
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}

export default function ConversionSelector({
  currencies,
  handleClick,
  value,
  isOpen,
  setIsOpen,
}: ConversionSelectorProps) {
  const element = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onClickOutside = (ev: MouseEvent) => {
      if (element.current && !element.current.contains(ev.target as Node)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("mousedown", onClickOutside);
    return () => {
      window.removeEventListener("mousedown", onClickOutside);
    };
  }, [setIsOpen]);

  if (!isOpen) return null;
  return (
    <div
      ref={element}
      className="absolute -top-44 bg-white rounded-md min-w-[172px] min-h-[176px]"
    >
      <TabGroup className="h-full">
        <TabList className="p-2 grid grid-cols-2 text-[10px]">
          <Tab className="data-[selected]:bg-primary rounded-[100px] data-[selected]:text-white data-[selected]:px-0.5 data-[seleted]:py-2">
            Currencies
          </Tab>
          <Tab className="data-[selected]:bg-primary rounded-[100px] data-[selected]:text-white data-[selected]:px-0.5 data-[seleted]:py-2 flex justify-center items-center space-x-1">
            Crypto
            <Flash className="w-2 h-2 fill-primary data-[selected]:fill-white" />
          </Tab>
        </TabList>
        <TabPanels className="h-full">
          <TabPanel className="max-h-44 overflow-y-auto flex flex-col">
            {currencies.map((e) => {
              return (
                <button
                  key={`${e.symbol}-${e.code}`}
                  className="w-full text-sm flex items-center justify-between p-2"
                  onClick={() => {
                    setIsOpen(false);
                    handleClick(e);
                  }}
                >
                  {e.name} {e.code === value.code && <Check />}
                </button>
              );
            })}
          </TabPanel>
          <TabPanel className="flex flex-col items-center h-full justify-between pb-4">
            <div>
              <p className="font-semibold text-[#26211A]">Crypto currencies</p>
              <p className="text-[#627574] text-xs">
                upgrade to premium to convert crypto currencies
              </p>
            </div>
            <button className="px-3 py-2 bg-primary text-secondary rounded-full flex justify-between items-center text-xs">
              <Flash />
              Upgrade to premium
            </button>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}
