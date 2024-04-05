import './animatedtext.css';
import fiverr from '../../assets/fiverr.svg';
import linkedin from '../../assets/linkedin.svg';
import medium from '../../assets/medium.svg';
import upwork from '../../assets/upwork.svg';
import pro from "../../assets/pro.png";
import gh from "../../assets/gh.svg";



function Home() {
  return (
    <div className='flex-1'>

      <div className=" min-h-lvh bg-stone-200 flex justify-center items-center p-12 set-background">
        <h1 className=" text-red-600 text-5xl font-bold fallingText animate-star-wars-slide-in">
          Hi, I am
          <h1 className='text-8xl text-blue-700'>Balaji V</h1>
          [data Analyst | Developer]
        </h1>
      </div>


      <div id='saikumarreddy' className='bg-blue-600 shadow-2xl m-10 p-5 rounded-md'>
        <h1 className='text-center text-4xl'>About Me!</h1>
        <div className='flex flex-col md:flex-row p-9'>
          <div>
            <img src={pro} className=' w-auto rounded-md max-w-96' />
          </div>
          <div className='pt-10 md:pl-10'>
            <h3 className='text-xl pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quisquam nemo neque ratione in?
              Officia, accusamus asperiores? Cupiditate mollitia rerum laboriosam totam accusamus est, obcaecati a sit
              alias architecto perspiciatis.</p>
          </div>
        </div>
      </div>

      <div className=' items-center text-center p-7 m-10'>
        <h1 className='font-bold text-4xl'>Lets Colaborate for work</h1>
        <div className='flex flex-wrap pt-6 text-xl justify-center'>
          
          <a href='#' target='_blank' className=' rounded-lg flex flex-col justify-center items-center py-6 shadow-inner hover:shadow-md hover:shadow-red-950 active:bg-blue-600 max-w-52 m-1 max-h-52'>
            <img src={upwork} className=' w-6/12'/>
            Lets Colaborate via Upwork
          </a>

          <a href='#' target='_blank' className=' rounded-lg flex flex-col justify-center items-center py-6 shadow-inner hover:shadow-md hover:shadow-red-950 active:bg-blue-600 max-w-52 m-1 max-h-52' >
            <img src={fiverr} className=' w-6/12' />
            Lets Colaborate via Fiverr
          </a>

          <a href='#' target='_blank' className='rounded-lg flex flex-col justify-center items-center py-6 shadow-inner hover:shadow-md hover:shadow-red-950 active:bg-blue-600 max-w-52 m-1 max-h-52' >
           <img src={linkedin} className=' w-6/12' />
            Lets Connect
          </a>

          <a href='#' target='_blank' className='rounded-lg flex flex-col justify-center items-center py-6 shadow-inner hover:shadow-md hover:shadow-red-950 active:bg-blue-600 max-w-52 max-h-52 m-1'>
           <img src={medium} className=' w-6/12' />
            Read My Blogs on Medium
          </a>

          <a href='#' target='_blank' className='rounded-lg flex flex-col justify-center items-center py-6 shadow-inner hover:shadow-md hover:shadow-red-950 active:bg-blue-600 max-w-52 max-h-52 m-1'>
             <img src={gh} className=' w-6/12' />
            Lets Colaborate on a Project
          </a>

        </div>
      </div>

    </div>
  )
}



export default Home