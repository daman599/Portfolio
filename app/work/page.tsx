export default function Work() {
    return (
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-28 xl:px-52 mt-14 md:mt-20">
            <p className="text-base md:text-xl font-medium text-[#19bbb3]">
                This is what I mean when I say &quot;I love creating UI components&quot;.
            </p>

            <div className="rounded-4xl overflow-hidden shadow-lg size-72">
                <video
                    src="/uiComp-videos/navbar.mp4"
                    autoPlay
                    loop
                    muted
                    className="h-full"
                />
            </div>
        </div>
    );
}