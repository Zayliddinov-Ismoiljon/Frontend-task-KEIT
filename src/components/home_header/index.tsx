import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import './styles.css'

const HomeHeader : React.FC = () : JSX.Element => {
  const {t} = useTranslation()
  return(
    <>
      <div className="header py-3 bg-[#212629] border-b-[0.5px] border-solid border-[#443C44]">
        <div className="container mx-auto">
          <div className="w-full flex justify-between items-center">
            <a href="/"><img src="https://gico.io/wowhair/images/logo.png" alt="logo" /></a>
            <nav className="w-[30%]">
              <ul className="list-none p-0 m-0 text-white flex justify-between items-center">
                <li><Link to={''}>{t('Home')}</Link></li>
                <li><Link to={''}>{t('About')}</Link></li>
                <li><Link to={''}>{t('Services')}</Link></li>
                <li><Link to={''}>{t('Contact')}</Link></li>
                <li><Link to={'/login'}>{t('Sign In')}</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeHeader