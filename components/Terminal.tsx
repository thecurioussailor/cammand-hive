"use client";
import { useState } from "react";

const Terminal = () => {
  const [commands, setCommands] = useState([
    { prompt: "minime@mac", command: "git status", output: "" }
  ]);
  const [currentCommand, setCurrentCommand] = useState("");

  const handleCommandSubmit = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      const newCommands = [
        ...commands,
        { 
          prompt: "minime@mac", 
          command: currentCommand, 
          output: currentCommand === "git status" ? "On branch main\nnothing to commit, working tree clean" : ""
        }
      ];
      setCommands(newCommands);
      setCurrentCommand("");
    }
  };

  const clearTerminal = () => {
    setCommands([]);
    setCurrentCommand("");
  };

  return (
    <div className="h-full p-4">
      <div className="bg-gray-900 rounded-lg h-full flex flex-col overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 rounded-t-lg">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-sm text-gray-300 ml-2">minime@mac — 80 × 24</span>
          </div>
          <button
            onClick={clearTerminal}
            className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 text-xs rounded-md"
          >
            Clear
          </button>
        </div>

        {/* Terminal Content */}
        <div className="flex-1 p-4 font-mono text-sm text-green-400 overflow-y-auto">
          {commands.map((cmd, index) => (
            <div key={index} className="mb-2">
              {cmd.command && (
                <>
                  <div className="flex items-center">
                    <span className="text-green-400">{cmd.prompt}</span>
                    <span className="text-white mx-2">$</span>
                    <span className="text-gray-300">{cmd.command}</span>
                  </div>
                  {cmd.output && (
                    <div className="text-gray-400 mt-1 whitespace-pre-line">
                      {cmd.output}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
          
          {/* Current Input Line */}
          <div className="flex items-center">
            <span className="text-green-400">minime@mac</span>
            <span className="text-white mx-2">$</span>
            <input
              type="text"
              value={currentCommand}
              onChange={(e) => setCurrentCommand(e.target.value)}
              onKeyDown={handleCommandSubmit}
              className="flex-1 bg-transparent text-gray-300 outline-none font-mono"
              placeholder=""
              autoFocus
            />
            <span className="w-2 h-4 bg-green-400 animate-pulse ml-1"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;