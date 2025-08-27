import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 text-lg sm:text-xl md:text-2xl font-semibold justify-center py-4 px-4">
      <Link to="/" className="cursor-pointer hover:text-poetry-blue transition-colors text-center">Home</Link>
      <Link to="/poems" className="cursor-pointer hover:text-poetry-blue transition-colors text-center">Poems</Link>
      <Link to="/contact" className="cursor-pointer hover:text-poetry-blue transition-colors text-center">Contact me</Link>
    </div>
  );
};

export default Navigation;