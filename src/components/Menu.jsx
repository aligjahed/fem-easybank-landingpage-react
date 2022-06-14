const Menu = ({ close }) => {
  return (
    <div
      className={
        !close
          ? "md:hidden absolute top-[64px] left-0 h-full w-full p-[25px] bg-gradient-to-b from-primary-dark_blue to-transparent animate-fadeIn"
          : "hidden"
      }
    >
      <nav className="bg-neutral-white py-[35px] rounded-md">
        <ul className="flex space-y-[25px] font-normal flex-col justify-center items-center text-primary-dark_blue">
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>About</p>
          </li>
          <li>
            <p>Contact</p>
          </li>
          <li>
            <p>Blog</p>
          </li>
          <li>
            <p>Careers</p>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Menu;
