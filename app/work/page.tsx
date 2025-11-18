import { GitMerge } from "lucide-react";

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
    { path: "clickAnimation.mp4" },
];

type contributionsTye = {
    contribution: string,
}

const Contributions: contributionsTye[] = [
    { contribution: "fix(ui): resolve overflow bug in filter div with overflow-hidden" },
    { contribution: "layout improvements" },
];

export default function Work() {
    return (
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-28 xl:px-52 mt-14 md:mt-20">
            <p className="text-xl font-medium text-[#9a9a9a]">
                This is what I mean when I say, &quot; <span className="text-gray-100">I love creating UI components</span> &quot;
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7 rounded-lg md:rounded-xl mt-5 md:mt-10 bg-[#24242485] p-3 md:p-5">
                {videosPath.map((video, i) => (
                    <div key={i} className="aspect-video overflow-hidden rounded-lg md:rounded-xl">
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

            <div className="w-full h-[1px] bg-[#1C1C1C] my-10"></div>

            <div className="flex flex-col items-start justify-center gap-5">
                <span className="text-base md:text-lg :text-xl text-[#7c7c7c] underline">Open Source Contributions:-</span>

                {Contributions.map((contri, i) => (
                    <div key={i} className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-1">

                        <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-2 ">
                            <div className="px-2 py-1 md:px-3 md:py-2 gap-2 flex items-center justify-center bg-[#542081] rounded-full">
                                <GitMerge size={18} />
                                <span className="text-xs md:text-sm">Merged</span>
                            </div>

                            <span className="text-sm md:text-base lg:text-xl text-[#868686]">
                                {contri.contribution}
                            </span>
                        </div>

                        <a href="https://github.com/Hussain-hamim/DevSync" target="_blank" rel="noopener noreferrer">
                            <span className="text-sm md:text-base text-[#40c463]">DevSync</span>
                        </a>
                    </div>
                ))}
            </div>
        </div >
    );
}