import { iService } from "@/type";

const ServiceCard: React.FC<{ service: iService }> = ({
  service: { Icon, about, title, tags },
}) => {
  return (
    <div className="group flex flex-col h-full rounded-xl border border-gray-200 dark:border-dark-200 bg-white dark:bg-dark-500 overflow-hidden transition-all duration-300 hover:border-green dark:hover:border-green hover:shadow-custom-light">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-green to-end">
        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
          <Icon className="text-white text-lg" />
        </div>
        <h4 className="font-bold text-white text-sm leading-tight">{title}</h4>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-grow px-4 py-3 gap-3">
        <p
          className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-grow"
          dangerouslySetInnerHTML={{ __html: about }}
        />
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-dark-200 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-dark-500"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
