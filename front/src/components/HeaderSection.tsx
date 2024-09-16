import { PropsWithChildren } from "react";

export default function HeaderSection({ children }: PropsWithChildren) {
  return (
    <div className="px-10 space-x-10 py-4 bg-white shadow-md rounded-full flex items-center justify-evenly">
      {children}
    </div>
  );
}
