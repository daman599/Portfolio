import { Button } from "./ui/moving-border"
import { TypewriterEffect } from "./ui/typewriter-effect"

export function About() {
    return <>
        <section id="about" className="w-full bg-[#1E1E1E] text-white py-20 px-6 md:px-20">
            <div className="max-w-5xl mx-auto text-center">
                <TypewriterEffect
                    words={[
                        { text: "Know", className: "text-gray-400" },
                        { text: "more", className: "text-gray-400" },
                        { text: "about", className: "text-gray-400" },
                        { text: "me", className: "text-gray-400" },
                        { text: "from", className: "text-gray-400" },
                        { text: "this", className: "text-gray-400" },
                        { text: "Chatbot.", className: "text-blue-500" },
                    ]}
                    className="text-4xl md:text-5xl py-4 font-bold mb-10 text-center"
                />
            </div>
            <Button borderRadius="1.5rem" duration={5000}>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-700">
                    <iframe
                        src="https://www.chatbase.co/chatbot-iframe/b7psqbGcujX4eE_DnqIUK"
                        width="100%"
                        style={{ height: "30%", minHeight: "700px" }}
                        frameBorder="0"
                    ></iframe>
                </div>
            </Button>
        </section>
    </>
}