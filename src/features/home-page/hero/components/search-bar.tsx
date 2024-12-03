import { Input } from "@/components/ui/input";
import { Settings2 } from "lucide-react";

export default function SearchBar() {
  return (
    <>
      <Input placeholder="Search for a job" />
      <div className="flex justify-center items-center">
        <Settings2 />
      </div>
    </>
  );
}
