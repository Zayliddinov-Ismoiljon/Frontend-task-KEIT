import { useTranslation } from "react-i18next"
import { Tooltip } from "antd"
import { PiEyeLight } from "react-icons/pi"
import { VscEdit } from "react-icons/vsc"
import { AiOutlineDelete } from "react-icons/ai"
import DeleteData from "../delete_data"

type TypeActions = {
    id: number | string,
    url: string,
    onClickView: () => void,
    onClickEdit: () => void,
    refetch?: any
    disabled?: boolean
}

const Actions: React.FC<TypeActions> = ({id, url, onClickView, onClickEdit, refetch, disabled}) : JSX.Element => {
    const {t} = useTranslation()
    return(
        <div className="flex w-full">
            <div><Tooltip placement="topLeft" title={t("View")}><PiEyeLight size={18} color="#1677FF" className="view hover:cursor-pointer" onClick={onClickView} /></Tooltip></div>
            <div className="mx-5"><Tooltip placement="topLeft" title={t("Edit")}><VscEdit size={18} color="green" className="edit hover:cursor-pointer" onClick={onClickEdit} /></Tooltip></div>
            <Tooltip placement="left" title={t("Delete")}>
                <DeleteData refetch={refetch} url={url} id={id} disabled={disabled}><AiOutlineDelete size={18} color="red" className="delete hover:cursor-pointer"/></DeleteData>
            </Tooltip>
        </div>
    )
}

export default Actions