"use client";
import Image from "next/image";
import { useState } from "react";

const MCPProxyServer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const mcpServers = [
    {
      id: 1,
      name: "Web Scraping Server",
      description: "Create an MCP server that can scrape websites and extract structured data.",
      icon: "/logo.svg", // Using available icon
      connected: false
    },
    {
      id: 2,
      name: "Web Scraping Server",
      description: "Create an MCP server that can scrape websites and extract structured data.",
      icon: "/logo.svg",
      connected: false
    },
    {
      id: 3,
      name: "Web Scraping Server", 
      description: "Create an MCP server that can scrape websites and extract structured data.",
      icon: "/logo.svg",
      connected: false
    },
    {
      id: 4,
      name: "Web Scraping Server",
      description: "Create an MCP server that can scrape websites and extract structured data.",
      icon: "/logo.svg",
      connected: false
    }
  ];

  const filteredServers = mcpServers.filter(server =>
    server.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    server.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleConnect = (serverId: number) => {
    console.log(`Connecting to server ${serverId}`);
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recommended MCP Servers</h2>
        
        {/* Search Bar */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search MCP Servers"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-sm"
          />
        </div>
        
        {/* Sort Button */}
        <div className="flex justify-end mt-3">
          <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
            </svg>
            Sort Servers
          </button>
        </div>
      </div>

      {/* Server List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {filteredServers.map((server) => (
          <div key={server.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3 flex-1">
                {/* Server Icon */}
                <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Image
                    src={server.icon}
                    alt={server.name}
                    width={24}
                    height={24}
                    className="filter invert"
                  />
                </div>
                
                {/* Server Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-gray-900 mb-1">
                    {server.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {server.description}
                  </p>
                </div>
              </div>
              
              {/* Connect Button */}
              <button
                onClick={() => handleConnect(server.id)}
                className="ml-4 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium rounded-md transition-colors flex-shrink-0"
              >
                Connect
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Empty State */}
      {filteredServers.length === 0 && (
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="text-center">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No servers found</h3>
            <p className="mt-1 text-sm text-gray-500">Try adjusting your search terms.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MCPProxyServer;