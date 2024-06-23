import img1 from "../../assets/images/why-viridium/chemical-manufacturing-expertise.png";
import img2 from "../../assets/images/why-viridium/Automated-Regulatory.png";
import img3 from "../../assets/images/why-viridium/Secure.png";
import img4 from "../../assets/images/why-viridium/Knowledge-Cloud.png";
import img5 from "../../assets/images/why-viridium/First-to-Market.png";
import img6 from "../../assets/images/why-viridium/Tech-Innovation-by-Data-AI-Experts.png";
import Card from "../utils/Card";

const dataList = [
    {
        title: "Chemical, Manufacturing Expertise",
        text: "Best-in-class chemical and science partnerships to fuel material innovation",
        imgSrc: img1,
    },
    {
        title: "Compliance Made Simple",
        text: "Stay ahead of Local, Federal, and Global regulations and reporting mandates",
        imgSrc: img2,
    },
    {
        title: "Secure Enterprise Grade",
        text: "Your data stays with you, never leaving your ecosystem",
        imgSrc: img3,
    },
    {
        title: "Knowledge Cloud",
        text: "On-demand access to up-to-date industry standards & frameworks, regulations, and chemical and scientific knowledge",
        imgSrc: img4,
    },
    {
        title: "First to Market",
        text: "AI purpose-built for Materials of Concern",
        imgSrc: img5,
    },
    {
        title: "Tech Innovation by Data & AI Experts",
        text: "Microsoft, Oracle, Salesforce, Amazon and TCS alumni",
        imgSrc: img6,
    },
];

const WhyViridium = () => {
    return (
        <div className="mt-10 px-5 py-8 lg:px-10 lg:py-12 xl:px-20">
            {/* Pre "WHY" video section, embedded from YouTube */}
            <section>
                <iframe
                    src="https://www.youtube.com/embed/RFOjB_GtZ-0?si=gZV6NTQJU-oaJ2fZ"
                    title="YouTube video player"
                    // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-72 mx-auto md:h-80 lg:w-4/5 lg:h-[28rem] xl:w-3/4 xl:h-[36rem]"
                ></iframe>
            </section>

            {/* Why Viridium Ai */}
            <section className="mt-10 text-center md:mt-16">
                <h1 className="text-3xl my-2  font-bold lg:text-4xl xl:text-[3.5rem] xl:leading-[4rem] ">
                    Why Viridium.AI
                </h1>
                <p className="mt-4 text-sm md:text-xs lg:text-md xl:text-lg">
                    Powerful and scalable Platform to tackle current and future
                    at-risk chemicals, starting with PFAS.
                </p>
                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
                    {dataList.map((e) => {
                        return (
                            <Card
                                title={e.title}
                                imgSrc={e.imgSrc}
                                text={e.text}
                            />
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default WhyViridium;
