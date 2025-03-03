import Image, { StaticImageData } from "next/image";

const SocialCard = ({
  name,
  comment,
  image,
}: {
  name: string;
  comment: string;
  image: StaticImageData;
}) => {
  const userName = name.toLocaleLowerCase().split(" ").join("");
  return (
    <div className="w-full min-w-[20rem] lg:min-w-[30rem] glass overflow-hidden mx-auto">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex space-x-4">
          <div>
            <Image
              width={40}
              height={40}
              src={image}
              alt="manish"
              className="rounded-full"
            />
          </div>
          <div>
            <div className="text-lg font-bold dark:text-white">{name}</div>
            <div className="text-sm text-gray-500 dark:text-gray-200">
              @{userName}
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="text-sm text-wrap pb-2 text-gray-800 dark:text-gray-200">
          {comment}
        </div>

        <div className="text-xs">
          <div className="flex flex-row">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              className="h-4 w-4 text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"></path>
            </svg>
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              className="h-4 w-4 text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"></path>
            </svg>
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              className="h-4 w-4 text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"></path>
            </svg>
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              className="h-4 w-4 text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"></path>
            </svg>

            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              className="h-4 w-4 text-yellow-200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-center space-x-4">
          <svg
            className="h-4 w-4 text-gray-500 dark:text-gray-200"
            fill="none"
            height={24}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
            <path d="M21 3v5h-5" />
            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
            <path d="M8 16H3v5" />
          </svg>
          <svg
            className="h-4 w-4 text-gray-500 dark:text-gray-200"
            fill="none"
            height={24}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          <svg
            className="h-4 w-4 text-gray-500 dark:text-gray-200"
            fill="none"
            height={24}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1={12} x2={12} y1={3} y2={15} />
          </svg>
        </div>
        <div className="flex items-center space-x-4">
          <svg
            className="h-4 w-4 text-gray-500 dark:text-gray-200"
            fill="none"
            height={24}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={12} cy={12} r={1} />
            <circle cx={19} cy={12} r={1} />
            <circle cx={5} cy={12} r={1} />
          </svg>
          <svg
            className="h-4 w-4 text-gray-500 dark:text-gray-200"
            fill="none"
            height={24}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SocialCard;
