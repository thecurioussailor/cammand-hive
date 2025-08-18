"use client";

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
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">MCP Server Code</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={handleFullscreen}
            className="p-1.5 hover:bg-gray-100 rounded-md"
            title="Fullscreen"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
            </svg>
          </button>
          <button
            onClick={handleCopy}
            className="p-1.5 hover:bg-gray-100 rounded-md"
            title="Copy code"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="flex-1 overflow-auto bg-gray-50">
        <pre className="p-4 text-sm font-mono leading-relaxed">
          <code className="text-gray-800">
            {codeContent.split('\n').map((line, index) => (
              <div key={index} className="flex">
                <span className="text-gray-400 select-none w-8 text-right mr-4 shrink-0">
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