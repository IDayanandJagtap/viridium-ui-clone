import { FaDatabase, FaShuffle, FaListCheck, FaGlobe } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import {
    TbReportAnalytics,
    TbAlertTriangleFilled,
    TbBrandDatabricks,
} from "react-icons/tb";
import { SiBnbchain } from "react-icons/si";
import IconPill from "../utils/IconPill";

// Icon className
const pillIconClassName: string =
    "text-base  lg:text-lg xl:text-xl 2xl:text-2xl";

// Data to load
const pillData = [
    {
        icon: <FaDatabase className={pillIconClassName} />,
        label: "Data Collection",
    },
    {
        icon: <TbBrandDatabricks className={pillIconClassName} />,
        label: "Data Enrichment",
    },
    {
        icon: <FaSearch className={pillIconClassName} />,
        label: "Identification",
    },
    {
        icon: <FaShuffle className={pillIconClassName} />,
        label: "Substitutions",
    },
    {
        icon: <FaListCheck className={pillIconClassName} />,
        label: "Assessment",
    },
    {
        icon: <SiBnbchain className={pillIconClassName} />,
        label: "Supply Chain Action",
    },
    {
        icon: <FaGlobe className={pillIconClassName} />,
        label: "Global Regulatory",
    },
    {
        icon: <TbReportAnalytics className={pillIconClassName} />,
        label: "Disclosure Reporting",
    },
    {
        icon: <TbAlertTriangleFilled className={pillIconClassName} />,
        label: "Prediction of Future At-Risk Materials",
    },
];

const OurSolution = () => {
    return (
        <div className="bg-blueGrid bg-cover px-5 py-14 lg:px-10 lg:pt-16 lg:pb-20 xl:px-20 ">
            <h3 className="p-2 bg-[#213360] text-green-600 text-xs w-fit lg:px-5 lg:py-3 lg:text-sm">
                Our Solution
            </h3>
            <h1 className="text-3xl my-3 font-bold text-white w-full sm:w-3/4 lg:text-4xl xl:text-5xl xl:leading-[4rem]">
                End-To-End Platform To Mitigate And Substitute Materials Of
                Concern
            </h1>
            {/* pill */}
            <div className="mt-10 grid items-center gap-6 lg:gap-12 grid-cols-2 lg:grid-cols-3">
                {pillData.map((e) => {
                    return <IconPill icon={e.icon} label={e.label} />;
                })}
            </div>
        </div>
    );
};

export default OurSolution;
