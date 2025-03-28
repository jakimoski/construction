const Button: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <button className=" relative group  max-w-full inline-block p-px font-semibold leading-6 text-white bg-gray-900 shadow-2xl cursor-pointer rounded-xl  transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
      <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-gray-400 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <span className="relative z-10 block px-7 py-2 md:px-7 md:py-4 rounded-xl bg-blue-950 ">
        <div className="relative z-10 flex items-center space-x-2">
          <span className="transition-all font-md text-l md:text-xl  duration-500 group-hover:translate-x-1">
            {children}
          </span>
          <svg
            className="w-6 h-6 transition-transform group-hover:scale-120 duration-500 group-hover:translate-x-1"
            data-slot="icon"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </span>
    </button>
  );
};

export default Button;
