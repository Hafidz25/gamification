import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition, Dialog } from "@headlessui/react";
import { UserIcon, ClockIcon, BellIcon } from "@heroicons/react/24/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavbarNew() {
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-stretch justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <a href="/">
                    <img
                      className="block h-6 w-auto lg:hidden"
                      src="/logo-new.png"
                      alt="Mejakita"
                    />
                  </a>
                  <a href="/">
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src="/logo-new.png"
                      alt="Mejakita"
                    />
                  </a>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a href="/history">
                  <button
                    type="button"
                    className="rounded-full p-1 text-gray-400 hover:text-slate-700 transition duration-300"
                  >
                    <span className="sr-only">View history</span>
                    <ClockIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </a>
                <button
                  type="button"
                  className="rounded-full p-1 text-gray-400 hover:text-slate-700 transition duration-300"
                >
                  <span className="sr-only">View notif</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-200 p-1 text-gray-400 hover:text-slate-700 transition duration-300">
                      <span className="sr-only">Open user menu</span>
                      <UserIcon className="h-8 w-8" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 rounded-lg transition duration-200"
                                : "",
                              "block px-2 py-2 mx-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 rounded-lg transition duration-200"
                                : "",
                              "block px-2 py-2 mx-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
