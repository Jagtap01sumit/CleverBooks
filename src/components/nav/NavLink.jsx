const NavLink = ({ href, title }) => {
  return (
    <a
      href={href}
      className="block py-2 pl-3 pr-4 lg:text-white text-sm md:text-3xl lg:text-sm rounded md:p-0 hover:text-pink item-start sm:text-black md:py-5 lg:py-0"
    >
      {title}
    </a>
  );
};
export default NavLink;
