const Button = ({ text }) => {
  return (
    <div className="hidden md:block px-[30px] py-[12px] gradient rounded-full text-neutral-white font-bold hover:opacity-50 hover:cursor-pointer">
      <p>{text}</p>
    </div>
  );
};
export default Button;
