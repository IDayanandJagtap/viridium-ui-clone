import heroMobileVideo from "../../assets/videos/homepage-video-mobile.mp4";
import heroWebVideo from "../../assets/videos/homepage-video-web.mp4";
import missionMobileImg from "../../assets/images/mission-mobile.svg";
import missionWebImg from "../../assets/images/mission-web.svg";

const HeroSection = () => {
    return (
        <section className="mx-5 py-8 lg:px-10 lg:py-12 xl:px-20 ">
            {/* Introduction */}
            <div>
                <h2 className="font-bold text-primary lg:text-lg xl:text-2xl">
                    Identify. Mitigate. Innovate.
                </h2>
                <h1 className="text-3xl my-2  font-bold md:w-4/5 lg:w-2/3  lg:text-4xl xl:w-[85%] xl:text-[3.5rem] xl:leading-[4rem] ">
                    Are You Prepared For Materials Of Concern Now And In The
                    Future?
                </h1>
                <button className="px-6 py-3 text-xs my-4 border border-green-600 hover:bg-green-600 hover:text-white">
                    Request A Demo
                </button>

                <video
                    className="my-10 h-full w-full"
                    autoPlay
                    muted
                    loop
                    controls={false}
                >
                    <source
                        src={heroMobileVideo}
                        type="video/mp4"
                        media="(max-width:1023px)"
                    />
                    <source
                        src={heroWebVideo}
                        type="video/mp4"
                        media="(min-width:1024px)"
                    />
                    Your browser doesn't support video
                </video>
            </div>
            {/* Our mission */}
            <div className="my-10 py-3">
                <div className="flex flex-col items-center ">
                    <h3 className="p-2 bg-blue-100 text-primary text-xs w-fit lg:px-5 lg:py-3 lg:text-sm">
                        Our Mission
                    </h3>
                    <h1 className="text-3xl my-3 font-bold text-center w-[105%] sm:w-3/4 lg:text-4xl xl:text-5xl xl:leading-[4rem]">
                        Improve Human Health And The Environment By Removing
                        Harmful Materials From Products
                    </h1>
                </div>
                {/* details */}
                <div className="mt-5 md:relative ">
                    <article className="my-2 text-center top-1/3  left-0 md:absolute md:w-1/3 md:text-start">
                        <h3 className="font-bold my-1 xl:text-lg">
                            Advance De-materialization
                        </h3>
                        <p className="text-sm md:text-xs lg:text-md xl:text-lg">
                            Empower manufacturing supply chain and
                            sustainability executives to accelerate the
                            identification, assessment and elimination of
                            harmful chemicals from products
                        </p>
                    </article>
                    {/* image according to viewport */}
                    <div className="z-[-1]">
                        <img
                            src={missionMobileImg}
                            alt="Viridium Mission"
                            className="w-full my-4 h-auto md:hidden"
                        />
                        <img
                            src={missionWebImg}
                            alt="Viridium Mission"
                            className="w=full my-4 h-auto hidden mx-auto md:block"
                        />
                    </div>
                    <article className="my-2 text-center bottom-0 right-0 md:absolute md:w-1/3 md:text-start">
                        <h3 className="font-bold my-1 xl:text-lg">
                            {" "}
                            Drive Material Innovation
                        </h3>
                        <p className="text-sm md:text-xs lg:text-md xl:text-lg">
                            Arm Manufacturing R&D experts in developing
                            substitutes and providing AI-enabled knowledge to
                            accelerate the discovery of sustainable materials.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
