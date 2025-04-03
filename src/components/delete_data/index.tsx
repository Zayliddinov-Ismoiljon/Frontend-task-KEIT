import { Button, Modal, Tooltip } from "antd";
import { useTranslation } from "react-i18next";
import { ReactNode, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { delete_data } from "../../services";

type TypeDeleteData = {
  children: ReactNode,
  id: number | string,
  url: string,
  refetch: any,
  className?: string,
  placement?: "left" | "right" | "top" | "bottom",
  navigateUrl?: string,
  data?: any,
  refetchSecond?: any,
  disabled?: boolean
}

const DeleteData: React.FC<TypeDeleteData> = ({ children, className, url, id, refetch, placement, navigateUrl, data, refetchSecond, disabled }) => {
  const { t } = useTranslation();
  const navigate = useNavigate()
  const [visible, setVisible] = useState<boolean>(false);

  const { mutate } = useMutation({
    mutationFn: () => delete_data(url, id, data),
    onSuccess: () => {
      setVisible(false);
      if (navigateUrl) {
        navigate(navigateUrl)
        if(refetch) refetch();
      } else {
        refetch();
        window.location.reload()
        if(refetchSecond) refetchSecond()
      }      
    }
  });

  return (
    <>
        <Tooltip placement={placement ?? "topLeft"} title={t("Delete")}>
          <span onClick={() => !disabled && setVisible(true)} className={className ?? "flex-center"}>
            {children}
          </span>
        </Tooltip>
      <Modal open={visible} footer={null} title={null} closable={false} centered width={416}>
        <div className="justify-center text-center">
          <h5 className="text-[20px] font-bold" >{t("Do you want to delete information?")}</h5>
          <span className="text-[14px] font-light opacity-75" >{t("Once the data is deleted, it cannot be recovered.")}</span>
        </div>
        <div className="grid grid-cols-12 gap-3 mt-[24px]">
          <div className="col-span-6">
            <Button className="me-2 w-full" onClick={() => setVisible(false)} >{t("No")}</Button>
          </div>
          <div className="col-span-6">
            <Button type="primary" className="w-full" danger onClick={() => mutate()} >{t("Yes")}</Button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default DeleteData;