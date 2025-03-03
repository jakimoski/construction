import Image, { StaticImageData } from "next/image";

const Notification = ({
  className,
  title,
  src,
}: {
  className?: string;
  title: string;
  src: StaticImageData;
}) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40  rounded-2xl gap-5`}
    >
      <Image
        src={src}
        width={62}
        height={62}
        alt="image"
        className="rounded-xl"
      />

      <div className="flex-1">
        <p className="mb-1 font-semibold text-base">{title}</p>
      </div>
    </div>
  );
};

export default Notification;
