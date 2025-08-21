"use client";

import Image from "next/image";

const GeneratedCode = () => {
  const codeContent = `// Type some code ->

console.log("OMFG fill1 speCGZ ---");
// 0 4 u t e c A E A M

function updateGutters(cm) {
  var gutters = cm.display.gutters,
      specs = cm.options.gutters;

  removeChildren(gutters);
  
  for (var i = 0; i < specs.length; ++i) {
    var gutterClass = specs[i];
    var gElt = gutters.appendChild(
      elt("div", {
        "class": "CodeMirror-gutter " + gutterClass
      })
    );
    if (gutterClass == "CodeMirror-linenumbers") {
      cm.display.lineGutter = gElt;
      gElt.style.width = (cm.display.lineNumWidth || 1) + "px";
    }
  }
  
  gutters.style.display = i ? "" : "none";
  updateGutterSpace(cm);
}

return false;`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeContent);
  };

  const handleFullscreen = () => {
    // Fullscreen logic would go here
  };

  return (
    <div className="h-full flex flex-col px-4 pb-6">
      <div className="flex items-center py-6">
        <h3 className="text-[24px] font-semibold text-black">MCP Server Code</h3>
      </div>
      
      <div className="flex-1 overflow-auto border rounded-lg bg-[#FCFCFD]">
        <pre className="relative text-sm font-mono leading-relaxed p-6">
          <div className="absolute flex gap-[10px] top-6 right-6">
            <div className="cursor-pointer p-[10px] bg-gray-50 rounded-[8px] border border-gray-200">
              <Image
                  src={"/expand-01.svg"}
                  alt="copy"
                  width={20}
                  height={20}
              />
            </div>
            <div className="cursor-pointer p-[10px] bg-gray-50 rounded-[8px] border border-gray-200">
              <Image
                  src={"/copy-06.svg"}
                  alt="copy"
                  width={20}
                  height={20}
              />
            </div>
          </div>
          <code className="text-gray-800">
            {codeContent.split('\n').map((line, index) => (
              <div key={index} className="flex">
                <span className="text-gray-400 select-none w-8 mr-4 shrink-0">
                  {index + 1}
                </span>
                <span className="flex-1">
                  {line.includes('console.log') ? (
                    <span>
                      <span className="text-blue-600">console</span>
                      <span className="text-gray-800">.</span>
                      <span className="text-blue-600">log</span>
                      <span className="text-gray-800">(</span>
                      <span className="text-green-600">&quot;{line.match(/"([^"]*)"/)?.[1] || ''}&quot;</span>
                      <span className="text-gray-800">);</span>
                    </span>
                  ) : line.includes('function') ? (
                    <span>
                      <span className="text-purple-600">function</span>
                      <span className="text-gray-800"> {line.split('function ')[1]}</span>
                    </span>
                  ) : line.includes('var ') ? (
                    <span>
                      <span className="text-purple-600">var</span>
                      <span className="text-gray-800">{line.split('var')[1]}</span>
                    </span>
                  ) : line.includes('return') ? (
                    <span>
                      <span className="text-purple-600">return</span>
                      <span className="text-gray-800">{line.split('return')[1]}</span>
                    </span>
                  ) : line.includes('//') ? (
                    <span className="text-green-500">{line}</span>
                  ) : line.includes('"') ? (
                    <span>
                      {line.split('"').map((part, i) => 
                        i % 2 === 0 ? (
                          <span key={i} className="text-gray-800">{part}</span>
                        ) : (
                          <span key={i} className="text-green-600">&quot;{part}&quot;</span>
                        )
                      )}
                    </span>
                  ) : (
                    <span className="text-gray-800">{line}</span>
                  )}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default GeneratedCode;