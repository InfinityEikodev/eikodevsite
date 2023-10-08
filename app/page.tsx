import Image from 'next/image'
import Link from 'next/link';
import { Carousel } from './components/Carousel';

export default function Home() {
  return (
    <main>
      <header className='flex grid-cols-1 h-screen md:grid md:grid-cols-2 md:grid-flow-row md:gap-20'>
        <section className='flex flex-col justify-center items-center w-screen md:w-max md:justify-start md:items-start md:pl-28 md:pt-[30vh]'>
          <img src="/Eiko.svg" alt="" className='w-[284px] h-[76px]' />
          <p className='font-light text-2xl text-center mt-9 md:text-left'>
            Software Engineer and Backend Developer.
          </p>
          <div className='flex flex-row mt-9 gap-5'>
            <a href="https://twitter.com/Eiko_Yoshiida">
              <svg width="28" height="28" className="w-7 h-7" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.8334 3.5C25.7161 4.28805 24.4791 4.89079 23.17 5.285C22.4674 4.47709 21.5336 3.90447 20.4949 3.64458C19.4562 3.38468 18.3628 3.45006 17.3624 3.83186C16.3621 4.21366 15.5032 4.89347 14.9018 5.77933C14.3005 6.6652 13.9857 7.71439 14 8.785V9.95166C11.9498 10.0048 9.91817 9.55011 8.0862 8.62802C6.25422 7.70592 4.67872 6.34507 3.50002 4.66666C3.50002 4.66666 -1.16665 15.1667 9.33335 19.8333C6.93064 21.4643 4.06837 22.2821 1.16669 22.1667C11.6667 28 24.5 22.1667 24.5 8.75C24.4989 8.42503 24.4677 8.10086 24.4067 7.78166C25.5974 6.60741 26.4377 5.12483 26.8334 3.5V3.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </a>
            <a href="https://github.com/virutalhiro/">
              <svg width="28" height="28" className="w-7 h-7" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 22.1667C4.66665 23.9167 4.66665 19.25 2.33331 18.6667M18.6666 25.6667V21.1517C18.7104 20.5954 18.6352 20.0361 18.4462 19.5111C18.2571 18.9861 17.9584 18.5073 17.57 18.1067C21.2333 17.6983 25.0833 16.31 25.0833 9.94C25.083 8.31113 24.4565 6.74473 23.3333 5.565C23.8651 4.13992 23.8275 2.56474 23.2283 1.16667C23.2283 1.16667 21.8516 0.758332 18.6666 2.89333C15.9927 2.16862 13.174 2.16862 10.5 2.89333C7.31498 0.758332 5.93831 1.16667 5.93831 1.16667C5.33909 2.56474 5.30148 4.13992 5.83331 5.565C4.70179 6.75348 4.07459 8.33404 4.08331 9.975C4.08331 16.2983 7.93331 17.6867 11.5966 18.1417C11.2128 18.5383 10.9168 19.0113 10.7278 19.5299C10.5389 20.0485 10.4613 20.6011 10.5 21.1517V25.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </a>
            <a href="mailto:samuel.lol2019a@hotmail.com">
              <svg width="28" height="28" viewBox="0 0 28 28" className="w-7 h-7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.375 7.875V20.125C25.375 20.8212 25.0984 21.4889 24.6062 21.9812C24.1139 22.4734 23.4462 22.75 22.75 22.75H5.25C4.55381 22.75 3.88613 22.4734 3.39384 21.9812C2.90156 21.4889 2.625 20.8212 2.625 20.125V7.875M25.375 7.875C25.375 7.17881 25.0984 6.51113 24.6062 6.01884C24.1139 5.52656 23.4462 5.25 22.75 5.25H5.25C4.55381 5.25 3.88613 5.52656 3.39384 6.01884C2.90156 6.51113 2.625 7.17881 2.625 7.875M25.375 7.875V8.1585C25.375 8.60667 25.2604 9.04739 25.0418 9.43868C24.8233 9.82997 24.5083 10.1588 24.1267 10.3938L15.3767 15.778C14.9627 16.033 14.4861 16.168 14 16.168C13.5139 16.168 13.0373 16.033 12.6233 15.778L3.87333 10.395C3.49174 10.16 3.17668 9.83113 2.95816 9.43985C2.73965 9.04856 2.62495 8.60784 2.625 8.15967V7.875" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </a>

          </div>
        </section>

        <section className='h-screen items-center justify-center hidden md:flex'>
          <img className="pointer-events-none" src="spacestation.jpg" />
        </section>
      </header>

      <div className='flex flex-row gap-28'>
        <section className='flex flex-col text-center font-light prose-invert prose-p:px-5 prose-p:mb-4 pb-28 md:w-2/3 md:prose-p:px-0 md:text-left md:pl-28'>
          <h1 className='text-3xl font-bold mb-4'>Samuel Silva (a.k.a Eiko)</h1>
          <p className='font-normal mb-4'>
            I'm a web developer from Teresina, Brazil. I had my first contact with
            programming when I was 15, but I didn't really start coding until I was 16.
            Nowadays, I'm a fast learner and proficient in TypeScript and JavaScript,
            with a focus on back-end development.
          </p>
          <p className='font-normal mb-4'>
            I've always been passionate about creating original and creative personal
            projects, which led me to develop several skills over the years. Also, I
            have always enjoyed participating in communities and projects with other
            people.
          </p>
          <p className='font-normal mb-4'>
            I'm interested in highly scalable technologies, DevOps, InfoSec and
            entrepreneurship.
          </p>
        </section>
        <img className="hidden w-96 h-96 pb-20 pointer-events-none md:inline" src="cube_ascii.gif"></img>
      </div>

      <Carousel />

      <section style={{ userSelect: 'none' }} className='flex flex-col text-center prose-invert prose-p:px-5 prose-p:mb-4 pb-28 md:prose-p:px-0'>
        <h1 className='text-3xl font-bold mb-4 text-center'>
          Most used technologies
        </h1>
        <p>
          I love bleeding-edge technologies and frameworks! Keep in mind that this list is not exhaustive, as I am always tinkering with different tools.
        </p>

        <div className='flex justify-center pt-5 not-prose'>
          <div className='grid justify-center items-center gap-5 w-[70rem] md:grid-cols-2'>
            <div className='flex flex-col border-[#2B2B2B] border-2 min-h-[124px] w-[300px] rounded-xl md:w-full md:flex-row'>
              <div className='flex justify-center items-center w-full h-auto border-[#2B2B2B] rounded-t-xl md:border-r-2 md:w-28 md:rounded-r-none md:rounded-l-xl overflow-hidden'>
                <img src="/ts.png" alt="TypeScript" className='bg-cover w-full h-full' />
              </div>
              <div className='flex flex-col justify-center text-left pl-5 pt-5 pr-5'>
                <h1 className='font-bold text-2xl'>TypeScript</h1>
                <a target='_blanck' className='pt-1 font-light mb-4'>JavaScript but with types.</a>
              </div>
            </div>
            <div className='flex flex-col border-[#2B2B2B] border-2 min-h-[124px] w-[300px] rounded-xl md:w-full md:flex-row'>
              <div className='flex justify-center items-center w-full h-auto border-[#2B2B2B] rounded-t-xl md:border-r-2 md:w-28 md:rounded-r-none md:rounded-l-xl overflow-hidden'>
                <img src="/rust.png" alt="TypeScript" className='bg-cover w-full h-full' />
              </div>
              <div className='flex flex-col justify-center text-left pl-5 pt-5 pr-5'>
                <h1 className='font-bold text-2xl'>Rust</h1>
                <a target='_blanck' className='pt-1 font-light mb-4'>Language for performant and scalable systems.</a>
              </div>
            </div>
            <div className='flex flex-col border-[#2B2B2B] border-2 min-h-[124px] w-[300px] rounded-xl md:w-full md:flex-row'>
              <div className='flex justify-center items-center w-full h-auto border-[#2B2B2B] rounded-t-xl md:border-r-2 md:w-28 md:rounded-r-none md:rounded-l-xl overflow-hidden'>
                <img src="/nestjs.png" alt="TypeScript" className='bg-cover w-full h-full' />
              </div>
              <div className='flex flex-col justify-center text-left pl-5 pt-5 pr-5'>
                <h1 className='font-bold text-2xl'>Nest.js</h1>
                <a target='_blanck' className='pt-1 font-light mb-4'>Framework for efficient server-side applications.</a>
              </div>
            </div>
            <div className='flex flex-col border-[#2B2B2B] border-2 min-h-[124px] w-[300px] rounded-xl md:w-full md:flex-row'>
              <div className='flex justify-center items-center w-full h-auto border-[#2B2B2B] rounded-t-xl md:border-r-2 md:w-28 md:rounded-r-none md:rounded-l-xl overflow-hidden'>
                <img src="/Fastify.png" alt="TypeScript" className='bg-cover w-full h-full' />
              </div>
              <div className='flex flex-col justify-center text-left pl-5 pt-5 pr-5'>
                <h1 className='font-bold text-2xl'>Fastify</h1>
                <a target='_blanck' className='pt-1 font-light mb-4'>Fast & low overhead web framework.</a>
              </div>
            </div>
            <div className='flex flex-col border-[#2B2B2B] border-2 min-h-[124px] w-[300px] rounded-xl md:w-full md:flex-row'>
              <div className='flex justify-center items-center w-full h-auto border-[#2B2B2B] rounded-t-xl md:border-r-2 md:w-28 md:rounded-r-none md:rounded-l-xl overflow-hidden'>
                <img src="/next.png" alt="TypeScript" className='bg-cover w-full h-full' />
              </div>
              <div className='flex flex-col justify-center text-left pl-5 pt-5 pr-5'>
                <h1 className='font-bold text-2xl'>Next.js</h1>
                <a target='_blanck' className='pt-1 font-light mb-4'>Framework for production React apps.</a>
              </div>
            </div>
            <div className='flex flex-col border-[#2B2B2B] border-2 min-h-[124px] w-[300px] rounded-xl md:w-full md:flex-row'>
              <div className='flex justify-center items-center w-full h-auto border-[#2B2B2B] rounded-t-xl md:border-r-2 md:w-28 md:rounded-r-none md:rounded-l-xl overflow-hidden'>
                <img src="/SvelteKit.png" alt="TypeScript" className='bg-cover w-full h-full' />
              </div>
              <div className='flex flex-col justify-center text-left pl-5 pt-5 pr-5'>
                <h1 className='font-bold text-2xl'>SvelteKit</h1>
                <a target='_blanck' className='pt-1 font-light mb-4'>Framework for building streamlined web apps.</a>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section style={{ userSelect: 'none' }} className='flex flex-col text-center prose-invert prose-p:px-5 prose-p:mb-4 pb-28 md:prose-p:px-0'>
        <h1 className='text-3xl font-bold mb-4 text-center'>
          Community Leader
        </h1>
        <p>
          @Discord
        </p>

        <div className='flex justify-center pt-5 not-prose'>
          <div className='grid justify-center items-center gap-5 w-[70rem] md:grid-cols-2'>
            <div className='flex flex-col border-[#2B2B2B] border-2 min-h-[124px] w-[300px] rounded-xl md:w-full md:flex-row'>
              <div className='flex justify-center items-center w-full h-auto border-[#2B2B2B] rounded-t-xl md:border-r-2 md:w-28 md:rounded-r-none md:rounded-l-xl overflow-hidden'>
                <img src="/ModPlace.png" alt="ModPlace" className='bg-cover w-full h-full' />
              </div>
              <div className='flex flex-col justify-center text-left pl-5 pt-5 pr-5'>
                <h1 className='font-bold text-2xl'>ModPlace</h1>
                <a href='https://discord.gg/5DpvNeFv' target='_blanck' className='pt-1 font-light mb-4'>Click here</a>
              </div>
              </div>
            <div className='flex flex-col border-[#2B2B2B] border-2 min-h-[124px] w-[300px] rounded-xl md:w-full md:flex-row'>
              <div className='flex justify-center items-center w-full h-auto border-[#2B2B2B] rounded-t-xl md:border-r-2 md:w-28 md:rounded-r-none md:rounded-l-xl overflow-hidden'>
                <img src="/logo.gif" alt="ModPlace" className='bg-cover w-full h-full' />
              </div>
              </div>
            <div className='flex flex-col border-[#2B2B2B] border-2 min-h-[124px] w-[300px] rounded-xl md:w-full md:flex-row'>
              <div className='flex justify-center items-center w-full h-auto border-[#2B2B2B] rounded-t-xl md:border-r-2 md:w-28 md:rounded-r-none md:rounded-l-xl overflow-hidden'>
                <img src="/HU3.png" alt="ModPlace" className='bg-cover w-full h-full' />
              </div>
              <div className='flex flex-col justify-center text-left pl-5 pt-5 pr-5'>
                <h1 className='font-bold text-2xl'>League of Hu3BR</h1>
                <a href='https://discord.gg/leagueofhu3' target='_blanck' className='pt-1 font-light mb-4'>Click here</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='flex flex-col text-center font-light prose-invert prose-p:px-5 prose-p:mb-4 pb-28 md:w-2/3 md:prose-p:px-0 md:text-left md:pl-28'>
        <h1 style={{ userSelect: 'none' }} className='text-3xl font-bold mb-4'>Contact & Jobs</h1>
        <p style={{ userSelect: 'none' }} className='mb-4'>
          Thanks for the visit! I hope you enjoyed it. If you want to take a peek at
          the source code of this website, you can do so at. <a className="text-blue-600 font-medium" href="mailto:samuel.lol2019a@hotmail.com" target="_blank">Samuel Eiko</a>.
        </p>
        <h2 id='aa' className='font-bold text-2xl mb-4'>Talk to me!</h2>
        <ul className='list-disc list-inside pl-6 text-lg mb-4 md:list-outside'>
          <li>Email: <a className="text-blue-600 font-medium" href="mailto:samuel.lol2019a@hotmail.com" target="_blank">samuel.lol2019a@hotmail.com</a></li>
          <li>Github: <a className="text-blue-600 font-medium" href="https://github.com/virutalhiro/" target="_blank">@virtualhiro</a></li>
          <li> Discord: <a className='text-blue-600 font-medium'>@virtualhiro</a></li>
        </ul>
        <p>
        </p>
        <h2 className='font-bold text-2xl mb-4'>Play with me !</h2>
        <ul className='list-disc list-inside pl-6 text-lg mb-4 md:list-outside'>
          <li>Steam: <a href="https://steamcommunity.com/id/kushowrld/" className='text-blue-600 font-medium'>Eiko Yoshida</a></li>
          <li> Riot ID: <a className='text-blue-600 font-medium'>sam#ムーンボー</a></li>
          <li>League of Legends: <a href="https://www.op.gg/summoners/br/sam%20ama%20carol" className='text-blue-600 font-medium'>sam ama carol</a></li>
        </ul>
        <h2 className='font-bold text-2xl mb-4'>Jobs/Work</h2>
        <p>
          I'm a freelancer! If you enjoyed what you saw here, and wants a website,
          discord bot, or other services. Feel free to contact me using my email or
          sending a DM on Discord.
        </p>
        <br />
        <p>
          Also, I'm looking for apprenticeship/"jovem aprendiz" (in portuguese)
          opportunities. Feel free to contact me at Discord or email.
        </p>
      </section>

    </main>
  )
}