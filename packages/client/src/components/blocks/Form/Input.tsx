import React from "react";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  HTMLInputElement;

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  hideLabel?: boolean;
}

export const Input = React.forwardRef<InputProps, Props>(function input(
  { name, label, hideLabel = false, ...rest },
  passedRef,
) {
  const inputClasses = "w-full text-black mb-2 p-2 rounded";

  return (
    <>
      <label htmlFor={name} className={hideLabel ? "hidden" : ""}>
        {label}
      </label>
      <input
        {...rest}
        name={name}
        ref={passedRef || null}
        className={inputClasses}
      />
    </>
  );
});
