import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowUp } from "lucide-react";

const serverData = [
  {
    rank: 1,
    name: "AI Image generator pro",
    description: "Advanced AI power image generation...",
    status: "Public",
    totalCalls: "15,420",
    paidCalls: "15,420",
    callEarnings: "$1,420.50",
    matchingFund: "$1,420.50",
    totalEarnings: "$1,420.50",
    lastUpdated: "15/07/2025"
  },
  {
    rank: 2,
    name: "OnChain Game Metrics",
    description: "Real-time game telemetry storage...",
    status: "Private",
    totalCalls: "15,420",
    paidCalls: "15,420",
    callEarnings: "$1,420.50",
    matchingFund: "$1,420.50",
    totalEarnings: "$1,420.50",
    lastUpdated: "15/07/2025"
  },
  {
    rank: 3,
    name: "Weather Oracle Sync",
    description: "Decentralized weather data sync for...",
    status: "Public",
    totalCalls: "15,420",
    paidCalls: "15,420",
    callEarnings: "$1,420.50",
    matchingFund: "$1,420.50",
    totalEarnings: "$1,420.50",
    lastUpdated: "15/07/2025"
  },
  {
    rank: 4,
    name: "AI ImageNFT Avatar",
    description: "3D NFT avatars rendered in voxel environ...",
    status: "Private",
    totalCalls: "15,420",
    paidCalls: "15,420",
    callEarnings: "$1,420.50",
    matchingFund: "$1,420.50",
    totalEarnings: "$1,420.50",
    lastUpdated: "15/07/2025"
  },
  {
    rank: 5,
    name: "AI Dungeon Master",
    description: "AI-powered dynamic storytelling for...",
    status: "Public",
    totalCalls: "15,420",
    paidCalls: "15,420",
    callEarnings: "$1,420.50",
    matchingFund: "$1,420.50",
    totalEarnings: "$1,420.50",
    lastUpdated: "15/07/2025"
  }
];

const MyEarningsPage = () => {
  return (
    <main className="pt-[112px] flex justify-center mb-10">
      <div className="max-w-[1217px] w-full flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h1 className="text-[32px] font-semibold text-[#14110E]">
            My Earnings
          </h1>
        </div>

        {/* Stats Cards Row */}
        <div className="flex gap-6 w-full">
          {/* Total Earnings Card - Large */}
          <div className="bg-gray-800 rounded-[12px] p-6 w-[389px] text-white">
            <div className="flex flex-col gap-4">
              {/* Line Chart Placeholder */}
              <div className="relative h-16 flex mt-4">
                <Image
                  src="/graph.svg"
                  alt="earnings chart"
                  width={200}
                  height={64}
                  className="absolute -left-[20px] top-0 h-full object-contain"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[16px] font-medium text-gray-300">Total Earnings</span>
                <div className="flex items-end gap-2">
                    <div className="text-[40px] font-semibold text-white">$ 2,245</div>
                    <div className="flex justify-end gap-2 text-sm text-green-300 h-full mb-[10px]">
                        <span className="text-[16px] flex items-center gap-1 font-bold">+ 20%  <ArrowUp className="w-4 h-4" /></span>
                        <span className="text-gray-400 text-[15px]">since last month</span>
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* Total Tool Calls */}
          <div className="flex flex-col gap-6 w-[287px]">
            <div className="bg-white flex rounded-[12px] p-4 border border-gray-100">
                <div className="flex gap-4">
                <div className="w-[48px] h-[48px] bg-[#EAECF5] rounded-lg flex items-center justify-center">
                    <Image
                    src="/totalcalls.svg"
                    alt="total calls"
                    width={24}
                    height={24}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-[14px] font-medium text-gray-500">Total Tool Calls</span>
                    <div className="text-[24px] font-bold text-black">15,420</div>
                </div>
                </div>
            </div>
            {/* Paid Tool Calls */}
            <div className="bg-white rounded-[12px] p-4 border border-gray-100">
                <div className="flex flex-col gap-4">
                <div className="w-[48px] h-[48px] bg-[#EAECF5] rounded-lg flex items-center justify-center">
                    <Image
                    src="/totalcalls.svg"
                    alt="paid calls"
                    width={24}
                    height={24}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-[14px] font-medium text-gray-500">Paid Tool Calls</span>
                    <div className="text-[24px] font-bold text-black">2,542</div>
                </div>
                </div>
            </div>
          </div>
        </div>

        {/* Second Row - Earnings Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Earnings Breakdown Card */}
          <div className="lg:col-span-1 bg-white rounded-[12px] p-6 border border-gray-100">
            <div className="flex flex-col gap-4">
              <h3 className="text-[18px] font-semibold text-gray-900">Earnings Breakdown</h3>
              
              {/* Donut Chart */}
              <div className="relative w-32 h-32 mx-auto">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-gray-200"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="transparent"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-orange-500"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray="75, 100"
                    strokeLinecap="round"
                    fill="transparent"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-[20px] font-bold text-gray-900">5</div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="text-[14px] font-medium text-gray-600">Active Servers</div>
              </div>

              {/* Legend */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-gray-600">AI Image generator pro</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-600">OnChain Game Metrics</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-600">Weather Oracle Sync</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">AI ImageNFT Avatar</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600">AI Dungeon Master</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Server Performance Table */}
        <div className="bg-white rounded-[14px] border border-gray-100 overflow-hidden">
          {/* Table Header */}
          <div className="flex items-center justify-between py-4 px-6">
            <h2 className="text-[24px] font-semibold text-black">Server Performance</h2>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Last 7 Days" className="text-[16px] font-semibold text-gray-700 placeholder:text-gray-700" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="last7days"><span className="text-[16px] font-semibold text-gray-700">Last 7 Days</span></SelectItem>
                  <SelectItem value="last30days"><span className="text-[16px] font-semibold text-gray-700">Last 30 Days</span></SelectItem>
                  <SelectItem value="last90days"><span className="text-[16px] font-semibold text-gray-700">Last 90 Days</span></SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Table Content */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white border-t border-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-[14px] text-gray-500 font-normal">Rank</th>
                  <th className="px-6 py-4 text-left text-[14px] text-gray-500 font-normal">MCP Server Name</th>
                  <th className="px-6 py-4 text-left text-[14px] text-gray-500 font-normal">Status</th>
                  <th className="px-6 py-4 text-left text-[14px] text-gray-500 font-normal">Total Calls</th>
                  <th className="px-6 py-4 text-left text-[14px] text-gray-500 font-normal">Paid Calls</th>
                  <th className="px-6 py-4 text-left text-[14px] text-gray-500 font-normal">Call Earnings</th>
                  <th className="px-6 py-4 text-left text-[14px] text-gray-500 font-normal">Matching Fund</th>
                  <th className="px-6 py-4 text-left text-[14px] text-gray-500 font-normal">Total Earnings</th>
                  <th className="px-6 py-4 text-left text-[14px] text-gray-500 font-normal">Last Updated</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {serverData.map((server, index) => (
                  <tr key={index} className="hover:bg-gray-50 border-t border-gray-100">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-[16px] font-medium text-gray-700">{server.rank}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <div className="text-[16px] font-medium text-gray-900">{server.name}</div>
                        <div className="text-sm text-gray-500">{server.description}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        server.status === 'Public' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {server.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-[16px] font-medium text-gray-700">{server.totalCalls}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-[16px] font-medium text-gray-700">{server.paidCalls}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-[16px] font-bold text-green-600">{server.callEarnings}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-[16px] font-medium text-gray-700">{server.matchingFund}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-[16px] font-bold text-green-600">{server.totalEarnings}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-[14px] text-gray-500">{server.lastUpdated}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
};

export default MyEarningsPage;