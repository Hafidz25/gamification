import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function BadgeCard() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="bg-cyan-900 rounded-lg w-56 h-40 px-4 py-4 grid flex justify-items-center gap-2">
      <div class="rounded-full bg-gray-200 flex font-mono w-20 h-20 lg:w-20 lg:h-20"></div>
      {/* <div class="rounded-md bg-gray-200 font-mono w-30 h-5 lg:w-30 lg:h-5"></div> */}
      <button
        type="button"
        onClick={openModal}
        className="rounded-md px-8 py-1 text-sm bg-blue-100 font-medium text-sm text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition duration-300"
      >
        See more
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
                    Badge Title
                  </Dialog.Title>
                  <div className="flex justify-center mt-4">
                    <div className="rounded-full bg-gray-200 flex items-center justify-center font-mono w-28 h-28 lg:w-28 lg:h-28"></div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500 overflow-y-auto lg:scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thumb-rounded prose h-32">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Blandit volutpat maecenas volutpat blandit aliquam
                      etiam. Neque vitae tempus quam pellentesque nec nam
                      aliquam sem.
                    </p>
                  </div>

                  <div className="mt-4">
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
