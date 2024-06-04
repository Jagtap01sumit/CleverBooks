const NavLink = ({ href, title }) => {
  return (
    <a
      href={href}
      className="block py-2 pl-3 pr-4 md:text-white text-sm rounded md:p-0 hover:text-pink item-start sm:text-black"
    >
      {title}
    </a>
  );
};
export default NavLink;
