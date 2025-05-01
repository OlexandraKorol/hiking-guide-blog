import classNames from 'classnames'
import '../styles/sectionNavigator.css'
import '../styles/general.css'


interface SectionNavigatorProps {
  isActive: boolean;
}

export const SectionNavogator = ({ isActive }: SectionNavigatorProps) => {
  return (
    <div className="sticky flex flex-col items-end text-white">
      <div className='flex'>

        <span className="helperText">Start</span>
        <div className={classNames(isActive ? "activeSectionIndicator" : "unActiveSectionIndicator")}></div>
      </div>

      <div className="flex items-center gap-2">
        <span className="helperText">01</span>
        <div className={classNames(isActive ? "activeSectionIndicator" : "unActiveSectionIndicator")}></div>
      </div>

      <div className="flex items-center gap-2">
        <span className="helperText">02</span>
        <div className={classNames(isActive ? "activeSectionIndicator" : "unActiveSectionIndicator")}></div>
      </div>

      <div className="flex items-center gap-2">
        <span className="helperText">03</span>
        <div className={classNames(isActive ? "activeSectionIndicator" : "unActiveSectionIndicator")}></div>
      </div>
    </div>
  )
}

