
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React, {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";

interface ModalContextType {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children, default_state }: { children: ReactNode, default_state?: 'open' | 'close' }) => {
    const [open, setOpen] = useState(default_state === 'open' ? true : false);

    return (
        <ModalContext.Provider value={{ open, setOpen }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};

export function Modal({ children, default_state }: { children: ReactNode, default_state: 'open' | 'close' }) {
    return <ModalProvider default_state={default_state}>{children}</ModalProvider>;
}

export const ModalTrigger = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    const { setOpen } = useModal();
    return (
        <button
            className={cn(
                "px-4 py-2 rounded-md text-black dark:text-white text-center relative overflow-hidden",
                className
            )}
            onClick={() => setOpen(true)}
        >
            {children}
        </button>
    );
};

export const ModalBody = ({
    children,
    className,
    blur = '10px',
    keepCloseIconVisible = true,
    closeOnOutsideClick = true,
}: {
    children: ReactNode;
    className?: string;
    blur?: string,
    keepCloseIconVisible?: boolean;
    closeOnOutsideClick?: boolean;
}) => {
    const { open } = useModal();

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [open]);

    const modalRef = useRef(null);

    const { setOpen } = useModal();

    useOutsideClick(modalRef, closeOnOutsideClick, () => setOpen(false));

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                        backdropFilter: `blur(${blur})`,
                    }}
                    exit={{
                        opacity: 0,
                        backdropFilter: "blur(0px)",
                    }}
                    className="fixed inset-0 flex items-center justify-center z-50"
                >
                    <Overlay blur={blur}/>

                    <motion.div
                        ref={modalRef}
                        className={cn(
                            "max-w-[90%] w-full md:w-3/5 bg-white border border-transparent dark:border-neutral-800 md:rounded-2xl relative z-50 flex flex-col overflow-hidden",
                            className,
                            "dark:bg-background"
                        )}
                        initial={{
                            opacity: 0,
                            scale: 0.5,
                            rotateX: 40,
                            y: 40,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            rotateX: 0,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.8,
                            rotateX: 10,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 15,
                        }}
                    >
                        {keepCloseIconVisible && <CloseIcon />}
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export const ModalContent = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col flex-1 p-0 md:p-10", className)}>
            {children}
        </div>
    );
};

export const ModalFooter = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "flex justify-end p-4 bg-white dark:bg-background",
                className
            )}
        >
            {children}
        </div>
    );
};

const Overlay = ({ blur}: { blur: string}) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                backdropFilter: `blur(${blur})`,
            }}
            exit={{
                opacity: 0,
                backdropFilter: "blur(0px)",
            }}
            className={`fixed inset-0 h-full w-full bg-opacity-50 z-50`}
        ></motion.div>
    );
};

const CloseIcon = () => {
    const { setOpen } = useModal();
    return (
        <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 group"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-black dark:text-white dark:bg-background h-4 w-4 group-hover:scale-125 group-hover:rotate-3 transition duration-200"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
            </svg>
        </button>
    );
};

// Hook to detect clicks outside of a component.
// Add it in a separate file, I've added here for simplicity
export const useOutsideClick = (
    ref: React.RefObject<HTMLDivElement>,
    closeOnOutsideClick: boolean,
    callback: Function
) => {
    useEffect(() => {
        const listener = (event: any) => {
            // DO NOTHING if the element being clicked is the target element or their children
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }

            if (closeOnOutsideClick) {
                callback(event);
            }
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, callback]);
};