interface CardProps {
    title: string;
    text: string;
    imgSrc: string;
}

const Card: React.FC<CardProps> = ({ title, text, imgSrc }) => {
    return (
        <div className="group flex flex-col items-start gap-4 p-4 rounded-lg border shadow-overallShadow  shadow-gray-200 md:p-6 ">
            <h4 className="font-bold">{title}</h4>
            <div className="flex items-center min-h-28 md:flex-col gap-4">
                <div className="w-full h-full overflow-hidden">
                    <img
                        src={imgSrc}
                        alt={title}
                        className=" h-full w-full object-cover transition-transform transform duration-300 group-hover:scale-110 "
                    />
                </div>
                <p className="w-full text-start text-sm">{text}</p>
            </div>
        </div>
    );
};

export default Card;
