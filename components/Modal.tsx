import { useRef } from "preact/hooks";
import type { ComponentChildren } from "preact";
import { useOnClickOutside } from "@/hooks/useOutsideClick.ts";

interface ModalProps {
  opened: boolean;
  onOpen?: () => void;
  onClose: () => void;
  children?: ComponentChildren;
  position: "up" | "center";
}

function Modal({ opened, onClose, children, position }: ModalProps) {
  const ref = useRef();

  useOnClickOutside(ref, () => onClose());

  if (opened) {
    return (
      <div
        className={`
        ${position === "up" && "items-start mt-5"}
        ${position === "center" && "items-center"}
         modal flex justify-center px-5`}
      >
        <div
          ref={ref as any}
          className="max-w-screen-sm w-full bg-white rounded-xl shadow-lg h-96"
        >
          {children}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Modal;
