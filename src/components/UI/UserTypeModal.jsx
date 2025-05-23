/* eslint-disable react/prop-types */
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function UserTypeModal({ open, onClose }) {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-[0.5]" style={{opacity: 0.7}} />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
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
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                  Choose Your Role
                </Dialog.Title>
                <p className="mt-2 text-sm text-gray-500">
                  Let us know how you want to use FastTrack Virtual.
                </p>

                <div className="mt-4 flex flex-col gap-4">
                  <Link
                    to={'/register?userType=employer'}
                    className="w-full px-4 py-4 text-left border-2 border-[#6360f1] rounded-lg hover:bg-blue-50"
                  >
                    <div className="text-[#6360f1] font-semibold text-lg">Employer</div>
                    <p className="text-sm text-gray-600">Looking to hire digital talent</p>
                  </Link>

                  <Link
                    to={'/register?userType=talent'}
                    className="w-full px-4 py-4 text-left border-2 border-[#37ba58] rounded-lg hover:bg-green-50"
                  >
                    <div className="text-[#37ba58] font-semibold text-lg">Digital Talent</div>
                    <p className="text-sm text-gray-600">Looking for remote job opportunities</p>
                  </Link>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
