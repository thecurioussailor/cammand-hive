import Image from "next/image";

const servers = new Array(6).fill({
  title: "Web Scraping Server",
  description:
    "Create an MCP server that can scrape websites and extract structured data.",
  totalCalls: "1,256",
  invocations: "1,256",
});

const MyServersPage = () => {
  return (
    <section className="pt-[122px] flex flex-col gap-10 items-center">
      <div className="flex items-center justify-between w-[1216px]">
        <div className="text-[32px] text-[#14110E] font-semibold">My Servers</div>
        <div className="rounded-[80px] bg-white flex items-center gap-2 px-4 py-2 border border-gray-200">
          <Image
            src={"/filter-lines.svg"}
            alt="sort-icon"
            width={20}
            height={20}
          />
          <span className="text-[14px] text-[#1D2939] font-medium">Sort Servers</span>
        </div>
      </div>
      <div className="w-[1216px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servers.map((srv, i) => (
          <div
            key={i}
            className="bg-white rounded-lg p-4 border-gray-200 flex flex-col gap-4 hover:border-orange-200 hover:shadow-md transition-all"
          >
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <h3 className="text-[22px] font-semibold text-black">
                        {srv.title}
                    </h3>
                    <div className="rounded-sm border text-gray-600 border-gray-200 bg-gray-50 p-1.5">
                        <Image
                            src={"/edit.svg"}
                            alt="edit"
                            width={14}
                            height={14}
                        />
                    </div>
                </div>
                <p className="mt-1 text-[14px] leading-5 text-gray-700">
                {srv.description}
                </p>
            </div>

            <div className="flex items-center justify-between gap-4">
                <div className="flex flex-col gap-2 w-1/2">
                    <div className="rounded-md bg-gray-50 p-2 flex items-center gap-2">
                        <Image
                            src={"/totalcalls.svg"}
                            alt="totalcalls"
                            width={24}
                            height={24}
                        />
                       
                        <div className="text-[18px] font-semibold text-gray-800">
                            {srv.totalCalls}
                        </div>
                        <div className="text-[12px] text-gray-500 leading-none">
                            Total calls
                        </div>
                    </div>
                    <div className="rounded-md bg-gray-50 p-2 flex items-center gap-2">
                    <Image
                        src={"/invocation.svg"}
                        alt="invocations"
                        width={24}
                        height={24}
                    />
                    <div className="text-[18px] font-semibold text-gray-800">
                        {srv.invocations}
                    </div>
                    <div className="text-[12px] text-gray-500 leading-none">
                        Invocations
                    </div>
                    </div>
              </div>
              <div className="h-full w-1/2">
                    <Image
                        src={"/linechart.svg"}
                        alt="linechart"
                        width={14}
                        height={14}
                        className="w-full h-full"
                    />
                </div>                
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyServersPage