"use client";

import { IconChevronRight, IconFolder, IconFolderOpen } from "@tabler/icons-react";
import { createContext, Dispatch, ReactNode, SetStateAction, useCallback, useContext, useEffect, useRef, useState } from "react";

interface LinkGroupProps {
  label: string;
  children: ReactNode;
  icon?: JSX.Element;
}

interface LinkGroupContextType {
  collapse: Dispatch<SetStateAction<boolean>>;
  setUpdatedByChild: (bool: boolean) => void;
}

export const LinkGroupContext = createContext<LinkGroupContextType | undefined>(undefined);
export const useLinkGroup = () => useContext(LinkGroupContext);

export default function LinkGroup({
  children,
  label,
  icon,
}: LinkGroupProps) {
  const [collapse, setCollapse] = useState(false);
  const updatedByChild = useRef(false);
  const parentContext = useLinkGroup();

  const caretStyle = collapse
    ? "rotate-90"
    : "0";

  const buttonStyle = parentContext
    ? "rounded-e-lg"
    : "rounded-lg";

  const subitemHeight = collapse
    ? "max-h-screen"
    : "max-h-0";

  const setUpdatedByChild = useCallback((bool: boolean) => updatedByChild.current = bool, []);

  useEffect(() => {
    if (parentContext && updatedByChild.current) {
      parentContext.collapse(true);
      parentContext.setUpdatedByChild(true);
      setUpdatedByChild(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LinkGroupContext.Provider value={{ collapse: setCollapse, setUpdatedByChild }}>
      <button
        onClick={() => setCollapse(!collapse)}
        className={`${buttonStyle} w-full text-sm items-center p-3 mt-1 text-gray-800 flex justify-between select-none hover:bg-gray-200`}
      >
        <div className="flex gap-3 items-center">
          <div className="w-6 text-md text-gray-600 flex justify-center items-center">
            {icon
              ? icon
              : collapse
              ? <IconFolderOpen size={24} />
              : <IconFolder size={24} />}
          </div>
          {label}
        </div>
        <IconChevronRight className={`transform transition-all duration-200 ${caretStyle}`} size={16} />
      </button>
      <div className={`h-auto ${subitemHeight} border-l ml-4 flex flex-col overflow-hidden transform transition-all duration-200`}>
        {children}
      </div>
    </LinkGroupContext.Provider>
  )
}
