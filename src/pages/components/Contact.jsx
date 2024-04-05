import { useState } from 'react'
import axios from 'axios';
import ig from "../../assets/ig.svg";
import linkedin from "../../assets/linkedin.svg";
import fb from "../../assets/discord-6.svg";
import mail from "../../assets/mail.svg"

function Contact() {

  const [client, setTheData] = useState({
    email: 'asdf@asdf.asdf',
    name: 'asdasdf',
    phoneno: 'asdfasdf',
    query: 'asdfasdf asdf asdf asdf asdfasdf asdfas sfasdf',
  });



  async function sendData() {
    try {
      const urloftheserver = "http://localhost:3000/mailadmin/"
      const res = await axios.post(urloftheserver, client);
      console.log("The response was ", res.data);

    } catch (err) {
      console.error('the message was not sent', err)
    }
  }

  return (
    <div className='flex-1'>
      <h1 className=' text-4xl text-center pt-10  font-bold'>Get in touch with me!</h1>

      <div className=' items-center text-center p-7'>
        <div className='flex flex-wrap pt-6 text-xl justify-center'>
          <a href="#" target="_blank">
            <div className=' rounded-lg flex flex-col justify-center items-center py-6 shadow hover:shadow-md active:shadow-blue-600 hover:bg-blue-500 max-w-72 m-1'>
              <img src={ig} className=' w-4/12 m-6' />
              lets get in touch
            </div>
          </a>

          <a href='#' target="_blank">
            <div className=' rounded-lg flex flex-col justify-center items-center py-6 shadow  hover:shadow-md active:shadow-blue-600 hover:bg-blue-500 max-w-72 m-1'>
              <img src={fb} className=' w-4/12 m-6' />
              Lets chat
            </div>
          </a>

          <a href='#' target="_blank">
            <div className='rounded-lg flex flex-col justify-center items-center py-6 shadow hover:shadow-md active:shadow-blue-600 hover:bg-blue-500 max-w-72 m-1' >
              <img src={linkedin} className='w-4/12 m-6' />
              Lets Connect
            </div>
          </a>

          <a href='mailto:balaji.4463@gmail.com'>
            <div className='rounded-lg flex flex-col justify-center items-center py-6 shadow hover:shadow-md active:shadow-blue-600 hover:bg-blue-500 max-w-72 m-1' >
              <img src={mail} className='w-4/12 m-6' />
              Or send me mail @
              balali.4463@gmail.com
            </div>
          </a>

        </div>
      </div>




    </div>
  );
}

export default Contact