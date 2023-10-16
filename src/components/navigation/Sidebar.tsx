import Link from "./Link";
import { IconChartLine, IconFileInvoice, IconFileReport, IconList, IconReceipt, IconReportMoney, IconSettings, IconTable } from "@tabler/icons-react";
import LinkGroup from "./LinkGroup";

export default function Sidebar() {
  return (
    <div className="bg-gray-50 py-4 flex flex-col w-72 h-full border-r">
      <p className="text-2xl font-bold text-gray-600 text-center mb-4 select-none">
        Candle<span className="text-orange-600">light</span>
      </p>

      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <Link label="Dashboard" link="/" icon={<IconChartLine size={24} />} />
        <LinkGroup label="Maintenance" icon={<IconSettings size={24} />}>
          <LinkGroup label="Chart of Accounts">
            <Link label="Assets" link="/chart-of-accounts/assets" icon={<IconList size={24} />} />
            <Link label="Liabilities" link="/chart-of-accounts/liabilities" icon={<IconList size={24} />} />
            <Link label="Expense" link="/chart-of-accounts/expense" icon={<IconList size={24} />} />
            <LinkGroup label="Revenue/Income">
              <Link label="Corporate" link="/maintenance/chart-of-accounts/revenue-income/corporate" icon={<IconList size={24} />} />
              <Link label="Capital" link="/maintenance/chart-of-accounts/revenue-income/capital" icon={<IconList size={24} />} />
            </LinkGroup>
          </LinkGroup>
          <Link label="Customers" link="/maintenance/customers" icon={<IconList size={24} />} />
          <Link label="Vendors" link="/maintenance/vendors" icon={<IconList size={24} />} />
        </LinkGroup>
        <LinkGroup label="Sales" icon={<IconReportMoney size={24} />}>
          <Link label="Orders" icon={<IconFileInvoice size={24} />} link="/sales/orders" />
          <Link label="Invoices" icon={<IconReceipt size={24} />} link="/sales/invoices" />
        </LinkGroup>
        <LinkGroup label="Reports" icon={<IconFileReport size={24} />}>
          <Link label="Balance Sheet" icon={<IconTable size={24} />} link="/reports/balance-sheet" />
          <Link label="Trial Balance" icon={<IconTable size={24} />} link="/reports/trial-balance" />
          <Link label="General Ledger" icon={<IconTable size={24} />} link="/reports/general-ledger" />
        </LinkGroup>
      </div>

      <div className="mx-4 pt-4 border-t">
        <div className="p-4 rounded-lg text-sm hover:bg-gray-200 cursor-pointer">
          User Data
        </div>
      </div>
    </div>
  )
}
