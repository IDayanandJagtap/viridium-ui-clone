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
        <nav className="w-full h-fit sticky top-0 left-0 bg-white z-10 flex justify-between shadow-md  lg:px-8 lg:py-2.5 xl:px-12">
            <div className="px-4 py-5 flex justify-start items-center">
                <a href="/">
                    <img src={logo} className="w-40 h-auto xl:w-48" />
                </a>
            </div>

            <div className="hidden px-4 py-2.5 gap-6 items-center lg:flex lg:font-[500] ">
                <div className="flex gap-2 p-2 relative after:w-full after:h-[1.5px] after:scale-x-0 after:bg-primary after:absolute after:bottom-0 after:left-0 after:transition-transform after:duration-200 hover:after:scale-x-100 hover:text-primary">
                    <a href="#">Enterprise Platform</a>
                    <IoChevronDown size={22} />
                </div>
                <a
                    href="#approch"
                    className="p-2 relative after:w-full after:h-[1.5px] after:scale-x-0 after:bg-primary after:absolute after:bottom-0 after:left-0 after:transition-transform after:duration-200 hover:after:scale-x-100 hover:text-primary"
                >
                    Our Approach
                </a>
                <a
                    href="#About"
                    className="p-2 relative after:w-full after:h-[1.5px] after:scale-x-0 after:bg-primary after:absolute after:bottom-0 after:left-0 after:transition-transform after:duration-200 hover:after:scale-x-100 hover:text-primary"
                >
                    About Us
                </a>

                <div className="">
                    <a
                        href="#contact"
                        className="p-3 bg-primary text-sm text-white cursor-pointer lg:px-4 lg:py-3.5 hover:bg-green-500"
                    >
                        CONTACT US
                    </a>
                </div>
            </div>

            {/* Ham Menu Button */}
            <div
                className="w-fit px-3.5 py-4 h-full text-white bg-primary flex justify-end items-center lg:hidden"
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
                    } " absolute top-[60px] w-full overflow-hidden flex flex-col text-lg  bg-white  transition-all duration-[0.6s]`}
            >
                <div className="mx-1.5 px-4 py-9 flex items-center justify-between border-y border-stone-300">
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
