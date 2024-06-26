import ig from "../assets/ig.svg";
import x from "../assets/x white.webp";
import fb from "../assets/discord-6.svg";
import youtube from "../assets/youtube.svg";
import linkedin from "../assets/linkedin.svg";
import medium from "../assets/medium white.webp";

function Footer() {
  return (
      <footer className="bg-blue-600 text-white p-4">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center">
        {/* Brand */}
        <div className="p-1 flex flex-col md:flex-row items-center">
          <span className="font-bold text-xl">Balaji V</span>
          <span className="mt-2 md:mt-0 md:ml-4">Call Me: +91 123456789</span>
          <span className='mt-2 md:mt-0 md:ml-4'>Mail me: balali.4463@gmail.com</span>
        </div>
        
        {/* Links */}
        <div className="p-1 flex flex-col md:flex-row flex-wrap justify-center items-center gap-4">
          <a target='_blank' rel="noreferrer" href="#" className="hover:text-sky-200"><img className=' h-6' src={linkedin}/></a>
           <a target='_blank' rel="noreferrer" href="#" className="hover:text-sky-200"><img className=' h-6' src={youtube}/></a>
          <a target='_blank' rel="noreferrer" href="#" className="hover:text-sky-200"><img className=' h-6' src={medium}/></a>
           <a target='_blank' rel="noreferrer" href="#" className="hover:text-sky-200"><img className=' h-6' src={x}/></a>
          <a target='_blank' rel="noreferrer" href="#" className="hover:text-sky-200"><img className=' h-6' src={fb}/></a>
          <a target='_blank' rel="noreferrer" href="#" className="hover:text-sky-200"><img className=' h-6' src={ig}/></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer