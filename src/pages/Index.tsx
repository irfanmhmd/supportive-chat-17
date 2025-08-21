import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChatInterface from "@/components/ChatInterface";
import MoodTracker from "@/components/MoodTracker";
import CopingStrategies from "@/components/CopingStrategies";
import { MessageCircle, Heart, Lightbulb, Shield, Brain } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("chat");

  return (
    <div className="min-h-screen bg-gradient-gentle">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-calm flex items-center justify-center shadow-soft">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-foreground">MindEase</h1>
                <p className="text-sm text-muted-foreground">Your empathetic AI mental health companion</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Private & Secure</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Section */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Welcome to your safe space with MindEase
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm MindEase, your compassionate AI companion designed to provide empathetic support and guidance. 
              I'm here to listen, understand, and support you through whatever you're experiencing. 
              Your mental health matters, and you're taking a brave step by being here.
            </p>
          </div>

          {/* Main Interface */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6 bg-background/60 backdrop-blur-sm border border-border/50">
              <TabsTrigger 
                value="chat" 
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <MessageCircle size={16} />
                Chat
              </TabsTrigger>
              <TabsTrigger 
                value="mood" 
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Heart size={16} />
                Mood
              </TabsTrigger>
              <TabsTrigger 
                value="strategies" 
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Lightbulb size={16} />
                Strategies
              </TabsTrigger>
            </TabsList>

            <TabsContent value="chat" className="mt-0">
              <Card className="h-[600px] bg-background/80 backdrop-blur-sm border-2 border-primary/20 shadow-warm">
                <ChatInterface />
              </Card>
            </TabsContent>

            <TabsContent value="mood" className="mt-0">
              <div className="space-y-6">
                <MoodTracker />
                <Card className="p-6 bg-background/80 backdrop-blur-sm border-primary/20 shadow-soft">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Understanding Your Mood Patterns
                  </h3>
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <p>
                      Tracking your mood helps you become more aware of your emotional patterns and triggers. 
                      This self-awareness is the first step toward better mental health management.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div className="p-4 rounded-lg bg-healing/5 border border-healing/20">
                        <h4 className="font-medium text-healing mb-2">Benefits of Mood Tracking</h4>
                        <ul className="space-y-1 text-xs">
                          <li>• Identify patterns and triggers</li>
                          <li>• Monitor progress over time</li>
                          <li>• Better communication with healthcare providers</li>
                          <li>• Increased self-awareness</li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                        <h4 className="font-medium text-primary mb-2">Tips for Accurate Tracking</h4>
                        <ul className="space-y-1 text-xs">
                          <li>• Check in with yourself regularly</li>
                          <li>• Be honest about your feelings</li>
                          <li>• Note any significant events</li>
                          <li>• Look for patterns over weeks</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="strategies" className="mt-0">
              <CopingStrategies />
            </TabsContent>
          </Tabs>

          {/* Footer Note */}
          <Card className="mt-8 p-4 bg-background/60 backdrop-blur-sm border border-border/50">
            <div className="text-center text-sm text-muted-foreground">
              <p className="mb-2">
                <strong>Important:</strong> MindEase is designed to provide emotional support and coping strategies. 
                It is not a substitute for professional mental health care.
              </p>
              <p>
                If you're experiencing a mental health crisis, please contact a healthcare professional, 
                call 988 (Suicide & Crisis Lifeline), or visit your nearest emergency room.
              </p>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;