import { generateYAxis } from "@/lib/utils";
import { Calendar } from "lucide-react";
import { lusitana } from "@/components/font";
import { fetchRevenue } from "@/lib/data";

export default async function RevenueChart() {
  const revenue = await fetchRevenue();
  const chartHeight = 350;

  const { yAxisLabels, topLabel } = generateYAxis(revenue);

  if (!revenue || revenue.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Recent Revenue
      </h2>

      <div className="rounded-xl bg-black p-4">
        <div className="mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-slate-800 p-4 sm:grid-cols-[repeat(13,minmax(0,1fr))] md:gap-4">
          <div
            className="mb-6 hidden flex-col justify-between text-sm text-white sm:flex"
            style={{ height: `${chartHeight}px` }}
          >
            {yAxisLabels.map((label) => (
              <p key={label}>{label}</p>
            ))}
          </div>

          {revenue.map((month) => (
            <div key={month.month} className="flex flex-col items-center gap-2">
              <div
                className="w-full rounded-md bg-white"
                style={{
                  height: `${(chartHeight / topLabel) * month.revenue}px`,
                }}
              ></div>
              <p className="-rotate-90 text-sm text-white sm:rotate-0">
                {month.month}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <Calendar className="h-5 w-5 text-white" />
          <h3 className="ml-2 text-sm text-white ">Last 12 months</h3>
        </div>
      </div>
    </div>
  );
}
