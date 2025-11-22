import React, { useState } from 'react';
import { ChevronRight, RotateCcw } from 'lucide-react';

export default function AdventureQuiz() {
  const [currentStep, setCurrentStep] = useState('start');
  const [result, setResult] = useState(null);

  const story = {
    start: {
      text: "You wake up in a mysterious place with no memory of how you got there. Two paths stretch before you...",
      choices: [
        { text: "Take the mountain path with cherry blossoms", next: "mountain" },
        { text: "Follow the desert road with ancient stones", next: "desert" }
      ]
    },
    mountain: {
      text: "As you climb, you hear distant music. The melody is both modern and traditional.",
      choices: [
        { text: "Follow the upbeat electronic rhythm", next: "city" },
        { text: "Seek out the traditional instruments", next: "village" }
      ]
    },
    desert: {
      text: "The sun beats down as you notice a caravan in the distance and a cave nearby.",
      choices: [
        { text: "Join the caravan of traders", next: "caravan" },
        { text: "Explore the cave with ancient markings", next: "cave" }
      ]
    },
    city: {
      text: "You arrive at a bustling metropolis with neon lights and endless energy. Street food vendors call out to you.",
      choices: [
        { text: "Try the spicy rice cakes", next: "korean" },
        { text: "Sample the grilled skewers", next: "village" }
      ]
    },
    village: {
      text: "A peaceful village welcomes you. Elders invite you to share tea and stories.",
      choices: [
        { text: "Learn about their K-pop inspired traditions", next: "korean" },
        { text: "Hear tales of mountain kingdoms", next: "afghan" }
      ]
    },
    caravan: {
      text: "The traders share bread and salt, speaking of ancient routes through the Hindu Kush.",
      choices: [
        { text: "Journey with them through the mountains", next: "afghan" },
        { text: "Ask about the eastern trade routes", next: "city" }
      ]
    },
    cave: {
      text: "Inside, you find ancient artifacts and murals depicting great empires.",
      choices: [
        { text: "Study the Persian inscriptions", next: "afghan" },
        { text: "Examine the modern graffiti art", next: "korean" }
      ]
    },
    korean: {
      result: "South Korean",
      text: "Your journey has revealed your spirit! You embody the dynamic energy of South Korea - a perfect blend of cutting-edge innovation and deep-rooted tradition. Like Seoul itself, you're fast-paced, culturally rich, and always evolving. K-pop, kimchi, and karaoke are calling your name!",
      emoji: "🇰🇷"
    },
    afghan: {
      result: "Afghan",
      text: "Your adventure has spoken! You carry the resilient spirit of Afghanistan - a land of majestic mountains, ancient trade routes, and enduring heritage. Like the Hindu Kush, you stand strong and timeless. Your soul resonates with rich history, warm hospitality, and unbreakable determination.",
      emoji: "🇦🇫"
    }
  };

  const handleChoice = (next) => {
    if (story[next].result) {
      setResult(next);
    }
    setCurrentStep(next);
  };

  const restart = () => {
    setCurrentStep('start');
    setResult(null);
  };

  const currentNode = story[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-white">
            <h1 className="text-4xl font-bold text-center mb-2">
              ✨ The Journey Within ✨
            </h1>
            <p className="text-center text-purple-100">
              A Choose Your Own Adventure Quiz
            </p>
          </div>

          {/* Content */}
          <div className="p-8">
            {!result ? (
              /* Story Mode */
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 border-2 border-purple-200">
                  <p className="text-lg text-gray-800 leading-relaxed">
                    {currentNode.text}
                  </p>
                </div>

                <div className="space-y-3">
                  {currentNode.choices.map((choice, index) => (
                    <button
                      key={index}
                      onClick={() => handleChoice(choice.next)}
                      className="w-full bg-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white border-2 border-purple-300 rounded-xl p-4 text-left transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-gray-800 group-hover:text-white font-medium">
                          {choice.text}
                        </span>
                        <ChevronRight className="text-purple-500 group-hover:text-white" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              /* Result Mode */
              <div className="space-y-6 text-center">
                <div className="text-8xl mb-4">
                  {currentNode.emoji}
                </div>
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  You Are: {currentNode.result}!
                </h2>
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 border-2 border-purple-200">
                  <p className="text-lg text-gray-800 leading-relaxed">
                    {currentNode.text}
                  </p>
                </div>
                <button
                  onClick={restart}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl px-8 py-4 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto"
                >
                  <RotateCcw size={20} />
                  Start New Journey
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-purple-200 mt-6 text-sm">
          Every choice reveals something about your spirit
        </p>
      </div>
    </div>
  );
}