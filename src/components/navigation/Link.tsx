"use client";

import { default as NextLink } from "next/link";
import { usePathname } from "next/navigation";
import { useLinkGroup } from "./LinkGroup";
import { useEffect } from "react";

interface LinkProps {
  label: string;
  link: string;
  icon?: JSX.Element;
}

export default function Link({
  label,
  link,
  icon
}: LinkProps) {
  const pathname = usePathname();
  const parentContext = useLinkGroup();

  const bgStyle = pathname === link
    ? "bg-gray-200"
    : "";

  const buttonStyle = parentContext
    ? "rounded-e-lg"
    : "rounded-lg";

  useEffect(() => {
    if (parentContext && pathname === link) {
      parentContext.collapse(true);
      parentContext.setUpdatedByChild(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NextLink
      href={link}
      className={`${buttonStyle} ${bgStyle} text-sm flex gap-3 items-center p-3 mt-1 text-gray-800 select-none hover:bg-gray-200`}
      key={link}
    >
      {icon && <div className="w-6 text-md text-gray-600 flex justify-center items-center">
        {icon}
      </div>}
      {label}
    </NextLink>
  )
}
