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
    <div className="h-full">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Available Tool Calls</h2>
      
      <div className="space-y-6">
        {toolCalls.map((tool) => (
          <div key={tool.id} className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="mb-3">
              <h3 className="text-base font-semibold text-gray-900 mb-1">
                {tool.title}
              </h3>
              <p className="text-sm text-gray-600">
                {tool.description}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">
                  Base Token:
                </label>
                <div className="bg-gray-50 border border-gray-200 rounded-md px-3 py-2">
                  <span className="text-sm text-gray-900">{tool.baseToken}</span>
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">
                  quoteToken:
                </label>
                <div className="bg-gray-50 border border-gray-200 rounded-md px-3 py-2">
                  <span className="text-sm text-gray-900">{tool.quoteToken}</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => handleExecute(tool.id)}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-md transition-colors"
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