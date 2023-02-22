import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IRANSansX } from "@theme/fonts";

const ConfirmModal = ({ triggerElement, modalContent, title }) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      {triggerElement({ openModal, closeModal, isOpen })}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className={`relative z-10 ${IRANSansX.variable} font-iran-sans-x`}
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
            <div className="flex items-center justify-center min-h-full p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden align-middle transition-all transform bg-white rounded-lg shadow-xl">
                  <div className="text-base font-bold text-gray-900 !font-iran-sans-x">
                    {title}
                  </div>
                  {modalContent({ openModal, closeModal, isOpen })}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ConfirmModal;
