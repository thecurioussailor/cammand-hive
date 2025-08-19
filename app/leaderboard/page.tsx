import Image from "next/image";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
const leaderboardData = [
  {
    rank: "#1",
    name: "AI Image generator pro",
    description: "Advanced AI power image generation with...",
    author: "AI Developer Studio",
    earnings: "$15,420.50",
    link: "mcp://ai-image-gen...",
    repository: "View Repository"
  },
  {
    rank: "#2",
    name: "OnChain Game Metrics",
    description: "Real-time game telemetry storage on Arw...",
    author: "ChainOps Lab",
    earnings: "$15,420.50",
    link: "mcp://ai-image-gen...",
    repository: "View Repository"
  },
  {
    rank: "#3",
    name: "Weather Oracle Sync",
    description: "Decentralized weather data sync for Mine...",
    author: "OpenWX Network",
    earnings: "$15,420.50",
    link: "mcp://ai-image-gen...",
    repository: "View Repository"
  },
  {
    rank: "#4",
    name: "AI ImageNFT Avatar",
    description: "3D NFT avatars rendered in voxel environ...",
    author: "MetaVoxel Builders",
    earnings: "$15,420.50",
    link: "mcp://ai-image-gen...",
    repository: "View Repository"
  },
  {
    rank: "#5",
    name: "AI Dungeon Master",
    description: "AI-powered dynamic storytelling for multi...",
    author: "LoreWeaver AI",
    earnings: "$15,420.50",
    link: "mcp://ai-image-gen...",
    repository: "View Repository"
  },
  {
    rank: "#521",
    name: "Auto Farm & Trade System",
    description: "Snapshot-compatible DAO system for ser...",
    author: "DAOForge",
    earnings: "$15,420.50",
    link: "mcp://ai-image-gen...",
    repository: "View Repository",
    isHighlighted: true
  },
  {
    rank: "#891",
    name: "Auto Farm & Trade System",
    description: "Snapshot-compatible DAO system for ser...",
    author: "DAOForge",
    earnings: "$15,420.50",
    link: "mcp://ai-image-gen...",
    repository: "View Repository",
    isHighlighted: true
  }
];

const LeaderboardPage = () => {
  return (
    <main className="pt-[112px] flex justify-center mb-10">
      <div className="max-w-[1216px] w-full flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col gap-2 max-w-[595px]">
          <h1 className="text-[32px] font-semibold text-[#14110E]">
            MCP Server Leaderboard
          </h1>
          <p className="text-[16px] text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Servers */}
          <div className="bg-gray-800 rounded-[12px] p-3 text-white">
            <div className="flex flex-col gap-6">
              <div className="w-[60px] h-[60px] bg-gray-600 rounded-lg flex items-center justify-center">
                <Image
                  src="/lbmcp.svg"
                  alt="servers"
                  width={36}
                  height={36}
                  className=""
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[16px] font-medium text-white">Total Servers</span>
                <div className="text-[28px] font-semibold text-white">2,245</div>
              </div>
            </div>
          </div>

          {/* Top Earner */}
          <div className="bg-white rounded-[12px] p-3 text-white border border-gray-100">
            <div className="flex flex-col gap-6">
              <div className="w-[60px] h-[60px] bg-[#EAECF5] rounded-lg flex items-center justify-center">
                <Image
                  src="/lbearning.svg"
                  alt="servers"
                  width={36}
                  height={36}
                  className=""
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[16px] font-medium text-gray-500">Top Earner</span>
                <div className="text-[28px] font-semibold text-black">$ 15,420.50</div>
              </div>
            </div>
          </div>
          {/* Top Earner (duplicate in image) */}
          <div className="bg-white rounded-[12px] p-3 text-white border border-gray-100">
            <div className="flex flex-col gap-6">
              <div className="w-[60px] h-[60px] bg-[#EAECF5] rounded-lg flex items-center justify-center">
                <Image
                  src="/lbearning.svg"
                  alt="servers"
                  width={36}
                  height={36}
                  className=""
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[16px] font-medium text-gray-500">Top Earner</span>
                <div className="text-[28px] font-semibold text-black">$ 15,420.50</div>
              </div>
            </div>
          </div>

          {/* Total Ecosystem Value */}
          <div className="bg-white rounded-[12px] p-3 text-white border border-gray-100">
            <div className="flex flex-col gap-6">
              <div className="w-[60px] h-[60px] bg-[#EAECF5] rounded-lg flex items-center justify-center">
                <Image
                  src="/lbtotalecosystem.svg"
                  alt="servers"
                  width={36}
                  height={36}
                  className=""
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[16px] font-medium text-gray-500">Total Ecosystem Value</span>
                <div className="text-[28px] font-semibold text-black">$ 110,420.52</div>
              </div>
            </div>
          </div>
        </div>

        {/* Rankings Table */}
        <div className="bg-white rounded-[14px] border border-gray-100 overflow-hidden">
          {/* Table Header */}
          <div className="flex items-center justify-between py-4 px-6">
            <h2 className="text-[24px] font-semibold text-black">All Rankings</h2>
            <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a time period" className="text-[16px] font-semibold text-gray-700 placeholder:text-gray-700" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                <SelectItem value="last7days"><span className="text-[16px] font-semibold text-gray-700">Last 7 Days</span></SelectItem>
                <SelectItem value="last30days"><span className="text-[16px] font-semibold text-gray-700">Last 30 Days</span></SelectItem>
                <SelectItem value="last90days"><span className="text-[16px] font-semibold text-gray-700">Last 90 Days</span></SelectItem>
                <SelectItem value="last365days"><span className="text-[16px] font-semibold text-gray-700">Last 365 Days</span></SelectItem>
                </SelectGroup>
            </SelectContent>
            </Select>
          </div>

          {/* Table Content */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white">
                <tr>
                  <th className="px-6 py-4 text-left text-[14px] text-gray-500 font-normal">Rank</th>
                  <th className="px-6 py-4 text-left text-[14px] text-gray-500 font-normal">MCP Server Name</th>
                  <th className="px-6 py-4 text-left text-[14px] text-gray-500 font-normal">Author</th>
                  <th className="px-6 py-4 text-left text-[14px] text-gray-500 font-normal">Total Earnings</th>
                  <th className="px-6 py-4 text-left text-[14px] text-gray-500 font-normal">MCP Server Link</th>
                  <th className="px-6 py-4 text-left text-[14px] text-gray-500 font-normal">Repository</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {leaderboardData.map((item, index) => (
                  <tr 
                    key={index} 
                    className={`${item.isHighlighted ? 'bg-gray-800 text-white' : 'hover:bg-gray-50'}`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`text-[16px] font-medium ${item.isHighlighted ? 'text-white' : 'text-gray-700'}`}>{item.rank}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <div className={`text-[16px] font-medium ${item.isHighlighted ? 'text-white' : 'text-gray-700'}`}>{item.name}</div>
                        <div className={`text-sm font-medium ${item.isHighlighted ? 'text-gray-300' : 'text-gray-500'}`}>
                          {item.description}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`text-[16px] ${item.isHighlighted ? 'text-white' : 'text-gray-700'} font-medium`}>{item.author}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-[16px] font-bold text-green-600">{item.earnings}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`flex justify-between items-center gap-2 p-2 ${item.isHighlighted ? 'bg-gray-600' : 'bg-gray-200'} rounded-[4px]`}>
                        <span className={`text-sm font-medium ${item.isHighlighted ? 'text-white' : 'text-gray-700'}`}>
                          {item.link}
                        </span>
                        <button className="rounded-lg">
                          <Image
                            src="/copy.svg"
                            alt="copy"
                            width={18}
                            height={18}
                            style={{
                                filter: item.isHighlighted ? 'brightness(0) invert(1)' : 'none'
                            }}
                          />
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className={`text-[16px] font-medium underline ${item.isHighlighted ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-gray-500'}`}>
                        {item.repository}
                      </button>
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

export default LeaderboardPage;