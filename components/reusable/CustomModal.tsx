import { Dialog, Transition, DialogPanel, TransitionChild } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

interface CustomModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
    showActions?: boolean;
    onSave?: () => void;
    size: string;
}

export default function CustomModal({ isOpen, onClose, title = 'Modal Title', children, showActions = true, onSave, size }: CustomModalProps) {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" open={isOpen} onClose={onClose}>
                {/* Overlay */}
                <TransitionChild as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-[black]/60 z-[999]" />
                </TransitionChild>

                {/* Modal content */}
                <div className="fixed inset-0 z-[1000] overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen px-4 ">
                        <TransitionChild
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <DialogPanel as="div" className={`panel border-0 p-0 rounded-lg overflow-hidden w-full ${size} my-8 text-black dark:text-white-dark`}>
                                {/* Header */}
                                <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                    <h5 className="font-bold text-lg">{title}</h5>
                                    <button type="button" className="text-white-dark hover:text-dark" onClick={onClose}>
                                        ✕
                                    </button>
                                </div>

                                {/* Body */}
                                <div>{children}</div>

                                {/* Actions */}
                                {/* {showActions && (
                                    <div className="flex justify-end items-center px-5 pb-5 gap-3">
                                        <button type="button" className="btn btn-outline-danger" onClick={onClose}>
                                            Discard
                                        </button>
                                        <button type="button" className="btn btn-primary" onClick={onSave || onClose}>
                                            Save
                                        </button>
                                    </div>
                                )} */}
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
