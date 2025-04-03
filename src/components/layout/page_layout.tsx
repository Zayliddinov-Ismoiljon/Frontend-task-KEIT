import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { FaPlus } from "react-icons/fa"
import { Button } from "antd"
import { GrDocumentExcel } from "react-icons/gr"

type IPageLayout = {
    title: string
    url?: string
    children: React.ReactNode
    onExportExcel?: () => void
}

const PageLayout: React.FC<IPageLayout> = ({title, url, children, onExportExcel}) : JSX.Element => {
    const {t} = useTranslation()
    return(
        <div className={`p-2`}>
            <div className="flex justify-between items-center pt-2 pb-4">
                <h2 className={'font-medium text-xl'}>{t(title)}</h2>
                <div className="flex items-center">
                    <Button htmlType="button" className="mr-3" onClick={onExportExcel}><GrDocumentExcel size={16} />{t('엑셀 다운로드')}</Button>
                    <Link to={url ? url : ''} className="px-[18px] py-[6px] flex items-center rounded-lg text-white bg-main_color text-[14px]"><FaPlus size={12} className="mr-1"/>{t('추가')}</Link>
                </div>
            </div>
            <div className="mt-3">
                {children}
            </div>
        </div>
    )
}

export default PageLayout