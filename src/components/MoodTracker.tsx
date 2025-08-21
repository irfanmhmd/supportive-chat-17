import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smile, Meh, Frown, Heart, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface MoodOption {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
}

const moodOptions: MoodOption[] = [
  {
    icon: <Smile size={24} />,
    label: "Great",
    value: "great",
    color: "text-healing hover:bg-healing/10 border-healing/30"
  },
  {
    icon: <Heart size={24} />,
    label: "Good",
    value: "good", 
    color: "text-primary hover:bg-primary/10 border-primary/30"
  },
  {
    icon: <Meh size={24} />,
    label: "Okay",
    value: "okay",
    color: "text-muted-foreground hover:bg-muted/20 border-muted"
  },
  {
    icon: <Frown size={24} />,
    label: "Low",
    value: "low",
    color: "text-warning hover:bg-warning/10 border-warning/30"
  },
  {
    icon: <Zap size={24} />,
    label: "Struggling",
    value: "struggling",
    color: "text-destructive hover:bg-destructive/10 border-destructive/30"
  }
];

const MoodTracker = () => {
  const handleMoodSelect = (mood: string) => {
    console.log('Mood selected:', mood);
    // Here we would typically save to a database or state management
  };

  return (
    <Card className="p-6 bg-gradient-gentle border-primary/20 shadow-soft">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">
          How are you feeling right now?
        </h3>
        <p className="text-sm text-muted-foreground">
          Your feelings matter and tracking them can help identify patterns
        </p>
      </div>
      
      <div className="grid grid-cols-5 gap-3">
        {moodOptions.map((mood) => (
          <Button
            key={mood.value}
            variant="outline"
            onClick={() => handleMoodSelect(mood.value)}
            className={cn(
              "h-16 flex-col gap-2 border-2 transition-gentle hover:shadow-gentle",
              mood.color
            )}
          >
            {mood.icon}
            <span className="text-xs font-medium">{mood.label}</span>
          </Button>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-xs text-muted-foreground">
          Track your mood to better understand your emotional patterns
        </p>
      </div>
    </Card>
  );
};

export default MoodTracker;