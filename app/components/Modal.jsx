"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const router = useRouter();
  const modalRef = useRef(null);

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  const onHide = () => {
    router.back();
  };

  return createPortal(
    <dialog
      onClose={onHide}
      ref={modalRef}
      className="shadow-teal-700 shadow-md border border-teal-600 flex flex-col p-2 rounded-md  dark:bg-opacity-95 dark:text-gray-100"
    >
      <span
        onClick={onHide}
        className="flex justify-end cursor-pointer text-black"
      >
        close Modal
      </span>
      {children}
    </dialog>,
    document.getElementById("Modal-root-content")
  );
};

export default Modal;
