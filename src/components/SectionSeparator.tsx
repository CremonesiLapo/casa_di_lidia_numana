import { BASE } from "@/lib/constants";

export default function SectionSeparator() {
  return (
    <div className="flex justify-center py-8">
      <img
        src={`${BASE}/assets/fish-separator-1200x107.jpg`}
        alt=""
        className="max-w-full h-auto"
      />
    </div>
  );
}
