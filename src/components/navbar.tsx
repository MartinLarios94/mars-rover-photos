import React from "react";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { name: "Reset Default", href: "/", current: true },
];

export const NavBar = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-2 my-5">
        <div className="relative flex items-center justify-evenly h-16">
          <div className="left-0 flex items-center lg:hidden"></div>
          <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="text-black">
                <img
                  src="/assets/nasa.jpeg"
                  alt="logo"
                  className="hidden md:block w-24 h-auto"
                />
              </a>
            </div>

            <div className="hidden top-0 lg:block w-full z-0">
              <div className="flex justify-end space-x-2 xl:pl-16">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "border-b-4 border-blue-600"
                        : "border-b-4 border-white hover:border-opacity-30",
                      "font-bold px-2 py-6 hover:text-rose-700"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
