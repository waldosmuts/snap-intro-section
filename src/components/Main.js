// Hero Images
import HeroMobile from "../images/image-hero-mobile.png"
import HeroDesktop from "../images/image-hero-desktop.png"
// Client Logos
import DataBizLogo from "../images/client-databiz.svg"
import AudiophileLogo from "../images/client-audiophile.svg"
import MeetLogo from "../images/client-meet.svg"
import MakerLogo from "../images/client-maker.svg"

export default function Main() {
    return (
        <main className="md:grid app--main md:ml-40 md:mr-28 gap-56 md:gap-36 md:mt-12 pb-6 md:pb-12">
            <img className="md:hidden" src={HeroMobile} alt="" />
            <div className="flex flex-col items-center md:items-start justify-between">
                <h1 className="main--paragraph text-4xl font-bold text-snap-black text-center md:text-left mt-12 md:mt-24 w-full">Make remote work</h1>
                <p className="text-snap-gray text-center md:text-left md:text-lg mx-4 md:mx-0 mt-4 leading-6 md:mt-12 max-w-md">Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                <button className="bg-snap-black px-6 py-3 rounded-2xl text-snap-white hover:text-snap-black hover:font-bold hover:bg-snap-white hover:border border-snap-black mt-14 md:px-8 md:text-lg md:py-4">Learn more</button>
                <div className="flex items-center px-4 gap-6 justify-center mt-12 md:mt-auto md:px-0 md:justify-between md:gap-0 md:w-full">
                    <div>
                        <img src={DataBizLogo} alt="Databiz Logo" />
                    </div>
                    <div>
                        <img src={AudiophileLogo} alt="Audiophile Logo" />
                    </div>
                    <div>
                        <img src={MeetLogo} alt="Meet Logo" />
                    </div>
                    <div>
                        <img src={MakerLogo} alt="Maker Logo" />
                    </div>
                </div>
            </div>
            <img className="hidden md:block" src={HeroDesktop} alt="" />
        </main>
    )
}