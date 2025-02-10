import { useTranslation } from "react-i18next"
import checkPermession from "../../utils/check_permession"
import { Tooltip } from "antd"
import { PiEyeLight } from "react-icons/pi"
import { VscEdit } from "react-icons/vsc"
import { AiOutlineDelete } from "react-icons/ai"
import DeleteData from "../delete_data"

type TypeActions = {
    id: number,
    url: string,
    onClickView: () => void,
    onClickEdit: () => void,
    viewPermession: string,
    editPermession: string,
    deletePermession: string
    refetch?: any
}

const Actions: React.FC<TypeActions> = ({id, url, onClickView, onClickEdit, viewPermession, editPermession, deletePermession, refetch}) : JSX.Element => {
    const {t} = useTranslation()
    return(
        <div className="flex w-full">
            <div>{checkPermession(viewPermession) ? <Tooltip placement="topLeft" title={t("View")}><PiEyeLight size={18} color="#1677FF" className="view hover:cursor-pointer" onClick={onClickView} /></Tooltip> : null}</div>
            <div className="mx-5">{checkPermession(editPermession) ? <Tooltip placement="topLeft" title={t("Edit")}><VscEdit size={18} color="green" className="edit hover:cursor-pointer" onClick={onClickEdit} /></Tooltip> : null}</div>
            {checkPermession(deletePermession) ?
            <Tooltip placement="left" title={t("Delete")}>
                <DeleteData permission={deletePermession} refetch={refetch} url={url} id={id}><AiOutlineDelete size={18} color="red" className="delete hover:cursor-pointer" /></DeleteData>
            </Tooltip> : null}
        </div>
    )
}

export default Actions