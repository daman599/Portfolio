export function About() {
    return <>
        <section id="about" className="w-full bg-[#1E1E1E] text-white py-3 px-6 md:px-20">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl py-4 font-bold mb-10 text-center bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
                    Ask more about me from this Chatbot.
                </h2>
            </div>
             <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-gray-700">
                <iframe
                    src="https://www.chatbase.co/chatbot-iframe/b7psqbGcujX4eE_DnqIUK"
                    width="100%"
                    style={{ height: "100%", minHeight: "700px" }}
                    frameBorder="0"
                ></iframe>
            </div>
        </section>
    </>
}