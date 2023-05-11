import Image from 'next/image'

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
            <a href="https://github.com/InfinityEikodev">
              <svg width="28" height="28" className="w-7 h-7" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 22.1667C4.66665 23.9167 4.66665 19.25 2.33331 18.6667M18.6666 25.6667V21.1517C18.7104 20.5954 18.6352 20.0361 18.4462 19.5111C18.2571 18.9861 17.9584 18.5073 17.57 18.1067C21.2333 17.6983 25.0833 16.31 25.0833 9.94C25.083 8.31113 24.4565 6.74473 23.3333 5.565C23.8651 4.13992 23.8275 2.56474 23.2283 1.16667C23.2283 1.16667 21.8516 0.758332 18.6666 2.89333C15.9927 2.16862 13.174 2.16862 10.5 2.89333C7.31498 0.758332 5.93831 1.16667 5.93831 1.16667C5.33909 2.56474 5.30148 4.13992 5.83331 5.565C4.70179 6.75348 4.07459 8.33404 4.08331 9.975C4.08331 16.2983 7.93331 17.6867 11.5966 18.1417C11.2128 18.5383 10.9168 19.0113 10.7278 19.5299C10.5389 20.0485 10.4613 20.6011 10.5 21.1517V25.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </a>
            <a href="mailto:samuel.lol2019a@hotmail.com">
              <svg width="28" height="28" viewBox="0 0 28 28" className="w-7 h-7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.375 7.875V20.125C25.375 20.8212 25.0984 21.4889 24.6062 21.9812C24.1139 22.4734 23.4462 22.75 22.75 22.75H5.25C4.55381 22.75 3.88613 22.4734 3.39384 21.9812C2.90156 21.4889 2.625 20.8212 2.625 20.125V7.875M25.375 7.875C25.375 7.17881 25.0984 6.51113 24.6062 6.01884C24.1139 5.52656 23.4462 5.25 22.75 5.25H5.25C4.55381 5.25 3.88613 5.52656 3.39384 6.01884C2.90156 6.51113 2.625 7.17881 2.625 7.875M25.375 7.875V8.1585C25.375 8.60667 25.2604 9.04739 25.0418 9.43868C24.8233 9.82997 24.5083 10.1588 24.1267 10.3938L15.3767 15.778C14.9627 16.033 14.4861 16.168 14 16.168C13.5139 16.168 13.0373 16.033 12.6233 15.778L3.87333 10.395C3.49174 10.16 3.17668 9.83113 2.95816 9.43985C2.73965 9.04856 2.62495 8.60784 2.625 8.15967V7.875" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </a>
          </div>
        </section>

        <section className='h-screen items-center justify-center hidden md:flex'>
          <img className="pointer-events-none" src="spacestation.jpg"/>
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

      <section className='flex flex-col text-center prose-invert prose-p:px-5 prose-p:mb-4 pb-28 md:prose-p:px-0'>
        <h1 className='text-3xl font-bold mb-4 text-center'>Featured open-source projects</h1>
        <div className='flex justify-center pt-5 not-prose'>
          <div className='w-[22rem] md:w-[70rem] md:h-[520px]'>
            <div className='flex flex-row justify-center'>
              <div className='flex flex-row rounded-3xl h-[520px] text-left min-w-[1120px max-w-[1120px] gradiant-color relative overflow-hidden' style={{}} >
                <div className='p-8'>
                  <h1 className='font-syne font-bold text-4xl md:text-5xl pb-5'>Lobinho</h1>
                  <p className='text-base mb-4 md:text-lg'>A Discord Bot based on the League of Legends (LOL) game, use the bot to manage and create tickets.!</p>
                  <p className='text-base mb-4 md:text-lg'>Built in 2020 as a toy project with some friends, shut down and archived in 2021. Built for a server with 40K+ Members. I made a lot of architectural mistakes and also learned a lot while doing it.</p>
                  <h3 className='font-bold text-xl pt-5 mb-2'>Technologies</h3>
                  <div className='flex flex-row'>
                    <svg width="56" height="56" className="w-6 h-6 mr-2 rounded-sm" style={{fill: "white"}} viewBox="0 0 256 282" xmlns="http://www.w3.org/2000/svg"><title>Node.js</title><g><path d="M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z"></path><path d="M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z"></path></g></svg>
                    <svg width="120" height="258" viewBox="0 0 120 258" className="w-6 h-6 mr-2 rounded-sm" fill="none" xmlns="http://www.w3.org/2000/svg"><title>MongoDB</title><path d="M83.0089 28.7559C72.1328 15.9086 62.7673 2.86053 60.8539 0.150554C60.6525 -0.0501848 60.3503 -0.0501848 60.1489 0.150554C58.2355 2.86053 48.8699 15.9086 37.9938 28.7559C-55.3594 147.292 52.6968 227.287 52.6968 227.287L53.6031 227.889C54.4087 240.235 56.4228 258 56.4228 258H60.451H64.4792C64.4792 258 66.4934 240.335 67.299 227.889L68.2052 227.187C68.306 227.187 176.362 147.292 83.0089 28.7559ZM60.451 225.48C60.451 225.48 55.6172 221.365 54.3081 219.257V219.057L60.1489 89.9813C60.1489 89.5798 60.7532 89.5798 60.7532 89.9813L66.594 219.057V219.257C65.2848 221.365 60.451 225.48 60.451 225.48Z" fill="white"></path></svg>
                  </div>
                  <div className='font-bold pt-8'>
                    <a href="" className='mr-10'>
                      Github
                      <svg width="24" height="24" className="inline h-4 w-4" style={{stroke: "white"}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15 3H21V9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 14L21 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </a>
                  </div>
                </div>

                <div className='absolute right-0' >
                  <img src="/lobinho.png" alt="" className='hidden object-cover md:w-[35rem] md:inline md:h-full md:rounded-r-3xl opacity-10' />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='flex flex-col text-center prose-invert prose-p:px-5 prose-p:mb-4 pb-28 md:prose-p:px-0'>
        <h1 className='text-3xl font-bold mb-4 text-center'>
        Community Leader and Moderator
        </h1>
        <p>
          @Discord
        </p>

        <div className='flex justify-center pt-5 not-prose'>
          <div className='grid justify-center items-center gap-5 w-[70rem] md:grid-cols-2'>
            <div className='flex flex-col border-[#2B2B2B] border-2 min-h-[124px] w-[300px] rounded-xl md:w-full md:flex-row'>
              <div className='flex justify-center items-center w-full h-auto border-[#2B2B2B] rounded-t-xl md:border-r-2 md:w-28 md:rounded-r-none md:rounded-l-xl overflow-hidden'>
                <img src="/ModPlace.png" alt="ModPlace" className='bg-cover w-full h-full'/>
              </div>
              <div className='flex flex-col justify-center text-left pl-5 pt-5 pr-5'>
                <h1 className='font-bold text-2xl'>ModPlace</h1>
                <a href='https://discord.gg/5DpvNeFv' target='_blanck' className='pt-1 font-light mb-4'>Click here</a>
              </div>
            </div>
            <div className='flex flex-col border-[#2B2B2B] border-2 min-h-[124px] w-[300px] rounded-xl md:w-full md:flex-row'>
              <div className='flex justify-center items-center w-full h-auto border-[#2B2B2B] rounded-t-xl md:border-r-2 md:w-28 md:rounded-r-none md:rounded-l-xl overflow-hidden'>
                <img src="/CDJ.png" alt="ModPlace" className='bg-cover w-full h-full'/>
                </div>
              <div className='flex flex-col justify-center text-left pl-5 pt-5 pr-5'>
                <h1 className='font-bold text-2xl'>CDJ</h1>
                <a href='https://discord.gg/jogos' target='_blanck' className='pt-1 font-light mb-4'>Click here</a>
              </div>
              </div>
              <div className='flex flex-col border-[#2B2B2B] border-2 min-h-[124px] w-[300px] rounded-xl md:w-full md:flex-row'>
            <div className='flex justify-center items-center w-full h-auto border-[#2B2B2B] rounded-t-xl md:border-r-2 md:w-28 md:rounded-r-none md:rounded-l-xl overflow-hidden'>
              <img src="/CarlosVerso.png" alt="ModPlace" className='bg-cover w-full h-full'/>
              </div>
              <div className='flex flex-col justify-center text-left pl-5 pt-5 pr-5'>
                <h1 className='font-bold text-2xl'>CarlosVerso</h1>
                <a href='https://discord.gg/carlosverso' target='_blanck' className='pt-1 font-light mb-4'>Click here</a>
                </div>
            </div>
            <div className='flex flex-col border-[#2B2B2B] border-2 min-h-[124px] w-[300px] rounded-xl md:w-full md:flex-row'>
            <div className='flex justify-center items-center w-full h-auto border-[#2B2B2B] rounded-t-xl md:border-r-2 md:w-28 md:rounded-r-none md:rounded-l-xl overflow-hidden'>
              <img src="/HU3.png" alt="ModPlace" className='bg-cover w-full h-full'/>
              </div>
              <div className='flex flex-col justify-center text-left pl-5 pt-5 pr-5'>
                <h1 className='font-bold text-2xl'>LEAGUE of Hu3BR</h1>
                <a href='https://discord.gg/leagueofhu3' target='_blanck' className='pt-1 font-light mb-4'>Click here</a>
                </div>
                </div>
            <div className='flex flex-col border-[#2B2B2B] border-2 min-h-[124px] w-[300px] rounded-xl md:w-full md:flex-row'>
            <div className='flex justify-center items-center w-full h-auto border-[#2B2B2B] rounded-t-xl md:border-r-2 md:w-28 md:rounded-r-none md:rounded-l-xl overflow-hidden'>
              <img src="/interrogação.png" alt="ModPlace" className='bg-cover w-full h-full'/>
              </div>
              <div className='flex flex-col justify-center text-left pl-5 pt-5 pr-5'>
                <h1 className='font-bold text-2xl'>coming soon</h1>
                <a href='' target='_blanck' className='pt-1 font-light mb-4'></a>
                </div>
                </div>
            <div className='flex flex-col border-[#2B2B2B] border-2 min-h-[124px] w-[300px] rounded-xl md:w-full md:flex-row'>
            <div className='flex justify-center items-center w-full h-auto border-[#2B2B2B] rounded-t-xl md:border-r-2 md:w-28 md:rounded-r-none md:rounded-l-xl overflow-hidden'>
              <img src="/interrogação.png" alt="ModPlace" className='bg-cover w-full h-full'/>
              </div>
              <div className='flex flex-col justify-center text-left pl-5 pt-5 pr-5'>
                <h1 className='font-bold text-2xl'>coming soon</h1>
                <a href='' target='_blanck' className='pt-1 font-light mb-4'></a>
                </div>
            </div>
          </div>
        </div>
      
      </section>

      <section className='flex flex-col text-center font-light prose-invert prose-p:px-5 prose-p:mb-4 pb-28 md:w-2/3 md:prose-p:px-0 md:text-left md:pl-28'>
        <h1 className='text-3xl font-bold mb-4'>Contact & Jobs</h1>
        <p>
          Thanks for the visit! I hope you enjoyed it. If you want to take a peek at
          the source code of this website, you can do so at. <a className="text-blue-600 font-medium" href="mailto:samuel.lol2019a@hotmail.com" target="_blank">Samuel Eiko</a>
        </p>
        <h2 className='font-bold text-2xl mb-4'>Talk to me!</h2>
        <ul className='list-disc list-inside pl-6 text-lg mb-4 md:list-outside'>
          <li>Email: <a className="text-blue-600 font-medium" href="mailto:samuel.lol2019a@hotmail.com" target="_blank">samuel.lol2019a@hotmail.com</a></li>
          <li>Github: <a className="text-blue-600 font-medium" href="https://github.com/InfinityEikodev" target="_blank">@Eiko</a></li>
          <li>Twitter: <a className="text-blue-600 font-medium" href="https://twitter.com/Eiko_Yoshiida" target="_blank">@Eiko_Yoshiida</a></li>
          <li>Discord: <a href="" className='text-blue-600 font-medium'>Eiko#0666</a> </li>
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
