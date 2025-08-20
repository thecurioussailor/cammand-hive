"use client";
import Image from "next/image";
import { useState } from "react";
import GeneratedCode from "@/components/GeneratedCode";
import ToolsCall from "@/components/ToolsCall";
import EnvironmentVariables from "@/components/EnvironmentVariables";
import Terminal from "@/components/Terminal";
import MCPProxyServer from "@/components/MCPProxyServer";

const ChatPage = () => {
  const [activeTab, setActiveTab] = useState("Generated Code");
  const [messages, setMessages] = useState([
    {
      type: "user",
      content: "How can I interact with my PostgreSQL database securely?"
    },
    {
      type: "assistant", 
      content: "You can use several secure tools to interact with your PostgreSQL database. For example, you can execute safe SELECT queries with automatic security validation.\n\nThere's a get_table_schema tool to retrieve detailed schema information for any table, and list_tables to list all tables within a schema.\n\nIf you'd like to analyze query execution without actually running the query, the get_query_plan function can help."
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const tabs = ["Generated Code", "Tool Calls", "Environmental Variables", "Terminal", "MCP Proxy Servers"];

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { type: "user", content: inputValue }]);
      setInputValue("");
    }
  };

  return (
    <div className="flex h-screen pt-[72px]">
      {/* Left Chat Panel */}
      <div className="fixed left-0 top-[72px] w-[491px] h-[calc(100vh-72px)] bg-[#F9FAFB] flex flex-col">
        {/* Chat Header */}
        <div className="px-4 py-[18px] flex justify-between items-center border-b border-gray-200">
            <span className="text-[16px] font-semibold text-gray-800">Web scraping MCP</span>
            <button>
                <Image
                    src={"/menudots.svg"}
                    alt="dots-vertical"
                    width={20}
                    height={20}
                />
            </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[80%] rounded-lg p-3 ${
                message.type === "user" 
                  ? "bg-gray-100 text-gray-800" 
                  : "text-gray-800"
              }`}>
                <div className="text-sm whitespace-pre-wrap">{message.content}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4">
          <div className="flex flex-col bg-white border p-4 gap-2.5 border-gray-200 shadow-sm rounded-[12px] items-center">
            <div className="flex-1 relative w-full">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Reply"
                className="w-full h-10 px-3 pr-10 rounded-md focus:ring-0 focus-visible:border-none focus-visible:ring-0 text-sm"
              />
            </div>
            <div className="flex items-center justify-between gap-2 w-full">
              <select className="h-10 px-3 border border-gray-300 rounded-md text-sm focus:border-orange-500 focus:ring-orange-500">
                <option>Claude Sonnet 4</option>
                <option>Claude Sonnet 3</option>
                <option>GPT-4</option>
              </select>
              <button
                onClick={handleSendMessage}
                className="h-10 w-10 bg-[#FDB022] hover:bg-[#FDB022]/80 text-white rounded-md flex items-center justify-center"
              >
                <Image
                    src={"/arrow-up-right.svg"}
                    alt="send"
                    width={20}
                    height={20}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel with Tabs */}
      <div className="w-[calc(100%-491px)] overflow-x-hidden flex flex-col bg-[#EAECF04D] pr-[16px] ml-[491px]">
        {/* Tab Header */}
        <div className="border-b border-gray-200">
          <div className="flex items-center">
            {tabs.map((tab) => (
                <div key={tab} className="border-r border-gray-300 hover:bg-gray-200">  
                <button
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-[16px] text-[16px] font-medium transition-colors ${
                    activeTab === tab
                        ? "border-gray-600 bg-gray-200 border-b-4 text-gray-600 font-semibold"
                        : "border-transparent text-gray-500 hover:text-gray-700 "
                    }`}
                >
                    {tab}
                </button>
              </div>
            ))}
            <div className="ml-auto">
              <button className="px-4 py-[10px] bg-[#FDB022] hover:bg-[#FDB022]/80 text-black text-[16px] font-semibold rounded-lg">
                Deploy
              </button>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="flex-1 p-4">
          <div className="h-full bg-white rounded-lg border border-gray-200 p-4">
            {activeTab === "Generated Code" && (
              <div className="text-gray-500">
                <GeneratedCode />
              </div>
            )}
            {activeTab === "Tool Calls" && (
              <div className="text-gray-500">
                <ToolsCall />
              </div>
            )}
            {activeTab === "Environmental Variables" && (
              <div className="text-gray-500">
                <EnvironmentVariables />
              </div>
            )}
            {activeTab === "Terminal" && (
              <div className="text-gray-500">
                <Terminal />
              </div>
            )}
            {activeTab === "MCP Proxy Servers" && (
              <div className="text-gray-500">
                <MCPProxyServer />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;