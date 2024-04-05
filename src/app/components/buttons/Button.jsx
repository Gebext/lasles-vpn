const Button = (props) => {
  return (
    <div>
      <button className="md:py-4 md:px-[76px] px-12 py-4 bg-primary text-white font-bold rounded-lg shadow-red-500 shadow-2xl md:text-base text-[10px] ">
        {props.text}
      </button>
    </div>
  );
};

export default Button;
