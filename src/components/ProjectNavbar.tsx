import { Category } from "@/type";

const NavItem: React.FC<{
  value: Category | "all";
  handleFilterCategory:  (category: Category | "all") => void;
  active: string
}> = ({ value, handleFilterCategory, active }) => {
// let className = 

// if(active === value ) className += " text-green";

  return (
    <li
      className={`cursor-pointer hover:text-green capitalize ${active === value ? "text-green" : "" }`}
      onClick={() => handleFilterCategory(value)}
    >
      {value}
    </li>
  );
};

const ProjectNavbar: React.FC<{handleFilterCategory:  (category: Category | "all") => void, active: string;}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="next" {...props} />
      <NavItem value="express" {...props} />
      <NavItem value="typescript" {...props} />
      <NavItem value="mongo" {...props} />
    </div>
  );
};

export default ProjectNavbar;
