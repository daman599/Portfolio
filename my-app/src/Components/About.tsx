import { Button } from "./ui/moving-border"
import { TypewriterEffect } from "./ui/typewriter-effect"

export function About() {
    return <>
        <section id="about" className="w-full bg-primary text-secondary py-12 md:py-20">
            <div className="container md:max-w-[1440px] m-auto px-6">
            <div className="max-w-5xl mx-auto text-center">
                <TypewriterEffect
                    words={[
                        { text: "Know", className: "text-secondary" },
                        { text: "more", className: "text-secondary" },
                        { text: "about", className: "text-secondary" },
                        { text: "me", className: "text-secondary" },
                        { text: "from", className: "text-secondary" },
                        { text: "this", className: "text-secondary" },
                        { text: "Chatbot.", className: "text-tertiary" },
                    ]}
                    className="text-4xl md:text-5xl font-bold mb-10 text-center"
                />
            </div>
            <Button borderRadius="1.5rem" duration={5000}>
                <div className="iframe-chatbot rounded-2xl overflow-hidden shadow-lg border border-tertiary">
                    <iframe
                        src="https://www.chatbase.co/chatbot-iframe/b7psqbGcujX4eE_DnqIUK"
                        width="100%"
                        style={{ height: "30%", minHeight: "700px" }}
                        frameBorder="0"
                    ></iframe>
                </div>
            </Button>
            </div>
        </section>
    </>
}