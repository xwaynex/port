"use client";
const Navbar = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => {
  const tabs: string[] = ["About", "Resume", "Projects"];

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-4 text-green border-green nd:text-2xl">{activeTab}</span>
      <div className="flex space-x-3 text-lg">
        {tabs
          .filter((tab) => tab !== activeTab)
          .map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className="hover:text-green">
              {tab}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Navbar;
