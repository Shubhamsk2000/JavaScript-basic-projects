import { useId } from "react";
export default function InputBox({
  label,
  className = "",
  amount,
  onAmountChange,
  currencyOptions = [],
  selectCurrency = "usd",
  onCurrencyChange,
}) {
  const amountId = useId();
  return (
    <div className={`${className} border-2 bg-white rounded-md flex p-4`}>
      <div className="w-1/2">
        <label htmlFor={amountId}>{label}</label>
        <input
          id={amountId}
          type="number"
          value={amount}
          placeholder="Enter Amount"
          className="p-2 w-full border-2 border-black"
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex text-right justify-end flex-wrap">
        <p className="w-full">Currency Type</p>
        <select
          value={selectCurrency}
          className="cursor-pointer "
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
