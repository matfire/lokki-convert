import { PropsWithChildren } from "react";

export default function PrimaryButton({ children }: PropsWithChildren) {
  return (
    <button className="px-4 py-2 bg-primary text-secondary rounded-full">
      {children}
    </button>
  );
}
