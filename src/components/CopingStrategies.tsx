import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Wind, BookOpen, Mountain, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface Strategy {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: 'breathing' | 'mindfulness' | 'movement' | 'journaling' | 'support';
  icon: React.ReactNode;
  techniques: string[];
}

const strategies: Strategy[] = [
  {
    id: '1',
    title: "Deep Breathing",
    description: "Calm your nervous system with gentle breathing exercises",
    duration: "2-5 min",
    category: 'breathing',
    icon: <Wind className="w-5 h-5" />,
    techniques: ["4-7-8 breathing", "Box breathing", "Belly breathing"]
  },
  {
    id: '2',
    title: "Mindful Moment",
    description: "Ground yourself in the present with simple awareness",
    duration: "3-10 min",
    category: 'mindfulness',
    icon: <Sparkles className="w-5 h-5" />,
    techniques: ["5-4-3-2-1 grounding", "Body scan", "Loving-kindness"]
  },
  {
    id: '3',
    title: "Gentle Movement",
    description: "Release tension and boost mood through movement",
    duration: "5-15 min",
    category: 'movement',
    icon: <Mountain className="w-5 h-5" />,
    techniques: ["Stretching", "Walking", "Progressive muscle relaxation"]
  },
  {
    id: '4',
    title: "Reflective Writing",
    description: "Process emotions through thoughtful journaling",
    duration: "10-20 min",
    category: 'journaling',
    icon: <BookOpen className="w-5 h-5" />,
    techniques: ["Gratitude list", "Emotion labeling", "Future self letter"]
  }
];

const categoryColors = {
  breathing: 'bg-primary/10 text-primary border-primary/30',
  mindfulness: 'bg-healing/10 text-healing border-healing/30',
  movement: 'bg-warning/10 text-warning border-warning/30',
  journaling: 'bg-accent/20 text-accent-foreground border-accent/30',
  support: 'bg-destructive/10 text-destructive border-destructive/30'
};

const CopingStrategies = () => {
  const handleStrategyClick = (strategy: Strategy) => {
    console.log('Strategy selected:', strategy.title);
    // Here we would typically navigate to a detailed strategy page or start a guided session
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Gentle Coping Strategies
        </h3>
        <p className="text-sm text-muted-foreground">
          Choose what feels right for you in this moment
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {strategies.map((strategy) => (
          <Card 
            key={strategy.id}
            className="p-4 hover:shadow-gentle transition-gentle cursor-pointer border-2 border-muted hover:border-primary/30 bg-gradient-gentle"
            onClick={() => handleStrategyClick(strategy)}
          >
            <div className="flex items-start gap-3 mb-3">
              <div className={cn(
                "p-2 rounded-lg border-2",
                categoryColors[strategy.category]
              )}>
                {strategy.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-foreground mb-1">
                  {strategy.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  {strategy.description}
                </p>
                <Badge variant="secondary" className="text-xs">
                  {strategy.duration}
                </Badge>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Techniques included:
              </p>
              <div className="flex flex-wrap gap-1">
                {strategy.techniques.map((technique, index) => (
                  <Badge 
                    key={index}
                    variant="outline" 
                    className="text-xs border-primary/20 text-primary/80"
                  >
                    {technique}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Crisis Support */}
      <Card className="p-4 bg-gradient-to-r from-destructive/5 to-warning/5 border-2 border-destructive/20">
        <div className="flex items-center gap-3 mb-2">
          <Phone className="w-5 h-5 text-destructive" />
          <h4 className="font-medium text-foreground">Need immediate support?</h4>
        </div>
        <p className="text-sm text-muted-foreground mb-3">
          If you're in crisis or having thoughts of self-harm, please reach out for professional help immediately.
        </p>
        <div className="flex flex-wrap gap-2">
          <Button 
            variant="outline" 
            size="sm"
            className="border-destructive/30 text-destructive hover:bg-destructive/10"
          >
            Crisis Hotline: 988
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="border-primary/30 text-primary hover:bg-primary/10"
          >
            Text HOME to 741741
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CopingStrategies;