import { useState } from "react"
import SnapLogo from "../images/logo.svg"
import OpenNav from "../images/icon-menu.svg"
import CloseNav from "../images/icon-close-menu.svg"
import ArrowDown from "../images/icon-arrow-down.svg"
import ArrowUp from "../images/icon-arrow-up.svg"
// Nav Icons
import TodoIcon from "../images/icon-todo.svg"
import CalendarIcon from "../images/icon-calendar.svg"
import RemindersIcon from "../images/icon-reminders.svg"
import PlanningIcon from "../images/icon-planning.svg"

export default function Navbar() {
    const [showNav, setShowNav] = useState(false)
    const [featuresExpanded, setFeaturesExpanded] = useState(false)
    const [companyExpanded, setCompanyExpanded] = useState(false)

    function toggleNav() {
        setShowNav(prevState => !prevState)
    }

    function toggleFeatures() {
        setFeaturesExpanded(prevState => !prevState)
    }

    function toggleCompany() {
        setCompanyExpanded(prevState => !prevState)
    }

    return <nav className="flex justify-between items-center px-4 py-6 md:px-10 md:py-3">
        <a className="shrink-0" href="."><img className="pointer-events-none" src={SnapLogo} alt="Snap Logo" /></a>
        <button className="md:hidden shrink-0" onClick={toggleNav}><img className="pointer-events-none z-10" src={OpenNav} alt="Open Navbar" /></button>
        <div className={`${showNav ? "bg-snap-black pointer-events-auto" : "bg-transparent pointer-events-none"} transition left-0 top-0 fixed w-screen h-screen opacity-80 md:hidden`} />
        <div className={`flex flex-col md:flex-row gap-4 md:gap-10 text-snap-gray w-56 md:w-auto md:h-auto md:mr-auto md:ml-10 px-6 py-6 fixed md:relative items-start right-0 top-0 ${showNav ? "scale-x-100" : "scale-x-0"} md:scale-100 origin-right transition h-screen bg-snap-white`}>
            <button className="shrink-0 ml-auto mb-4 focus:outline-none md:hidden" onClick={toggleNav}><img className="pointer-events-none z-10" src={CloseNav} alt="Open Navbar" /></button>
            <button className="flex items-center gap-4 md:gap-2 md:text-sm focus:outline-none" onClick={toggleFeatures}><span>Features</span><img className={`rotate-0 transition ${featuresExpanded && "rotate-180"}`} src={ArrowDown} alt="Toggle Features Dropdown" /></button>
            <ul className={`flex flex-col gap-5 ${!featuresExpanded && "hidden"} ml-4 mt-1 mb-4 md:absolute top-20`}>
                <li className="flex items-center w-full cursor-pointer">
                    <div className="w-5 mr-3 flex justify-center"><img className="h-5 justify-self-center" src={TodoIcon} alt="" /></div>
                    <span className="leading-none mt-1">Todo List</span>
                </li>
                <li className="flex items-center w-full cursor-pointer">
                    <div className="w-5 mr-3 flex justify-center"><img className="h-5 justify-self-center" src={CalendarIcon} alt="" /></div>
                    <span className="leading-none mt-1">Calendar</span>
                </li>
                <li className="flex items-center w-full cursor-pointer">
                    <div className="w-5 mr-3 flex justify-center"><img className="h-5 justify-self-center" src={RemindersIcon} alt="" /></div>
                    <span className="leading-none mt-1">Reminders</span>
                </li>
                <li className="flex items-center w-full cursor-pointer">
                    <div className="w-5 mr-3 flex justify-center"><img className="h-5 justify-self-center" src={PlanningIcon} alt="" /></div>
                    <span className="leading-none mt-1">Planning</span>
                </li>
            </ul>
            <button className="flex items-center gap-4 md:gap-2 md:text-sm focus:outline-none" onClick={toggleCompany}><span>Company</span><img className={`rotate-0 transition ${companyExpanded && "rotate-180"}`} src={ArrowDown} alt="Toggle Company Dropdown" /></button>
            <ul className={`flex flex-col gap-5 ${!companyExpanded && "hidden"} ml-5 mt-1 mb-4 md:absolute top-20`}>
                <li className="cursor-pointer">History</li>
                <li className="cursor-pointer">Our Team</li>
                <li className="cursor-pointer">Blog</li>
            </ul>
            <button className="md:text-sm focus:outline-none">Careers</button>
            <button className="md:text-sm focus:outline-none">About</button>
        </div>
        <div className="hidden md:flex text-snap-gray text-sm gap-8">
            <button className="px-4 py-2 ">Login</button>
            <button className="px-4 py-2 border-2 border-snap-gray rounded-xl">Register</button>
        </div>
    </nav>;
}
