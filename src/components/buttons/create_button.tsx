import { Button } from "antd"
import { useTranslation } from "react-i18next"
import { FaPlus } from "react-icons/fa"

type ICreateType = {
  onClick: () => void
}

const CreateButton: React.FC<ICreateType> = ({onClick}) => {
  const {t} = useTranslation()
  return (
    <Button className="bg-[#07DA83] text-white" onClick={onClick}><FaPlus size={12} />{t('Create')}</Button>
  )
}

export default CreateButton
