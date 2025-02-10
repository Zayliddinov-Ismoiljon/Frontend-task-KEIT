import { useTranslation } from "react-i18next"
import checkPermession from "../../utils/check_permession"
import CreateButton from "../buttons/create_button"
import { Link } from "react-router-dom"
import { FaPlus } from "react-icons/fa"

type IPageLayout = {
    title: string
    isButton: boolean
    create_permession: string
    url?: string
    onClick?: () => void
    children: React.ReactNode
}

const PageLayout: React.FC<IPageLayout> = ({title, isButton, create_permession, url, onClick, children}) : JSX.Element => {
    const {t} = useTranslation()
    return(
        <div className={`p-2`}>
            <div className="flex justify-between items-center pt-2 pb-4">
                <h2 className={'font-medium text-xl'}>{t(title)}</h2>
                {
                  isButton ? checkPermession(create_permession) ? <CreateButton onClick={onClick ? onClick : () => console.log('Cliked')}/> : null 
                  : checkPermession(create_permession) ? <Link to={url ? url : ''} className="px-[18px] py-[6px] flex items-center rounded-lg text-white bg-main_color text-[14px]"><FaPlus size={12} className="mr-1"/>{t('Create')}</Link> : null
                }
            </div>
            <div className="mt-3">
                {children}
            </div>
        </div>
    )
}

export default PageLayout