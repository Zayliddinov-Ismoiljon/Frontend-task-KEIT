import { Button, Drawer, Form, Input, Switch } from "antd"
import { useTranslation } from "react-i18next"
import { IoClose } from "react-icons/io5"
import useGetOneData from "../../../hooks/useGetOneData"
import TextArea from "antd/es/input/TextArea"
import { useEffect } from "react"

type ViewPageType = {
    isView: boolean
    setisView: any
    id: number | undefined
    url: string
}

const SimpleIndexPageView: React.FC<ViewPageType> = ({isView, setisView, id, url}) : JSX.Element => {
    const {t} = useTranslation()
    const [form] = Form.useForm()

    const onClose = () => {
        setisView(false)
    }

    const { data } = useGetOneData<any>({
        queryKey: [url, id],
        url: `${url}/${id}`,
        options: {
            enabled: !!id
        }
    })

    useEffect(() => {
        if (data) {
            form.setFieldsValue({
                name: data.name,
                description: data.description,
            });
        }
    }, [data]);

    return(
        <>
            <Drawer 
            title={
                <div className="flex justify-between items-center">
                    <h3>{data?.name}</h3>
                    <IoClose size={16} onClick={() => setisView(false)} className="hover:cursor-pointer"/>
                </div>
                } 
            onClose={onClose} open={isView} closeIcon={false} 
            footer={
                <div className="flex justify-end items-center">
                    <Button onClick={() => setisView(false)} className="bg-red-500 text-white w-[120px]">{t('Close')}</Button>
                </div>
            }
            styles={{
                header: { backgroundColor: "#F7F7F7" },
                body: { backgroundColor: "white" },
                footer: { backgroundColor: "#F7F7F7" },
            }}
            >
                <Form form={form} layout="vertical" name="basic">
                    <Form.Item name='name' required label={<span>{t('Name')}</span>}>
                        <Input disabled/>
                    </Form.Item>
                    <Form.Item name='description' label={<span>{t('Description')}</span>}>
                        <TextArea disabled rows={5}/>
                    </Form.Item>
                    <Form.Item name='status' className="text-end">
                        <Switch checked={data?.status == 1 ? true : false} className="bg-red-500" disabled checkedChildren={t('Active')}  unCheckedChildren={t('Inactive')}/>
                    </Form.Item>
                </Form>
            </Drawer>
        </>
    )
}

export default SimpleIndexPageView