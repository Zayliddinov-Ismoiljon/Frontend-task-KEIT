import { Button, Drawer, Form, Input, Switch } from "antd"
import { useTranslation } from "react-i18next"
import { IoClose } from "react-icons/io5"
import useGetOneData from "../../../hooks/useGetOneData"
import TextArea from "antd/es/input/TextArea"
import { useEffect, useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { submitData } from "./request"
import { Notification } from "../../../utils/notification"
import { AxiosError } from "axios"
import { validationErrors } from "../../../utils/validation_error"

type ViewPageType = {
    isUpdate: boolean
    setisUpdate: any
    id: number | undefined
    url: string
}

const SimpleIndexPageUpdate: React.FC<ViewPageType> = ({ isUpdate, setisUpdate, id, url }) : JSX.Element => {
    const { t } = useTranslation()
    const [form] = Form.useForm()

    const onClose = () => {
        setisUpdate(false)
    }

    const { data } = useGetOneData<any>({
        queryKey: [url, id],
        url: `${url}/${id}`,
        options: {
            enabled: !!id,
        }
    })

    const [status, setstatus] = useState<boolean>(data?.status == 1 ? true : false)

    const handleStatus = (checked: boolean) => {
        setstatus(checked);
        form.setFieldsValue({ status: checked });
    }

    const {mutate} = useMutation({
        mutationFn: (newValues) => submitData(id, url, newValues),
        onSuccess: async (res) => {
            Notification('success', id ? 'update' : 'create', res?.message)
        },
        onError: (error: AxiosError) => {
            Notification('error', id ? 'update' : 'create', error?.message)
            validationErrors(form, error?.response?.data)
        },
        retry: 0,
    })

    const onFinish = (values: any) => {
        const updateValues = {
            ...values, 
            status: values.status ? 1 : 0
        }
        mutate(updateValues)
    }

    useEffect(() => {
        if (data) {
            form?.setFieldsValue({
                name: data.name,
                description: data.description,
                status: data.status === 1
            });
            setstatus(data.status === 1);
        }
    }, [data]);

    return (
        <>
            <Drawer
                title={
                    <div className="flex justify-between items-center">
                        <h3>{data?.name}</h3>
                        <IoClose size={16} onClick={() => setisUpdate(false)} className="hover:cursor-pointer" />
                    </div>
                }
                onClose={onClose}
                open={isUpdate}
                closeIcon={false}
                footer={
                    <div className="grid grid-cols-12 gap-2">
                        <div className="col-span-6">
                            <Button onClick={() => setisUpdate(false)} className="bg-red-500 text-white w-full">{t('Close')}</Button>
                        </div>
                        <div className="col-span-6">
                            <Button htmlType="submit" onClick={() => {form.submit();setisUpdate(false)}} className="bg-blue-500 text-white w-full">{t('Submit')}</Button>
                        </div>
                    </div>
                }
                styles={{
                    header: { backgroundColor: "#F7F7F7" },
                    body: { backgroundColor: "white" },
                    footer: { backgroundColor: "#F7F7F7" },
                }}
            >
                <Form form={form} layout="vertical" onFinish={onFinish}>
                    <Form.Item name='name' label={<span>{t('Name')}</span>} required>
                        <Input />
                    </Form.Item>
                    <Form.Item name='description' label={<span>{t('Description')}</span>}>
                        <TextArea rows={5} />
                    </Form.Item>
                    <Form.Item name='status' valuePropName="checked" className="text-end">
                        <Switch  checked={status}  onChange={handleStatus}  className="bg-red-500"  checkedChildren={t('Active')}  unCheckedChildren={t('Inactive')} />
                    </Form.Item>
                </Form>
            </Drawer>
        </>
    )
}

export default SimpleIndexPageUpdate
