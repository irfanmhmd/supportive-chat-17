export interface ChatResponse {
  triggers: string[];
  responses: {
    main: string[];
    whatToDo: string[];
    whatToAvoid: string[];
  };
  emotion: 'depressed' | 'anxious' | 'stressed' | 'lonely' | 'overwhelmed' | 'angry' | 'hopeless' | 'confused' | 'positive' | 'neutral';
}

export const chatbotDataset: ChatResponse[] = [
  {
    triggers: ["i'm depressed", "i feel depressed", "depression", "i'm sad", "feeling down", "feel worthless", "no energy", "can't get out of bed"],
    responses: {
      main: [
        "I hear that you're feeling depressed, and I want you to know that your feelings are completely valid. Depression can feel overwhelming, but you're not alone in this experience, and there are gentle steps we can take together to help you feel more supported.",
        "Thank you for sharing something so personal with me. Depression affects many people, and recognizing these feelings shows incredible self-awareness. You've taken an important step by reaching out, and I'm here to support you through this difficult time.",
        "I understand that you're going through a really tough period right now. Depression can make everything feel heavy and exhausting, but please know that these feelings, while very real, are temporary and there are ways to gradually feel better."
      ],
      whatToDo: [
        "Try to maintain small daily routines, even if it's just making your bed or having one nutritious meal. Consider gentle activities like taking a short walk outside, calling a trusted friend, or practicing deep breathing exercises for just 5 minutes.",
        "Focus on basic self-care: ensure you're getting adequate sleep, eating regular meals, and spending time in natural light. Journaling your thoughts or engaging in creative activities like drawing or music can also help process your emotions.",
        "Reach out to your support network - whether that's family, friends, or a mental health professional. Consider joining support groups, practicing mindfulness meditation, or engaging in gentle physical activities that bring you small moments of joy."
      ],
      whatToAvoid: [
        "Try not to isolate yourself completely or stay in bed all day. Avoid making major life decisions while feeling depressed, and be gentle with yourself about negative self-talk or self-criticism.",
        "Limit alcohol and recreational drugs as they can worsen depression symptoms. Avoid comparing yourself to others on social media, and try not to overwhelm yourself with too many commitments or unrealistic expectations.",
        "Don't ignore your feelings or try to 'push through' without support. Avoid engaging in harmful behaviors, and remember that it's okay to say no to activities that feel too demanding right now."
      ]
    },
    emotion: 'depressed'
  },
  {
    triggers: ["i'm anxious", "feel anxious", "anxiety", "worried", "can't stop worrying", "panic", "stressed out", "overwhelmed", "racing thoughts"],
    responses: {
      main: [
        "I can sense that anxiety is making things feel really difficult right now. Anxiety can create a cycle of worry that feels impossible to break, but I want you to know that what you're experiencing is very common, and there are effective ways to manage these overwhelming feelings.",
        "Thank you for trusting me with your anxiety. Those racing thoughts and worried feelings can be exhausting, but you're showing courage by acknowledging them. Let's work together to find some strategies that can help bring you back to a calmer state of mind.",
        "Anxiety can make everything feel urgent and overwhelming, but you're safe right now in this moment. Your body and mind are trying to protect you, even though it doesn't feel helpful. There are gentle techniques we can explore to help you feel more grounded and peaceful."
      ],
      whatToDo: [
        "Practice deep breathing exercises: inhale for 4 counts, hold for 7, exhale for 8. Try progressive muscle relaxation by tensing and releasing different muscle groups. Grounding techniques like naming 5 things you can see, 4 you can touch, 3 you can hear can help bring you back to the present moment.",
        "Establish a calming routine before bed and upon waking. Consider gentle exercise like yoga or walking, limit caffeine intake, and practice mindfulness meditation. Writing down your worries in a journal can help externalize anxious thoughts.",
        "Connect with supportive people in your life and consider speaking with a counselor or therapist. Create a 'worry time' - set aside 15 minutes daily to acknowledge anxious thoughts, then redirect your attention to present-moment activities that bring you peace."
      ],
      whatToAvoid: [
        "Try not to catastrophize or assume the worst-case scenario will happen. Avoid excessive caffeine, alcohol, or stimulants that can increase anxiety. Don't try to control every aspect of uncertain situations, and be patient with yourself during the healing process.",
        "Limit exposure to news or social media if they trigger your anxiety. Avoid avoiding all situations that make you anxious, as this can increase fear over time. Don't dismiss your feelings or tell yourself you 'shouldn't' feel anxious.",
        "Try not to make important decisions while in a highly anxious state. Avoid isolating yourself from support systems, and don't engage in negative self-talk about having anxiety - it's a normal human response that can be managed with proper tools."
      ]
    },
    emotion: 'anxious'
  },
  {
    triggers: ["i'm stressed", "feel stressed", "stress", "pressure", "too much", "can't handle", "burnout", "exhausted"],
    responses: {
      main: [
        "I can hear how much pressure you're under right now, and that stress is taking a real toll on you. Stress is your body's natural response to demands and challenges, but when it becomes overwhelming, it's important to take steps to care for yourself and find relief.",
        "It sounds like you're carrying a heavy load right now, and that feeling of being overwhelmed is completely understandable. Stress affects all of us differently, but recognizing when you need support is a sign of wisdom and self-awareness, not weakness.",
        "Thank you for sharing how stressed you're feeling. When we're under pressure, it can feel like everything is urgent and critical, but taking time to pause and breathe is not selfish - it's necessary for your wellbeing and ability to handle challenges effectively."
      ],
      whatToDo: [
        "Prioritize your tasks by urgency and importance - focus on what truly needs immediate attention. Take regular breaks throughout your day, even if just for 5-10 minutes. Practice stress-relief techniques like deep breathing, gentle stretching, or listening to calming music.",
        "Establish boundaries around your time and energy. Delegate tasks when possible, and remember that saying 'no' to some commitments allows you to say 'yes' to your wellbeing. Consider breaking large tasks into smaller, manageable steps.",
        "Make time for activities that restore your energy: adequate sleep, nutritious meals, time in nature, or hobbies you enjoy. Reach out to friends, family, or professionals for support - you don't have to handle everything alone."
      ],
      whatToAvoid: [
        "Try not to take on additional commitments when you're already overwhelmed. Avoid perfectionism and remember that 'good enough' is often perfectly acceptable. Don't skip meals, sleep, or basic self-care in an attempt to get more done.",
        "Limit multitasking, which can actually increase stress and reduce efficiency. Avoid comparing your capacity to others - everyone has different stress tolerance levels. Don't ignore the physical signs of stress like headaches, tension, or changes in appetite.",
        "Try not to use unhealthy coping mechanisms like excessive alcohol, overeating, or avoiding all responsibilities. Don't isolate yourself from supportive relationships, and avoid the trap of believing that stress is just something you have to endure without seeking help."
      ]
    },
    emotion: 'stressed'
  },
  {
    triggers: ["i feel lonely", "i'm lonely", "alone", "isolated", "no friends", "nobody cares", "disconnected", "left out"],
    responses: {
      main: [
        "Loneliness can feel so heavy and isolating, but I want you to know that you're not alone in feeling this way. Many people experience loneliness, and it's a deeply human need to feel connected and understood. Your feelings matter, and there are meaningful ways to build connections and community.",
        "I hear how difficult it is to feel disconnected from others. Loneliness doesn't necessarily mean being physically alone - sometimes we can feel lonely even in a crowd. What you're experiencing is valid, and there are gentle steps we can take to help you feel more connected and valued.",
        "Thank you for sharing something so vulnerable with me. Loneliness can make us feel invisible or unimportant, but you matter deeply. Every person has value and deserves meaningful connections, and I believe there are people out there who would appreciate knowing you."
      ],
      whatToDo: [
        "Consider reaching out to one person today - even a simple text to an old friend or family member can start rebuilding connections. Look for community activities, volunteer opportunities, or classes where you might meet like-minded people who share your interests.",
        "Practice self-compassion and remember that building relationships takes time. Start with small social interactions: smile at neighbors, chat with cashiers, or join online communities related to your hobbies. Sometimes helping others can help us feel more connected and purposeful.",
        "Explore activities that bring you joy and might connect you with others: book clubs, hiking groups, art classes, or spiritual communities. Consider adopting a pet if your situation allows, as animals can provide wonderful companionship and opportunities to meet other pet owners."
      ],
      whatToAvoid: [
        "Try not to isolate yourself completely or convince yourself that you're better off alone. Avoid comparing your social life to what you see on social media - those highlight reels don't show the full picture of anyone's relationships.",
        "Don't wait for others to reach out first - taking the initiative to connect, even when it feels scary, can lead to meaningful relationships. Avoid negative self-talk about why people wouldn't want to be your friend or spend time with you.",
        "Try not to rush into relationships or put pressure on new connections to immediately fulfill all your social needs. Avoid staying in unhealthy relationships just to avoid being alone, and don't dismiss the value of professional support during this difficult time."
      ]
    },
    emotion: 'lonely'
  },
  {
    triggers: ["overwhelmed", "too much", "can't cope", "everything's falling apart", "drowning", "can't breathe"],
    responses: {
      main: [
        "When everything feels overwhelming, it can seem like you're drowning in responsibilities and emotions. I want you to know that this feeling, while intense, is temporary. You have the strength to get through this, and we can work together to break things down into manageable pieces.",
        "Feeling overwhelmed is your mind and body's way of telling you that you need support and perhaps a different approach. It's completely normal to feel this way when facing multiple challenges, and recognizing that you're overwhelmed is actually the first step toward finding relief.",
        "I can hear how intense everything feels right now. When we're overwhelmed, our perspective can become narrow and everything seems urgent. But you're here, you're breathing, and you have the capacity to take this one moment, one breath, one small step at a time."
      ],
      whatToDo: [
        "Start by taking three deep breaths and reminding yourself that you're safe in this moment. Make a list of everything on your mind, then categorize items by urgency and importance. Focus only on what absolutely must be done today.",
        "Reach out for help - whether from friends, family, or professionals. Break large tasks into tiny, specific steps. Set a timer for 25 minutes and work on just one thing, then take a 5-minute break. This can make progress feel more achievable.",
        "Practice grounding techniques: focus on your five senses to bring yourself back to the present moment. Consider what you can delegate, postpone, or eliminate entirely. Remember that asking for help is a sign of wisdom, not weakness."
      ],
      whatToAvoid: [
        "Don't try to solve everything at once or make major decisions while feeling overwhelmed. Avoid isolating yourself or refusing help from others. Try not to engage in all-or-nothing thinking - progress doesn't have to be perfect to be valuable.",
        "Limit stimulants like caffeine that might increase feelings of being overwhelmed. Avoid comparing your situation to others or feeling guilty about needing support. Don't ignore basic needs like sleep, food, and rest in an attempt to power through.",
        "Try not to catastrophize about the future or assume that feeling overwhelmed means you're failing. Avoid taking on additional commitments right now, and don't minimize your need for recovery time after intense periods of stress."
      ]
    },
    emotion: 'overwhelmed'
  },
  {
    triggers: ["i'm angry", "feel angry", "frustrated", "mad", "furious", "irritated", "rage"],
    responses: {
      main: [
        "Anger is a completely valid emotion, and it often signals that something important to you has been threatened or violated. It's okay to feel angry - what matters is how we process and express these feelings in healthy ways that honor your needs while maintaining your wellbeing.",
        "I can sense the intensity of your anger, and I want you to know that these feelings deserve acknowledgment. Anger often masks other emotions like hurt, fear, or disappointment, and understanding what's underneath can help you address the root cause of these intense feelings.",
        "Thank you for sharing your anger with me. This emotion, while sometimes uncomfortable, can be a powerful signal that boundaries have been crossed or that something needs to change. Let's explore healthy ways to channel this energy constructively."
      ],
      whatToDo: [
        "Take time to cool down before responding - count to ten, take deep breaths, or step away from the situation temporarily. Physical activity like walking, jogging, or even cleaning vigorously can help release angry energy in a healthy way.",
        "Express your anger through journaling, talking to a trusted friend, or creative outlets like art or music. Practice assertive communication by using 'I' statements to express your needs without attacking others. Consider what boundary or value was violated to trigger this anger.",
        "Try progressive muscle relaxation or mindfulness meditation to help regulate intense emotions. If the anger involves a relationship, plan a calm conversation when you're feeling more centered. Remember that you have the right to feel angry and to have your needs respected."
      ],
      whatToAvoid: [
        "Try not to act impulsively while angry - avoid sending heated emails, making important decisions, or saying things you might regret. Don't direct your anger toward innocent people or take it out on yourself through harmful behaviors.",
        "Avoid suppressing or dismissing your anger entirely, as this can lead to resentment or explosion later. Don't use alcohol or substances to numb angry feelings, and try not to hold grudges that only hurt you in the long run.",
        "Try not to label yourself as a 'bad person' for feeling angry - this is a normal human emotion. Avoid verbal or physical aggression, and don't assume the worst intentions from others when you're feeling particularly reactive."
      ]
    },
    emotion: 'angry'
  },
  {
    triggers: ["hopeless", "no point", "nothing matters", "give up", "what's the point", "meaningless", "lost"],
    responses: {
      main: [
        "When hope feels distant, it can seem like nothing will ever change or improve. I want you to know that hopelessness, while painful, is a feeling that can shift over time. You matter deeply, and your life has value even when it doesn't feel that way right now.",
        "I hear the deep pain in your words, and I'm honored that you've shared something so difficult with me. Hopelessness can feel like a heavy blanket that covers everything, but underneath those feelings, you still have inherent worth and the potential for change, even if you can't see it right now.",
        "Feeling hopeless is one of the most challenging human experiences, and it takes courage to continue reaching out when everything feels pointless. Your willingness to share this with me shows that some part of you is still fighting, and that matters more than you might realize."
      ],
      whatToDo: [
        "Focus on very small, immediate goals - even something as simple as drinking a glass of water or taking one deep breath. Reach out to a mental health professional, crisis hotline, or trusted person in your life. Sometimes hope returns gradually through tiny actions and connections.",
        "Consider that feelings, even intense ones like hopelessness, are temporary states that can change. Try to identify even one small thing that brought you the tiniest bit of comfort or interest recently. Professional support can be especially valuable during these difficult periods.",
        "Practice radical acceptance of where you are right now while remaining open to the possibility that things can change. Sometimes hope comes through helping others or engaging in meaningful activities, even when we can't feel hope for ourselves initially."
      ],
      whatToAvoid: [
        "Please don't make any permanent decisions based on temporary feelings. Avoid isolating yourself completely, and try not to dismiss the support that others want to offer you. Don't convince yourself that seeking help is pointless or that you're beyond help.",
        "Try not to engage in self-harm or risky behaviors as a way to cope with hopelessness. Avoid alcohol or substances that can deepen these feelings, and don't compare your internal experience to what others appear to be experiencing externally.",
        "Don't ignore thoughts of self-harm or suicide - these are signals that you need immediate professional support. Avoid pushing away all relationships or convincing yourself that others would be better off without you, which hopelessness often tells us falsely."
      ]
    },
    emotion: 'hopeless'
  },
  {
    triggers: ["confused", "don't know", "lost", "unclear", "mixed up", "don't understand", "scattered"],
    responses: {
      main: [
        "Feeling confused or uncertain can be really disorienting, especially when you're trying to make sense of your emotions or situation. It's completely normal to feel lost sometimes - life is complex, and it's okay not to have all the answers right now.",
        "Confusion often arises when we're processing multiple emotions or facing situations that don't have clear solutions. Your uncertainty is understandable, and taking time to sort through your thoughts and feelings is a healthy and necessary part of personal growth.",
        "I appreciate you sharing your confusion with me. Sometimes the fog of uncertainty can feel overwhelming, but it often precedes clarity and growth. Let's take this slowly and see if we can help you identify what you're experiencing and what might be helpful."
      ],
      whatToDo: [
        "Try journaling or talking through your thoughts with someone you trust - sometimes external processing helps clarify internal confusion. Break down complex situations into smaller, more manageable parts that you can examine one at a time.",
        "Practice patience with yourself as clarity often emerges gradually. Consider seeking guidance from a counselor, mentor, or wise friend who can offer perspective. Sometimes confusion signals that you're in a period of growth or transition.",
        "Focus on what you do know for certain, even if it's small things like your basic needs or values. Give yourself permission to sit with uncertainty while remaining open to new insights and perspectives that may emerge over time."
      ],
      whatToAvoid: [
        "Try not to rush into major decisions while feeling confused - it's okay to take time to gain clarity. Avoid overwhelming yourself with too many opinions or advice from others that might add to your confusion rather than help.",
        "Don't judge yourself harshly for feeling uncertain or lost - this is a common human experience. Avoid isolation, which can amplify confusing thoughts, and try not to assume that everyone else has life figured out when you don't.",
        "Try not to avoid all decision-making indefinitely due to confusion, as some choices can help bring clarity. Don't dismiss your own intuition completely in favor of external opinions, and avoid comparing your internal confusion to others' apparent certainty."
      ]
    },
    emotion: 'confused'
  },
  {
    triggers: ["feeling good", "happy", "great day", "things are better", "positive", "grateful", "excited"],
    responses: {
      main: [
        "It's wonderful to hear that you're feeling positive today! These moments of happiness and contentment are precious, and I'm so glad you're experiencing some joy and lightness right now. Your positive energy is beautiful to witness.",
        "I love hearing about your good feelings and positive experiences. Happiness and gratitude have powerful effects on our overall wellbeing, and sharing these moments helps amplify their positive impact. Thank you for bringing some brightness to our conversation.",
        "How lovely that you're feeling good right now! These positive emotions are just as important to acknowledge and celebrate as the more difficult ones. Your capacity for joy and appreciation shows the resilience and beauty of your spirit."
      ],
      whatToDo: [
        "Savor this positive feeling by taking a moment to really notice and appreciate it. Consider what contributed to this good mood - understanding your sources of joy can help you cultivate more positive experiences in the future.",
        "Share your positive energy with others if you feel moved to do so - happiness can be contagious and meaningful to those around you. Consider keeping a gratitude journal to capture these good moments and refer back to them during more challenging times.",
        "Use this positive energy constructively - perhaps tackle a task you've been avoiding, reach out to someone you care about, or engage in activities that bring you continued joy and fulfillment."
      ],
      whatToAvoid: [
        "Try not to dismiss or minimize your positive feelings, even if you're used to focusing on challenges. Don't feel guilty about feeling good when others might be struggling - your happiness doesn't take away from their experience.",
        "Avoid putting pressure on yourself to maintain this positive feeling constantly - emotions naturally fluctuate, and that's completely normal and healthy. Don't worry about when these good feelings might end.",
        "Try not to rush into major decisions solely based on temporary positive emotions, just as you would avoid making big choices during negative emotional states. Balance optimism with practical consideration when appropriate."
      ]
    },
    emotion: 'positive'
  },
  {
    triggers: ["hello", "hi", "how are you", "what's up", "good morning", "good evening", "hey"],
    responses: {
      main: [
        "Hello! I'm MindEase, and I'm here to provide you with a safe, confidential space where you can share whatever is on your mind. Whether you're having a difficult day or just need someone to listen, I'm here to support you with empathy and understanding.",
        "Hi there! Welcome to MindEase. I'm glad you've decided to reach out today. This is your space to express yourself freely and honestly. I'm here to listen, support, and help you explore your feelings in a non-judgmental environment.",
        "Hello, and thank you for connecting with me today. I'm MindEase, your mental health companion. Whether you're looking for someone to talk through challenges with or just need a supportive presence, I'm here to listen and help in whatever way I can."
      ],
      whatToDo: [
        "Feel free to share whatever is on your mind - your thoughts, feelings, experiences, or concerns. There's no right or wrong way to start our conversation. Take your time and share only what feels comfortable for you right now.",
        "Consider this a judgment-free space where you can be completely honest about how you're feeling. You might want to start by telling me about your day, what brought you here, or anything that's been weighing on your mind lately.",
        "Remember that this conversation is completely confidential and at your own pace. You can share as much or as little as you'd like. I'm here to support you, so please don't hesitate to express whatever you're experiencing."
      ],
      whatToAvoid: [
        "Don't feel pressured to share more than you're comfortable with right away. There's no need to have everything figured out before we start talking - uncertainty and confusion are completely welcome here too.",
        "You don't need to worry about saying the 'right' thing or protecting my feelings. This space is entirely for your wellbeing and emotional expression, so please prioritize your own needs and comfort level.",
        "Don't hesitate to take breaks, change subjects, or redirect our conversation in whatever way feels most helpful to you. There's no agenda here except supporting you in whatever way you need."
      ]
    },
    emotion: 'neutral'
  }
];

// Helper function to calculate Jaccard similarity between two strings
const jaccardSimilarity = (str1: string, str2: string): number => {
  const set1 = new Set(str1.toLowerCase().split(/\s+/));
  const set2 = new Set(str2.toLowerCase().split(/\s+/));
  
  const intersection = new Set([...set1].filter(x => set2.has(x)));
  const union = new Set([...set1, ...set2]);
  
  return intersection.size / union.size;
};

// Enhanced helper function to find best matching response using NLP similarity
export const findBestResponse = (userInput: string): ChatResponse | null => {
  const input = userInput.toLowerCase().trim();
  let bestMatch: ChatResponse | null = null;
  let bestScore = 0;
  
  // First, try exact trigger word matching for high confidence
  for (const response of chatbotDataset) {
    for (const trigger of response.triggers) {
      if (input.includes(trigger.toLowerCase())) {
        return response;
      }
    }
  }
  
  // If no exact match, use Jaccard similarity for fuzzy matching
  for (const response of chatbotDataset) {
    let maxSimilarity = 0;
    
    for (const trigger of response.triggers) {
      const similarity = jaccardSimilarity(input, trigger);
      maxSimilarity = Math.max(maxSimilarity, similarity);
    }
    
    if (maxSimilarity > bestScore && maxSimilarity > 0.2) { // Minimum threshold
      bestScore = maxSimilarity;
      bestMatch = response;
    }
  }
  
  // Return best match or default neutral response
  return bestMatch || chatbotDataset.find(r => r.emotion === 'neutral') || null;
};

// Dataset size information (currently contains ${chatbotDataset.length} comprehensive response patterns)
export const getDatasetSize = () => chatbotDataset.length;