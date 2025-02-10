import { Button, Drawer, Form, Input, Switch } from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoClose } from "react-icons/io5";
import TextArea from "antd/es/input/TextArea";
import { useMutation } from "@tanstack/react-query";
import { submitData } from "./request";
import { Notification } from "../../../utils/notification";
import { validationErrors } from "../../../utils/validation_error";
import { AxiosError } from "axios";

type CreatePageType = {
    isCreate: boolean
    setisCreate: any
    url: string
}

const SimpleIndexPageCreate: React.FC<CreatePageType> = ({isCreate, setisCreate, url}) : JSX.Element => {
    const { t } = useTranslation()
    const [form] = Form.useForm()
    const [status, setstatus] = useState<number>(1)

    const onClose = () => {
        setisCreate(false)
        form.resetFields()
    }

    const {mutate} = useMutation({
        mutationFn: (newValues) => submitData(undefined, url, newValues),
        onSuccess: async (res) => {
            Notification('success','create', res?.message)
            setisCreate(false)
            form.resetFields()
        },
        onError: (error: AxiosError) => {
            Notification('error','create', error?.message)
            validationErrors(form, error?.response?.data)
        },
        retry: 0,
    })

    const onFinish = (values: any) => {
        const updateValues = {
            ...values, 
            status: status
        }
        mutate(updateValues)
    }


    return(
        <>
            <Drawer
                title={
                    <div className="flex justify-between items-center">
                        <h3>{t('Create')}</h3>
                        <IoClose size={16} onClick={() => {setisCreate(false); form.resetFields()}} className="hover:cursor-pointer" />
                    </div>
                }
                onClose={onClose}
                open={isCreate}
                closeIcon={false}
                footer={
                    <div className="grid grid-cols-12 gap-2">
                        <div className="col-span-6">
                            <Button onClick={() => setisCreate(false)} className="bg-red-500 text-white w-full">{t('Close')}</Button>
                        </div>
                        <div className="col-span-6">
                            <Button htmlType="submit" onClick={() => form.validateFields().then(() => form.submit())} className="bg-blue-500 text-white w-full">{t('Submit')}</Button>
                        </div>
                    </div>
                }
                styles={{
                    header: { backgroundColor: "#F7F7F7" },
                    body: { backgroundColor: "white" },
                    footer: { backgroundColor: "#F7F7F7" },
                }}
            >
                <Form form={form} layout="vertical" onFinish={onFinish} initialValues={{status:1}}>
                    <Form.Item name='name' label={<span>{t('Name')}</span>} rules={[{ required: true, message: `${t("Please input name")}!` }]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name='description' label={<span>{t('Description')}</span>}>
                        <TextArea rows={5} />
                    </Form.Item>
                    <Form.Item name='status' valuePropName="checked" className="text-end">
                        <Switch checked={status == 1}  onChange={(checked) => setstatus(checked ? 1 : 0)}  className="bg-red-500"  checkedChildren={t('Active')}  unCheckedChildren={t('Inactive')} />
                    </Form.Item>
                </Form>
            </Drawer>
        </>
    )
}

export default SimpleIndexPageCreate