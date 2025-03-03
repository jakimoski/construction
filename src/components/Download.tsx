import { downloadLinks } from "@/constants/index.jsx";
import { Marker } from "./svg/Marker";

const Download = () => {
  return (
    <div>
      <h3 className="text-xl my-4 text-center text-amber-50 pt-6">
        Available on all platforms
      </h3>
      <ul className="flex flex-wrap items-center justify-center p-6 w-full gap-6">
        {downloadLinks.map(({ id, url, icon }) => (
          <li key={id} className="download-icon">
            <a
              href={url}
              className="size-15 md:size-20  relative flex items-center justify-center "
              aria-label="download"
            >
              <span className="absolute -top-2 rotate-90">
                <Marker />
              </span>

              <span className="">{icon}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Download;
