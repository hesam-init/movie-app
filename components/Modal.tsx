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
          style={{
            maxWidth: "480px",
            height: "300px",
          }}
          className="w-full bg-white rounded-md shadow-lg"
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
