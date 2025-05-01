import '../styles/general.css'
import '../styles/heroSection.css'
import twitterIcon from '../assets/twitter.svg'
import instagramIcon from '../assets/instagram.svg'
import { SectionNavogator } from './SectionNavigator'


export const HeroSection = () => {
  return (
    <section className="flex main-container w-full flex-row items-center w-full justify-between">

      <div className="flex flex-col">
        <span className="helperText socialLinksText">Follow us</span>

        <a href="#" className='pb-[24px]'><img src={twitterIcon} alt="Twitter" /></a>
        <a href="#" className='pb-[24px]'><img src={instagramIcon} alt="Instagram" /></a>

      </div>

      <div className="flex h-full w-120 flex-col align-center">
        <div className='flex flex-row items-center'>
          <div className="divider"></div>
          <p className="subtitle"> A Hiking Guide </p>
        </div>

        <h1 className="title">
          Be Prepared For The Mountains And Beyond!
        </h1>
        <p className="scrollDown">scroll down ↓</p>
      </div>

      <SectionNavogator isActive={false} />
    </section>

  )
}



