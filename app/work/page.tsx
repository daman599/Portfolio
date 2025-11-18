type videosPathType = {
    path: string,
}

const videosPath: videosPathType[] = [
    { path: "navbar.mp4" },
    { path: "gradButton.mp4" },
    { path: "ContriCard.mp4" },
    { path: "TweetCard.mp4" },
    { path: "Avatar.mp4" },
    { path: "planSwitch.mp4" },
    { path: "AIcard.mp4" },
    { path: "createBtn.mp4" },
    { path: "Expandcard.mp4" },
    { path: "expensesCard.mp4" },
];

export default function Work() {
    return (
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-28 xl:px-52 mt-14 md:mt-20">
            <p className="text-base md:text-2xl font-medium text-[#9a9a9a]">
                This is what I mean when I say, &quot;<span className="text-gray-100">I love creating UI components</span>&quot;
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7 mt-7">
                {videosPath.map((video, i) => (
                    <div key={i} className="aspect-video rounded-xl">
                        <video
                            src={`/uiComp-videos/${video.path}`}
                            autoPlay
                            loop
                            muted
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

        </div >
    );
}