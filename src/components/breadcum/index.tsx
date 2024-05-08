import { ReactNode } from "react";
import { slugify } from "../../utils/slugify";
import { Link } from "react-router-dom";

interface BreadcrumbsProps {
  title: string | ReactNode;
  path?: { id: number; link: string; label: string }[];
  children?: ReactNode;
  icon?: any;
  onClick?: () => void;
}
const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  title,
  path,
  children,
  icon,
  onClick,
}) => {
  // const generatePath = (index: number) => {
  // 	let concatenatedPath = '';
  //     if(index == 0){
  //         return path[0].link
  //     }
  // 	for (let i = 1; i <= index; i++) {
  // 		concatenatedPath += path[i].link;
  // 	}
  // 	return concatenatedPath;
  // };

  return (
    <div
      className={`breadcrumb  bg-danger-0 px-6 py-4 flex  items-center gap-5 breadcrumb-${
        title ? slugify(title) : "default"
      }`}
    >
      <div
        className={`inline-flex flex-wrap items-center justify-between  ${
          icon ? "w-[calc(100%_-_50px)]" : "w-full"
        }`}
      >
        <div className="title-wrap">
          <ul className="breadcrumb list-none flex items-center gap-1">
            {icon && (
              <div
                className="icon w-[25px] h-[25px] inline-flex items-center justify-center rounded cursor-pointer"
                onClick={onClick}
              >
                {icon}
              </div>
            )}
            {path &&
              path
                .filter((path) => path?.label !== "")
                .map((segment) => (
                  <>
                    {segment.label === "" ? undefined : (
                      <li
                        key={segment?.id}
                        className="breadcrumb-item font-normal text-xs inline-flex after:content-['/'] after:block last:after:content-none after:ml-1 after:text-neutral-300"
                      >
                        {(() => {
                          switch (true) {
                            case segment?.id !== path.length - 1:
                              return (
                                <Link
                                  to={segment?.link}
                                  className="text-neutral-300"
                                >
                                  {segment?.label}
                                </Link>
                              );
                            default:
                              return (
                                <span className="text-neutral-500">
                                  {segment?.label}
                                </span>
                              );
                          }
                        })()}
                      </li>
                    )}
                  </>
                ))}
          </ul>
          <h1 className="text-2xl text-neutral-500 font-semibold capitalize">
            {title}
          </h1>
        </div>
        <div className="other-accessories ml-auto flex flex-wrap gap-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
