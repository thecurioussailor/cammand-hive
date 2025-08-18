import Image from "next/image"

const HomePage = () => {
  return (
    <main className="w-[1217px] flex flex-col mx-auto gap-14">
    {/* Hero Section */}
    <div className="flex flex-col items-center gap-[60px] pt-[192px] max-w-[1010px] mx-auto">
        <div className="text-center w-full">
            <h1 className="text-[40px] font-semibold text-[#14110E] mb-6">Build MCP Server In Minutes<span className="text-orange-500">.</span></h1>
            <p className="text-[16px] font-normal text-[#667085]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
            </p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 max-w-[802px] w-full">
            <div className="flex flex-col gap-4 w-full">
                <div className="w-full">
                <input
                    placeholder="Describe the MCP server you want to create..."
                    className="h-12 w-full text-base border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                />
                </div>
                <div className="w-full flex justify-between">
                    <select defaultValue="claude-sonnet-4">
                        <option value="claude-sonnet-4">Claude Sonnet 4</option>
                        <option value="claude-sonnet-3">Claude Sonnet 3</option>
                        <option value="gpt-4">GPT-4</option>
                    </select>
                    <button className="h-12 px-6 flex items-center gap-2 bg-[#FDB022] rounded-lg hover:bg-[#FDB022]/80 text-[#101323] font-medium">
                        Start Creating
                        <Image src="/arrow-up-right.svg" alt="arrow-right" width={20} height={20} />
                    </button>
                </div>
            </div>
        </div>
    </div>
    {/* Demo Video Button */}
    <div className="flex flex-col items-center gap-8">  
        <button className="h-12 px-[18px] flex items-center gap-2 py-[10px] border-[#D0D5DD] w-[208px] border rounded-lg text-[#333F53] hover:bg-gray-50 bg-transparent">
            <Image
                src={"/play-icon.svg"}
                alt="play-icon"
                width={20}
                height={20}
            />
            Watch Demo Video
        </button>
        {/* Example Prompts Section */}
        <div className="text-[#98A2B3] text-[14px] font-normal">
            or
        </div>
        <div className="text-center">
            <h2 className="text-[22px] font-medium text-gray-600 flex items-center gap-2">
                <Image
                    src={"/sparkle.svg"}
                    alt="sparkle"
                    width={24}
                    height={24}
                />
                Try our example prompts
            </h2>
        </div>

        {/* Example Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
            {
            title: "Web Scraping Server",
            description: "Create an MCP server that can scrape websites and extract structured data",
            },
            {
            title: "Web Scraping Server",
            description: "Create an MCP server that can scrape websites and extract structured data",
            },
            {
            title: "Web Scraping Server",
            description: "Create an MCP server that can scrape websites and extract structured data",
            },
            {
            title: "Web Scraping Server",
            description: "Create an MCP server that can scrape websites and extract structured data",
            },
            {
            title: "Web Scraping Server",
            description: "Create an MCP server that can scrape websites and extract structured data",
            },
            {
            title: "Web Scraping Server",
            description: "Create an MCP server that can scrape websites and extract structured data",
            },
        ].map((example, index) => (
            <div
            key={index}
            className="bg-white rounded-lg p-[16px] hover:shadow-md transition-all cursor-pointer"
            >
            <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-[16px] text-black">{example.title}</h3>
                    <div className="bg-[#F2F4F7] text-[11px] font-medium flex items-center gap-2 text-gray-500 py-1 px-3 rounded-lg">
                        <Image
                            src={"/store-icon.svg"}
                            alt="data-extraction"
                            width={12}
                            height={12}
                        />
                        Data Extraction
                    </div>
                </div>
                <p className="text-sm text-gray-700 opacity-90 leading-relaxed">{example.description}</p>
            </div>
            </div>
        ))}
        </div>
    </div>
  </main>
  )
}

export default HomePage