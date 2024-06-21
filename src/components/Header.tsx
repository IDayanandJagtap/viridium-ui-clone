import { useRef, useState } from "react";
import logo from "../assets/main-logo.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoChevronDown } from "react-icons/io5";

type MenuState = false | true;

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<MenuState>(false);
    const mobileMenu = useRef<HTMLDivElement>(null);

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="w-full h-fit flex justify-between shadow-xl relative">
            <div className="px-4 py-5">
                <img src={logo} className="w-40 h-auto" />
            </div>

            {/* Ham Menu Button */}
            <div
                className="w-fit px-3.5 py-4 h-full text-white bg-primary flex justify-end items-center"
                onClick={handleToggleMenu}
            >
                {isMenuOpen ? (
                    <AiOutlineClose size={28} />
                ) : (
                    <AiOutlineMenu size={28} />
                )}
            </div>

            {/* Mobile Menu */}
            <div
                ref={mobileMenu}
                className={`
                    ${
                        isMenuOpen ? "h-[100vh] " : "h-0 "
                    } " absolute top-[60px] w-full overflow-hidden flex flex-col text-lg  bg-white border-t border-stone-300 transition-all duration-[0.6s]`}
            >
                <div className="mx-1.5 px-4 py-9 flex items-center justify-between border-b border-stone-300">
                    <a href="#">Enterprise Platform</a>
                    <IoChevronDown size={22} />
                </div>
                <a
                    href="#About"
                    className="mx-1.5 px-4 py-9 border-b border-stone-300"
                >
                    About Us
                </a>
                <a
                    href="#approch"
                    className="mx-1.5 px-4 py-9 border-b border-stone-300"
                >
                    Our Approach
                </a>
                <div className="mx-1.5 px-4 py-9">
                    <a
                        href="#contact"
                        className="px-5 py-3 bg-primary text-sm text-white cursor-pointer"
                    >
                        CONTACT US
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Header;
