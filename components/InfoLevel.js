import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { StepBar1, StepBar2, StepBar3, StepBar4, StepBar5 } from "./StepBar";
import MinLevel from "./MinLevel";

export default function InfoLevel({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div>
      <button
        type="button"
        onClick={openModal}
        className="rounded-md p-1 text-blue-400 hover:text-blue-600 transition duration-300"
      >
        <InformationCircleIcon className="h-6 w-6" aria-hidden="true" />
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 font-Poppins"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium text-center leading-6 text-gray-900"
                  >
                    Level {item.lvl}
                  </Dialog.Title>
                  <div className="flex justify-center font-medium mt-2 text-md text-gray-500">
                    {item.title} • {item.exp} XP
                  </div>
                  <div className="mt-6 w-full">
                    <div className="rounded-md bg-gray-300 w-full h-2"></div>
                    <div className="flex items-center w-full -mt-2">
                      <StepBar1
                        item={{
                          exp: item.exp,
                          lvl: item.lvl,
                        }}
                      />
                      <StepBar2
                        item={{
                          exp: item.exp,
                          lvl: item.lvl,
                        }}
                      />
                      <StepBar3
                        item={{
                          exp: item.exp,
                          lvl: item.lvl,
                        }}
                      />
                      <StepBar4
                        item={{
                          exp: item.exp,
                          lvl: item.lvl,
                        }}
                      />
                      <StepBar5
                        item={{
                          exp: item.exp,
                          lvl: item.lvl,
                        }}
                      />
                    </div>
                    <div className="flex justify-between items-center -mt-3">
                      <div className="rounded-full h-4 w-4 border-4 border-blue-600 bg-white"></div>
                      <div className="rounded-full h-4 w-4 border-4 border-blue-600 bg-white"></div>
                      <div className="rounded-full h-4 w-4 border-4 border-blue-600 bg-white"></div>
                      <div className="rounded-full h-4 w-4 border-4 border-blue-600 bg-white"></div>
                      <div className="rounded-full h-4 w-4 border-4 border-blue-600 bg-white"></div>
                      <div className="rounded-full h-4 w-4 border-4 border-blue-600 bg-white"></div>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex justify-center text-xs text-gray-500">
                        0 XP
                      </div>
                      <div className="flex justify-center text-xs text-gray-500">
                        250 XP
                      </div>
                      <div className="flex justify-center text-xs text-gray-500">
                        500 XP
                      </div>
                      <div className="flex justify-center text-xs text-gray-500">
                        1000 XP
                      </div>
                      <div className="flex justify-center text-xs text-gray-500">
                        2000 XP
                      </div>
                      <div className="flex justify-center text-xs text-gray-500">
                        4000 XP
                      </div>
                    </div>
                    <div className="flex justify-center mt-4 w-full">
                      <MinLevel
                        item={{
                          exp: item.exp,
                          lvl: item.lvl,
                          fontSize: "16px",
                        }}
                      />
                    </div>
                  </div>

                  <div className="mt-12 flex justify-end">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm hover:-translate-y-1 ease-in-out delay-150 font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition duration-300"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
