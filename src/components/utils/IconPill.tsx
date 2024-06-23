interface pillProps {
    icon: React.ReactNode;
    label: string;
}

// Some styles

const pillIconStyle: React.CSSProperties = {
    boxShadow: "-1px -1px 1px #132454",
};

const IconPill: React.FC<pillProps> = ({ icon, label }) => {
    return (
        <div className="min-w-fit bg-[#010D2E] p-2.5 flex justify-start items-center gap-2  text-white rounded-xl pillShadow text-[10px] sm:text-xs md:text-sm xl:text-lg sm:p-3 md:p-4 xl:p-5 lg:rounded-2xl border-t border-l border-primary shadow-sm shadow-gray-800">
            <div
                className="p-1 text-primary bg-[#061126] rounded-md lg:p-2 xl:p-2.5"
                style={pillIconStyle}
            >
                {icon}
            </div>
            <p className="pr-1 text-gray-300 font-semibold">{label}</p>
        </div>
    );
};

export default IconPill;
