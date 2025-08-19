"use client"
import Image from "next/image"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useEffect, useRef, useState, useCallback } from "react"
import { ChevronDown } from "lucide-react"

const placeholderTexts = [
  "Describe the MCP server you want to create...",
  "Build a custom API integration server...",
  "Design a data processing pipeline...",
  "Create a monitoring and alerting system...",
  "Develop a file management solution...",
  "Build a database connection server...",
]

const HomePage = () => {
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [isFocused, setIsFocused] = useState(false)
  const [hasUserInput, setHasUserInput] = useState(false)
  const typewriterRef = useRef(null)
  const textareaRef = useRef(null)
  const [inputValue, setInputValue] = useState("")

  const startTypewriter = useCallback(() => {
    if (isFocused || hasUserInput) {
      setDisplayedText("")
      setIsTyping(false)
      return
    }

    const currentText = placeholderTexts[currentPlaceholderIndex]
    let charIndex = 0
    setDisplayedText("")
    setIsTyping(true)

    const typeCharacter = () => {
      if (isFocused || hasUserInput) {
        setDisplayedText("")
        setIsTyping(false)
        return
      }

      if (charIndex < currentText.length) {
        setDisplayedText(currentText.slice(0, charIndex + 1))
        charIndex++
        typewriterRef.current = setTimeout(typeCharacter, 50)
      } else {
        setIsTyping(false)
        typewriterRef.current = setTimeout(() => {
          setCurrentPlaceholderIndex((prev) => (prev + 1) % placeholderTexts.length)
        }, 2000)
      }
    }

    typeCharacter()
  }, [currentPlaceholderIndex, isFocused, hasUserInput])

  useEffect(() => {
    // Clear any existing timeout
    if (typewriterRef.current) {
      clearTimeout(typewriterRef.current)
      typewriterRef.current = null
    }

    startTypewriter()

    return () => {
      if (typewriterRef.current) {
        clearTimeout(typewriterRef.current)
        typewriterRef.current = null
      }
    }
  }, [startTypewriter])

  const handleInputChange = useCallback((e) => {
    const value = e.target.value
    setInputValue(value)
    setHasUserInput(value.length > 0)
  }, [])

  const handleFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleBlur = useCallback(() => {
    setIsFocused(false)
  }, [])

  return (
    <main className="w-[1217px] flex flex-col mx-auto gap-14">
      {/* Hero Section */}
      <div className="flex flex-col items-center gap-[60px] pt-[192px] max-w-[1010px] mx-auto">
        <div className="text-center w-full">
          <h1 className="text-[40px] font-semibold text-[#14110E] mb-6">
            Build MCP Server In Minutes
            <span className="text-orange-500">.</span>
          </h1>
          <p className="text-[16px] font-normal text-[#667085]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>

        {/* Main input box with integrated controls */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 max-w-[802px] w-full overflow-hidden relative">
          {/* Textarea with typewriting effect */}
          <div className="relative">
            <Textarea
              ref={textareaRef}
              value={inputValue}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder=""
              className="h-40 resize-none focus-visible:ring-orange-500 border-0 rounded-2xl pr-4 pb-20 pt-6 px-6 text-base leading-relaxed"
            />
            {inputValue.length === 0 && !isFocused && (
              <div className="absolute top-6 left-6 pointer-events-none text-gray-500 text-base">
                <span className="transition-opacity duration-300">{displayedText}</span>
                {isTyping && <span className="inline-block w-0.5 h-5 bg-orange-500 ml-1 animate-pulse"></span>}
              </div>
            )}

            {/* Controls positioned inside the textarea */}
            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between gap-4">
              <div className="relative">
                <Select defaultValue="claude-sonnet-4">
                  <SelectTrigger className="w-[200px] h-9 bg-gray-50/80 backdrop-blur-sm border-gray-200/60 hover:bg-gray-100/80 transition-colors text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full animate-pulse"></div>
                      <SelectValue placeholder="Choose a model" />
                    </div>
                    <ChevronDown className="w-3 h-3 transition-transform duration-200" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="claude-sonnet-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        Claude Sonnet 4
                      </div>
                    </SelectItem>
                    <SelectItem value="claude-sonnet-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        Claude Sonnet 3
                      </div>
                    </SelectItem>
                    <SelectItem value="gpt-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        GPT-4
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="h-9 px-4 flex items-center gap-2 bg-[#FDB022] hover:bg-[#FDB022]/90 text-[#101323] font-medium rounded-lg text-sm shadow-sm">
                Start Creating
                <Image src="/arrow-up-right.svg" alt="arrow-right" width={16} height={16} />
              </Button>
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