interface HeadingProps {
  className?: string;
  title?: string;
  text?: string;
}

const Heading = ({ className, title, text }: HeadingProps) => {
  return (
    <div
      className={`${className} max-w-[70rem] mx-auto mb-12 lg:mb-20 text-center`}
    >
      {title && (
        <h2 className="text-amber-50 w-full text-4xl  lg:text-6xl uppercase font-bold">
          {title}
        </h2>
      )}
      {text && <h3 className="text-xl my-4 text-amber-50">{text}</h3>}
    </div>
  );
};

export default Heading;
