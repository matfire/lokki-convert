import HeaderSection from "./HeaderSection.tsx";
import Chevron from "@/icons/Chevron.tsx";

export default function Header() {
  return (
    <div className="flex justify-between items-center px-10 text-3xl mt-10">
      <h1 className="font-playfair text-secondary">Convert.</h1>
      <div className="space-x-4 flex font-dm text-sm">
        <HeaderSection>
          <button className="flex items-center gap-1">
            Features <Chevron />
          </button>
          <a href="#">Pricing</a>
          <button className="flex items-center gap-1">
            Use cases <Chevron />
          </button>
          <button className="flex items-center gap-1">
            Ressources <Chevron />
          </button>
        </HeaderSection>
        <HeaderSection>
          <a href="#">Login</a>
          <a
            href="#"
            className="px-4 py-2 bg-primary text-secondary rounded-full"
          >
            Sign up
          </a>
        </HeaderSection>
      </div>
    </div>
  );
}
