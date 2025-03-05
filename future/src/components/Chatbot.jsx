"use client"

import { useState, useEffect, useRef } from "react"
import { MessageSquare, Send, X, Loader2 } from "lucide-react"

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: "system", content: "Hello! I'm your Futura shopping assistant. How can I help you today?" },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!input.trim()) return

    // Add user message to chat
    const userMessage = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // This would be replaced with actual OpenAI API call
      // For demo purposes, we'll simulate a response
      const response = await simulateOpenAIResponse(input)

      // Add assistant response to chat
      setMessages((prev) => [...prev, { role: "system", content: response }])
    } catch (error) {
      console.error("Error getting response:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "system",
          content: "Sorry, I encountered an error. Please try again later.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  // Simulate OpenAI API response (replace with actual API call in production)
  const simulateOpenAIResponse = async (userInput) => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Simple response logic
    const userInputLower = userInput.toLowerCase()

    if (userInputLower.includes("hello") || userInputLower.includes("hi")) {
      return "Hello! How can I help you with your shopping today?"
    } else if (userInputLower.includes("product") || userInputLower.includes("item")) {
      return "We have a great selection of products! Are you looking for something specific like clothing, accessories, or shoes?"
    } else if (userInputLower.includes("price") || userInputLower.includes("cost")) {
      return "Our products range from $79.99 to $249.99. Is there a specific price range you're looking for?"
    } else if (userInputLower.includes("shipping") || userInputLower.includes("delivery")) {
      return "We offer free shipping on orders over $100. Standard shipping takes 3-5 business days."
    } else if (userInputLower.includes("return") || userInputLower.includes("refund")) {
      return "We have a 30-day return policy. You can return any unused items within 30 days for a full refund."
    } else if (userInputLower.includes("thank")) {
      return "You're welcome! Is there anything else I can help you with?"
    } else {
      return "I'm here to help with any questions about our products, shipping, returns, or anything else related to your shopping experience. What would you like to know?"
    }
  }

  return (
    <>
      <button
        className={`chatbot-toggle ${isOpen ? "active" : ""}`}
        onClick={toggleChat}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X className="icon" /> : <MessageSquare className="icon" />}
      </button>

      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h3 className="chatbot-title">Futura Assistant</h3>
            <button className="icon-button small" onClick={toggleChat} aria-label="Close chat">
              <X className="icon-small" />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`chatbot-message ${message.role === "user" ? "user" : "system"}`}>
                {message.content}
              </div>
            ))}
            {isLoading && (
              <div className="chatbot-message system loading">
                <Loader2 className="icon-small spin" />
                <span className="sr-only">Loading response...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="chatbot-input-container" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="chatbot-input"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="chatbot-send-button"
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
            >
              <Send className="icon-small" />
            </button>
          </form>
        </div>
      )}
    </>
  )
}

export default Chatbot

