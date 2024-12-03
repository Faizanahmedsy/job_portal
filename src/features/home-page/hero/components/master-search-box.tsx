import AIAssistantBtn from "./ai-assistant-btn";
import CountrySelect from "./country-select";
import SearchBar from "./search-bar";

export default function MasterSearchBox() {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-blue-900 h-44">
      <div className="flex justify-center items-end gap-10 h-full py-10 px-32">
        <div>
          <CountrySelect />
        </div>
        <div className="w-[45%] flex gap-6 justify-center">
          <SearchBar />
        </div>
        <div>
          <AIAssistantBtn />
        </div>
      </div>
    </div>
  );
}
