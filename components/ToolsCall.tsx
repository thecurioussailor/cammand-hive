"use client";

const ToolsCall = () => {
  const toolCalls = [
    {
      id: 1,
      title: "Swap Tokens",
      description: "Exchange one cryptocurrency for another.",
      baseToken: "SQL",
      quoteToken: "USDC"
    },
    {
      id: 2,
      title: "Swap Tokens", 
      description: "Exchange one cryptocurrency for another.",
      baseToken: "SQL",
      quoteToken: "USDC"
    },
    {
      id: 3,
      title: "Swap Tokens",
      description: "Exchange one cryptocurrency for another.", 
      baseToken: "SQL",
      quoteToken: "USDC"
    }
  ];

  const handleExecute = (toolId: number) => {
    console.log(`Executing tool ${toolId}`);
  };

  return (
    <div className="h-full flex flex-col px-4 pb-6">
      <div className="flex items-center py-6">
        <h3 className="text-[24px] font-semibold text-black">Available Tool Calls</h3>
      </div>
      <div className="flex flex-col gap-4">
        {toolCalls.map((tool) => (
          <div key={tool.id} className="bg-[#FCFCFD] rounded-[12px] border border-gray-200 p-5 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-[18px] font-semibold text-black">
                {tool.title}
              </h3>
              <p className="text-[16px] text-gray-600">
                {tool.description}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="block text-xs font-medium text-gray-800">
                  Base Token:
                </label>
                <div className="bg-gray-100 rounded-[8px] px-3 py-2">
                  <span className="text-sm text-gray-900">{tool.baseToken}</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="block text-xs font-medium text-gray-800">
                  quoteToken:
                </label>
                <div className="bg-gray-100 rounded-[8px] px-3 py-2">
                  <span className="text-sm text-gray-900">{tool.quoteToken}</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => handleExecute(tool.id)}
              className="px-4 py-2 w-[103px] bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-md transition-colors"
            >
              Execute
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsCall;