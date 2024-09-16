import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { DateTime } from "luxon";
import { useDebounce } from "@/hooks/useHooks.ts";
import { getCurrencies, convert } from "@/utils/client.ts";
import { Currency } from "@/utils/types.ts";
import ConversionSelector from "./ConversionSelector.tsx";

export default function Converter() {
  const [to, setTo] = useState<Currency>({
    code: "USD",
    name: "US Dollar",
    name_plural: "US dollars",
    symbol: "$",
  });
  const [from, setFrom] = useState<Currency>({
    code: "EUR",
    name_plural: "euros",
    name: "Euro",
    symbol: "€",
  });
  const [toValue, setToValue] = useState<number>();
  const [fromValue, setFromValue] = useState<number>(1);
  const [fromDropdownOpen, setFromDropdownOpen] = useState(false);
  const [toDropdownOpen, setToDropdownOpen] = useState(false);
  const debouncedFromValue = useDebounce(fromValue, 300);
  const [previousFromValue, setPreviousFromValue] = useState<number>();
  const [date, setDate] = useState(DateTime.now());

  const { data: currenciesData, isFetching } = useQuery({
    queryKey: ["currencies"],
    queryFn: getCurrencies,
  });
  const conversionMutation = useMutation({
    mutationFn: convert,
    mutationKey: ["conversion"],
    onSuccess: (data) => {
      setToValue(parseFloat(JSON.parse(data).value));
      setDate(DateTime.now());
    },
  });

  useEffect(() => {
    setPreviousFromValue(debouncedFromValue);
  }, [debouncedFromValue]);

  useEffect(() => {
    if (to && from && debouncedFromValue !== previousFromValue) {
      conversionMutation.mutate({
        to: to.code,
        from: from.code,
        value: fromValue,
      });
    }
  }, [
    to,
    from,
    fromValue,
    conversionMutation,
    debouncedFromValue,
    previousFromValue,
  ]);

  if (isFetching) {
    return <div>loading...</div>;
  }
  return (
    <div className="font-dm px-6">
      <div className="text-left">
        <p className="text-[#627574]">{fromValue} Euro =</p>
        <p className="text-[32px]">{toValue?.toFixed(2)} US Dollar</p>
        <p>Last updated {date.toFormat("DD, yyyy, HH:mm ZZZZ")}</p>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="grid grid-cols-2 gap-2">
          <input
            disabled={conversionMutation.isPending}
            className="p-1 border border-[#D2E2DE]"
            type="number"
            step="any"
            value={fromValue}
            onChange={(e) => setFromValue(parseFloat(e.target.value))}
          />
          <div className="relative w-full">
            <button
              disabled={conversionMutation.isPending}
              className="p-1 w-full border border-[#D2E2DE]"
              onClick={() => setFromDropdownOpen((old) => !old)}
            >
              {from.code}
            </button>
            <ConversionSelector
              isOpen={fromDropdownOpen}
              setIsOpen={setFromDropdownOpen}
              currencies={currenciesData.currencies}
              handleClick={(el) => {
                setFrom(el);
              }}
              value={from}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <span className="p-1 border border-[#D2E2DE] w-full">{toValue}</span>
          <div className="relative w-full">
            <button
              disabled={conversionMutation.isPending}
              className="p-1 w-full border border-[#D2E2DE]"
              onClick={() => setToDropdownOpen((old) => !old)}
            >
              {to.code}
            </button>
            <ConversionSelector
              isOpen={toDropdownOpen}
              setIsOpen={setToDropdownOpen}
              currencies={currenciesData.currencies}
              handleClick={(el) => {
                setTo(el);
              }}
              value={to}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
