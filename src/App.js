import Main from "./components/Main"
import Navbar from "./components/Navbar"

export default function App() {
  return (
    <>
      <Navbar />
      <Main />
      <footer className="flex justify-center flex-wrap gap-x-2 text-center text-sm text-snap-gray py-6">
        <span>Challenge by <a className="text-snap-black hover:underline underline-offset-2 decoration-snap-black" href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.</span>
        <span>Coded by <a className="text-snap-black hover:underline underline-offset-2 decoration-snap-black" href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Waldo Smuts</a>.</span>
      </footer>
    </>
  )
}