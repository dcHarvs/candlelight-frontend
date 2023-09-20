"use client"

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleRight, faCaretRight, faChartLine, faGears, faMoneyBill, faTableList } from "@fortawesome/free-solid-svg-icons"
import { useRouter, usePathname } from "next/navigation";
import { v4 } from "uuid";
import sidebarItems from "./sidebarItems";
import { useMemo, useState } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export interface SidebarItem {
  id?: string | number;
  label: string;
  link?: string;
  icon?: IconProp;
  items?: SidebarItem[];
  order?: number;
}

interface SidebarProps {
  items?: SidebarItem[]
}

function SidebarItem({
  id,
  label,
  link,
  icon,
  items,
  order = 0,
  router,
}: SidebarItem & { router: AppRouterInstance }) {
  // add Suspense here.
  const [collapse, setCollapse] = useState(false);
  const pathname = usePathname();
  const bgStyle = pathname === link
    ? "bg-gray-100"
    : "";

  const buttonStyle = order
    ? "rounded-e-lg"
    : "rounded-lg";

  const subitemHeight = collapse
    ? `h-${(items?.length ?? 0) * 12}`
    : "h-0";

  const caretStyle = collapse
    ? "rotate-90"
    : "0";

  const handleClick = () => {
    if (items) {
      setCollapse(!collapse);
      return;
    }

    if (link) router.push(link);
  };

  return <>
    <button
      onClick={handleClick}
      className={`${bgStyle} ${buttonStyle} text-sm items-center py-3 px-4 mt-1 text-gray-800 flex justify-between select-none hover:bg-gray-100`}
      key={id}
    >
      <div className={`flex gap-3 items-center`}>
        {icon && <div className="w-6 text-md text-gray-600 flex justify-center items-center">
          <FontAwesomeIcon icon={icon} />
        </div>}
        {label}
      </div>
      {items && <FontAwesomeIcon className={`transform ${caretStyle} text-xs transition-all duration-300`} icon={faAngleRight} />}
    </button>
    {items && <div className={`${subitemHeight} border-l ml-4 transition-all duration-300 ease-in-out flex flex-col overflow-hidden`}>
      {items.map(
        item => <SidebarItem
          router={router}
          key={item.id ?? v4()}
          order={order + 1}
          {...item}
        />
      )}
    </div>}
  </>
}

export default function Sidebar({
  items = sidebarItems,
}: SidebarProps) {
  const router = useRouter();

  return (
    <div className="p-4 flex flex-col w-64 h-full border-r">
      <p className="text-2xl font-bold text-gray-600 text-center mb-4 select-none">
        Candle<span className="text-orange-600">light</span>
      </p>
      {items.map(
        item => <SidebarItem
        key={item.id ?? v4()}
        router={router}
        {...item}
      />)}
    </div>
  )
}
