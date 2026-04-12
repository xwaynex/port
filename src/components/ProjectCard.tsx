import { iProject } from "@/type";
import Image from "next/image";

const ProjectCard: React.FC<{
  project: iProject;
  setShowDetails: (id: null | number) => void;
}> = ({ project: { name, image_path, id }, setShowDetails }) => {
  return (
    <div className="cursor-pointer group" onClick={() => setShowDetails(id)}>
      <div className="overflow-hidden rounded-lg">
        <Image
          src={image_path}
          alt={name}
          width={400}
          height={200}
          className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <p className="mt-2 text-center text-sm font-medium">{name}</p>
    </div>
  );
};

export default ProjectCard;
