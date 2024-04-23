import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-lg text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
          Services
          <ChevronDownIcon className="ml-2 -mr-1 h-6 w-6" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-300"
        enterFrom="transform opacity-0 scale-75"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-200"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-75"
      >
        <Menu.Items className="absolute z-10 mt-2 w-64 origin-top-right rounded-lg shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-2">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-green-100 text-green-900" : "text-gray-900",
                    "block px-4 py-3 text-md"
                  )}
                >
                  Carbon Credit MarketPlace
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-green-100 text-green-900" : "text-gray-900",
                    "block px-4 py-3 text-md"
                  )}
                >
                  Data Analysis
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-green-100 text-green-900" : "text-gray-900",
                    "block px-4 py-3 text-md"
                  )}
                >
                  ArborTag App
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? "bg-green-100 text-green-900" : "text-gray-900",
                      "block w-full text-left px-4 py-3 text-md"
                    )}
                  >
                    ArborTag Device
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
