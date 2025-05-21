import { useNavigate } from 'react-router-dom';
import GSpaceTag from './GspaceTag';

const GSpaceCard = ({ title, description, tags, slug }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/gspace/${slug}`);
  };

  return (
    <div
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') handleClick();
      }}
      className="max-w-sm rounded-xl overflow-hidden shadow-md cursor-pointer transform hover:scale-105 transition duration-300 bg-[#E1FFBB]"
    >
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-[#001A6E]">{title}</h2>
        <p className="text-[#074799] text-base line-clamp-3">{description}</p>
      </div>
      <div className="px-6 pt-2 pb-4 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <GSpaceTag key={index} tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default GSpaceCard;