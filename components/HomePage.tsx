"use client"
import Image from "next/image"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useEffect, useRef, useState, useCallback } from "react"

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
  const [showVideoModal, setShowVideoModal] = useState(false)
  const typewriterRef = useRef<NodeJS.Timeout | null>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
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

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
    <>
      <main className="w-full max-w-[1217px] flex flex-col mx-auto gap-14 px-4 lg:px-0">
        {/* Hero Section */}
        <div className="flex flex-col items-center gap-12 lg:gap-[60px] pt-32 lg:pt-[192px] max-w-[1010px] mx-auto">
          <div className="text-center w-full">
            <h1 className="text-4xl lg:text-[40px] font-semibold text-[#14110E] mb-6 leading-tight">
              Build MCP Server In Minutes
              <span className="text-orange-500">.</span>
            </h1>
            <p className="text-base lg:text-[16px] font-normal text-[#667085] max-w-2xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>

          {/* Main input box - Desktop version unchanged */}
          <div className="hidden lg:block bg-white rounded-2xl shadow-sm border border-gray-200 max-w-[802px] w-full overflow-hidden relative">
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

              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between gap-4">
                <div className="relative">
                  <Select defaultValue="claude-sonnet-4">
                    <SelectTrigger className="w-[200px] h-9 bg-gray-50/80 backdrop-blur-sm border-gray-200/60 hover:bg-gray-100/80 transition-colors text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full animate-pulse"></div>
                        <SelectValue placeholder="Choose a model" />
                      </div>
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

          {/* Mobile input box - Redesigned for better UX */}
          <div className="lg:hidden w-full space-y-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 w-full overflow-hidden">
              <div className="relative">
                <Textarea
                  value={inputValue}
                  onChange={handleInputChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder=""
                  className="h-32 resize-none focus-visible:ring-orange-500 border-0 rounded-2xl px-4 py-4 text-base leading-relaxed"
                />
                {inputValue.length === 0 && !isFocused && (
                  <div className="absolute top-4 left-4 pointer-events-none text-gray-500 text-base">
                    <span className="transition-opacity duration-300">{displayedText}</span>
                    {isTyping && <span className="inline-block w-0.5 h-5 bg-orange-500 ml-1 animate-pulse"></span>}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile controls - Separated for better UX */}
            <div className="flex flex-col gap-3">
              <Select defaultValue="claude-sonnet-4">
                <SelectTrigger className="w-full h-12 bg-gray-50 border-gray-200 text-base">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full animate-pulse"></div>
                    <SelectValue placeholder="Choose a model" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="claude-sonnet-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Claude Sonnet 4
                    </div>
                  </SelectItem>
                  <SelectItem value="claude-sonnet-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Claude Sonnet 3
                    </div>
                  </SelectItem>
                  <SelectItem value="gpt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      GPT-4
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>

              <Button className="h-12 w-full flex items-center justify-center gap-3 bg-[#FDB022] hover:bg-[#FDB022]/90 text-[#101323] font-medium rounded-lg text-base shadow-sm">
                Start Creating
                <Image src="/arrow-up-right.svg" alt="arrow-right" width={18} height={18} />
              </Button>
            </div>
          </div>
        </div>

        {/* Demo Video Button */}
        <div className="flex flex-col items-center gap-8">  
          <button 
            onClick={() => setShowVideoModal(true)}
            className="h-12 px-6 lg:px-[18px] flex items-center gap-2 py-[10px] border-[#D0D5DD] w-full max-w-[208px] border rounded-lg text-[#333F53] hover:bg-gray-50 bg-transparent transition-colors"
          >
            <Image
              src={"/play-icon.svg"}
              alt="play-icon"
              width={20}
              height={20}
            />
            Watch Demo Video
          </button>

          <div className="text-[#98A2B3] text-[14px] font-normal">
            or
          </div>

          <div className="text-center">
            <h2 className="text-xl lg:text-[22px] font-medium text-gray-600 flex items-center justify-center gap-2">
              <Image
                src={"/sparkle.svg"}
                alt="sparkle"
                width={24}
                height={24}
              />
              Try our example prompts
            </h2>
          </div>

          {/* Example Cards Grid - Better mobile layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 w-full">
            {[
              {
                title: "Web Scraping Server",
                description: "Create an MCP server that can scrape websites and extract structured data",
              },
              {
                title: "API Integration Server", 
                description: "Build a server that connects to external APIs and processes responses",
              },
              {
                title: "Database Connector",
                description: "Develop an MCP server for seamless database operations and queries",
              },
              {
                title: "File Processing Server",
                description: "Create a server that handles file uploads, processing, and transformations",
              },
              {
                title: "Monitoring System",
                description: "Build a comprehensive monitoring and alerting server for your applications",
              },
              {
                title: "Authentication Server",
                description: "Develop a secure authentication and authorization MCP server",
              },
            ].map((example, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 lg:p-[16px] hover:shadow-md transition-all cursor-pointer border border-gray-100 hover:border-gray-200"
                onClick={() => {
                  setInputValue(example.description)
                  setHasUserInput(true)
                  textareaRef.current?.focus()
                }}
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold text-base lg:text-[16px] text-black leading-tight flex-1">{example.title}</h3>
                    <div className="bg-[#F2F4F7] text-[11px] font-medium flex items-center gap-2 text-gray-500 py-1.5 px-3 rounded-lg shrink-0">
                      <Image
                        src={"/store-icon.svg"}
                        alt="data-extraction"
                        width={12}
                        height={12}
                      />
                      <span className="whitespace-nowrap">Data Extraction</span>
                    </div>
                  </div>
                  <p className="text-sm lg:text-sm text-gray-700 opacity-90 leading-relaxed">{example.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Dialog open={showVideoModal} onOpenChange={setShowVideoModal}>
        <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
          
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
              title="Command Hive Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

        </DialogContent>
      </Dialog>
    </>
  )
}

export default HomePage