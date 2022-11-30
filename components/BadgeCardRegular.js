import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function BadgeCardRegular({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    // <>
    //   {item.status.is_owned == true ? <>
    //     {item.status.is_claimed == true ? (
    //       <div className="bg-white rounded-lg w-56 p-4 grid">
    //         <div className="flex items-center gap-4">
    //           <img src={item.img} className="w-20" />
    //           <div className="flex-col">
    //             <div className="font-medium text-sm">{item.name}</div>
    //             <div className="font-medium w-20 mt-1 flex justify-center bg-green-200 p-1 rounded-full text-xs text-green-600">
    //               {item.bp} point
    //             </div>
    //           </div>
    //         </div>
    //         <div className="flex justify-center items-center p-1 rounded-full bg-blue-200 text-xs font-medium text-blue-600 mt-1">Dimiliki</div>
    //       </div>
    //     ) : (
    //       <div className="bg-white rounded-lg w-56 p-4 grid">
    //         <div className="flex items-center gap-4">
    //           <img src={item.img} className="w-20" />
    //           <div className="flex-col">
    //             <div className="font-medium text-sm">{item.name}</div>
    //             <div className="font-medium w-20 mt-1 flex justify-center bg-green-200 p-1 rounded-full text-xs text-green-600">
    //               {item.bp} point
    //             </div>
    //           </div>
    //         </div>
    //         <div className="flex justify-center items-center p-1 rounded-full cursor-pointer bg-green-200 hover:bg-green-500 hover:text-white transition duration-200 text-xs font-medium text-green-600 mt-1">Claim</div>
    //       </div>
    //     )}
    //   </> : (
    //     <div className="bg-white rounded-lg w-56 p-4 grid">
    //       <div className="flex items-center gap-4">
    //         <img src={item.img} className="w-20" />
    //         <div className="flex-col">
    //           <div className="font-medium text-sm">{item.name}</div>
    //           <div className="font-medium w-20 mt-1 flex justify-center bg-green-200 p-1 rounded-full text-xs text-green-600">
    //             {item.bp} point
    //           </div>
    //         </div>
    //       </div>
    //       <div className="flex justify-center items-center p-1 rounded-full bg-gray-200 text-xs font-medium text-gray-600 mt-1">Terkunci</div>
    //     </div>

    //   )}
    // </>
    <div className="bg-white rounded-lg w-56 p-4 grid">
      <div className="flex items-center gap-4">
        <img src={item.img} className="w-20" />
        <div className="flex-col">
          <div className="font-medium text-sm">{item.name}</div>
          <div className="font-medium w-20 mt-1 flex justify-center bg-green-200 p-1 rounded-full text-xs text-green-600">
            {item.bp} point
          </div>
        </div>
      </div>
      <div className="flex w-full mt-2">
        {item.status.is_owned == true ? <>
          {item.status.is_claimed == true ? (
            <div className="flex w-3/4 lg:h-8 justify-center items-center p-1 rounded-md bg-blue-200 text-xs font-medium text-blue-600">Dimiliki</div>
          ) : (
            <div className="flex w-3/4 lg:h-8 justify-center items-center p-1 rounded-md cursor-pointer bg-green-200 hover:bg-green-400 hover:text-white transition duration-200 text-xs font-medium text-green-600">Claim</div>
          )}
        </> : (
          <div className="flex w-3/4 lg:h-8 justify-center items-center p-1 rounded-md bg-gray-200 text-xs font-medium text-gray-600">Terkunci</div>
        )}
        <div onClick={openModal} className="flex w-1/4 ml-1 justify-center items-center p-1 rounded-md cursor-pointer bg-blue-200 hover:bg-blue-400 transition duration-200 text-xs font-medium text-blue-800">Info</div>
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
                      {item.name}
                    </Dialog.Title>
                    <div className="flex justify-center mt-4">
                      {/* <div className="rounded-full bg-gray-200 flex items-center justify-center font-mono w-28 h-28 lg:w-28 lg:h-28"></div> */}
                      <img src={item.img} className="w-28" />
                    </div>
                    <div className="mt-4 -mb-12 flex justify-center">
                      <p className="text-sm text-center text-gray-500 overflow-y-auto lg:scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thumb-rounded prose h-32">
                        {item.desc}.
                      </p>
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md bg-blue-100 px-4 py-2 text-sm hover:-translate-y-1 ease-in-out delay-150 font-medium text-blue-900 hover:bg-blue-200 transition duration-300"
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
      {/* <div className="flex justify-center items-center p-1 rounded-full cursor-pointer hover:bg-blue-500 hover:text-white transition duration-200 bg-blue-200 text-xs font-medium text-blue-600 mt-1">Info</div> */}
    </div>
  );
}
