import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, Bot, User, Heart, Lightbulb, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { findBestResponse, ChatResponse } from "@/data/chatbotDataset";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
  emotion?: 'depressed' | 'anxious' | 'stressed' | 'lonely' | 'overwhelmed' | 'angry' | 'hopeless' | 'confused' | 'positive' | 'neutral';
  whatToDo?: string;
  whatToAvoid?: string;
}

const emotionColors = {
  depressed: 'text-primary border-primary/30 bg-primary/5',
  anxious: 'text-warning border-warning/30 bg-warning/5',
  stressed: 'text-destructive border-destructive/30 bg-destructive/5',
  lonely: 'text-accent-foreground border-accent/30 bg-accent/10',
  overwhelmed: 'text-destructive border-destructive/40 bg-destructive/10',
  angry: 'text-destructive border-destructive/30 bg-destructive/5',
  hopeless: 'text-muted-foreground border-muted bg-muted/10',
  confused: 'text-accent-foreground border-accent/30 bg-accent/5',
  positive: 'text-healing border-healing/30 bg-healing/10',
  neutral: 'text-muted-foreground border-muted bg-muted/5'
};

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm MindEase, your compassionate AI companion. I'm here to provide you with a safe, confidential space where you can share whatever is on your mind. Whether you're having a difficult day or just need someone to listen, I'm here to support you with empathy and understanding. How are you feeling today?",
      isUser: false,
      timestamp: new Date(),
      emotion: 'neutral'
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const generateMindEaseResponse = (userMessage: string): { content: string; emotion: any; whatToDo?: string; whatToAvoid?: string } => {
    const responseData = findBestResponse(userMessage);
    
    if (!responseData) {
      return {
        content: "I hear you, and I want you to know that whatever you're experiencing is valid. Sometimes it helps just to have someone listen. Would you like to tell me more about what's on your mind right now?",
        emotion: 'neutral'
      };
    }

    // Select random responses from the dataset
    const mainResponse = responseData.responses.main[Math.floor(Math.random() * responseData.responses.main.length)];
    const whatToDo = responseData.responses.whatToDo[Math.floor(Math.random() * responseData.responses.whatToDo.length)];
    const whatToAvoid = responseData.responses.whatToAvoid[Math.floor(Math.random() * responseData.responses.whatToAvoid.length)];

    return {
      content: mainResponse,
      emotion: responseData.emotion,
      whatToDo,
      whatToAvoid
    };
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI processing delay for more natural conversation flow
    setTimeout(() => {
      const responseData = generateMindEaseResponse(input);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: responseData.content,
        isUser: false,
        timestamp: new Date(),
        emotion: responseData.emotion,
        whatToDo: responseData.whatToDo,
        whatToAvoid: responseData.whatToAvoid
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full max-h-[600px]">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex animate-fade-in",
              message.isUser ? "justify-end" : "justify-start"
            )}
          >
            <div
              className={cn(
                "flex items-start gap-3 max-w-[85%]",
                message.isUser ? "flex-row-reverse" : "flex-row"
              )}
            >
              <div className={cn(
                "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-gentle",
                message.isUser 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-gradient-gentle border-2 border-primary/20"
              )}>
                {message.isUser ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className="space-y-2 flex-1">
                <Card className={cn(
                  "p-4 shadow-soft transition-gentle hover:shadow-gentle",
                  message.isUser 
                    ? "bg-primary text-primary-foreground" 
                    : cn(
                        "bg-card border-2",
                        message.emotion && emotionColors[message.emotion]
                      )
                )}>
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </Card>
                
                {/* Additional guidance cards for AI responses */}
                {!message.isUser && message.whatToDo && (
                  <Card className="p-3 bg-healing/5 border border-healing/20 ml-2">
                    <div className="flex items-start gap-2">
                      <Lightbulb size={14} className="text-healing mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-medium text-healing mb-1">What might help:</p>
                        <p className="text-xs text-healing/80 leading-relaxed">{message.whatToDo}</p>
                      </div>
                    </div>
                  </Card>
                )}
                
                {!message.isUser && message.whatToAvoid && (
                  <Card className="p-3 bg-warning/5 border border-warning/20 ml-2">
                    <div className="flex items-start gap-2">
                      <AlertTriangle size={14} className="text-warning mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-medium text-warning mb-1">Gentle reminders:</p>
                        <p className="text-xs text-warning/80 leading-relaxed">{message.whatToAvoid}</p>
                      </div>
                    </div>
                  </Card>
                )}
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start animate-fade-in">
            <div className="flex items-start gap-3 max-w-[85%]">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-gradient-gentle border-2 border-primary/20 shadow-gentle">
                <Bot size={16} />
              </div>
              <Card className="p-4 bg-card border-2 border-muted shadow-soft">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                  <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border bg-gradient-gentle">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Share what's on your mind..."
            className="flex-1 border-primary/20 focus:border-primary/40 bg-background/80 backdrop-blur-sm transition-gentle"
          />
          <Button 
            onClick={handleSend}
            size="sm"
            className="bg-primary hover:bg-primary/90 shadow-soft transition-gentle hover:shadow-gentle"
          >
            <Send size={16} />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          <Heart size={12} className="inline mr-1" />
          MindEase provides confidential support • Not a replacement for professional care
        </p>
      </div>
    </div>
  );
};

export default ChatInterface;