import { useState } from "react";
import { Input, Select, Table, Tag } from "antd"
import { useTranslation } from "react-i18next";
import Actions from "../../components/actions";
import useGetAllData from "../../hooks/useGetAllData";
import SimpleIndexPageView from "./crud/view";
import SimpleIndexPageUpdate from "./crud/update";
import useUrlQueryParams from "../../hooks/useUrlQueryParams";
import CreateButton from "../../components/buttons/create_button";
import SimpleIndexPageCreate from "./crud/create";
import checkPermession from "../../utils/check_permession";
import useDebounce from "../../hooks/useDebonce";
import { CiSearch } from "react-icons/ci";
import CustomPagination from '../../components/pagination';

type SimplePageType = {
  url: string,
  title: string, 
  view_permession: string
  update_permession: string
  create_permession: string
  delete_permession: string
}

const SimpleIndexPage: React.FC<SimplePageType> = ({url, title, view_permession, update_permession, create_permession, delete_permession}) : JSX.Element => {
    const {t} = useTranslation()
    const { urlValue, writeToUrl } = useUrlQueryParams({
      currentPage: 1,
      perPage: 10,
    });

    const [isCreate, setisCreate] = useState<boolean>(false)
    const [isView, setisView] = useState<boolean>(false)
    const [isUpdate, setisUpdate] = useState<boolean>(false)
    const [id, setid] = useState<number | undefined>()
    const [status, setstatus] = useState<number>(1)
    
    const searchVal = useDebounce(urlValue?.q, 500);

    const { data, isLoading, refetch } = useGetAllData<any>({
      queryKey: [url, urlValue.perPage, urlValue.currentPage, searchVal, status],
      url: url,
      urlParams: { "perPage": urlValue.perPage, Page: urlValue.currentPage, "name":searchVal, "status": status}
    })

    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (i:any, e:any) => (
          <Tag color={e.status == 1 ? 'success' : 'error'}>{e?.status == 1 ? t('Active') : t('Inactive')}</Tag>
        )
      },
      {
        title: t("Actions"),
        dataIndex: "actions",
        key: "actions",
        className: "action-column",
        render: (i:any,e: any) => (
          <Actions
            id={e?.id}
            url={url}
            refetch={refetch}
            onClickEdit={() => {setisUpdate(true); setid(e?.id)}}
            onClickView={() => {{setisView(true); setid(e?.id)}}}
            viewPermession={view_permession}
            editPermession={update_permession}
            deletePermession={delete_permession}
          />
        ),
      },
    ];

    return(
      <>
          <>
            <div className="flex justify-between items-center pt-2 pb-4">
              <h2 className={'font-medium text-xl'}>{t(title)}</h2>
              {
                checkPermession(create_permession) ? <CreateButton onClick={() => setisCreate(true)}/> : null
              }
            </div>

            <div className="grid grid-cols-12 gap-3 mb-3">
            <div className="col-span-3">
                <Input
                  className="h-[32px] w-full"
                  value={urlValue?.q}
                  placeholder={`${t("Search by name")}...`}
                  prefix={<CiSearch fontSize={20} color="#b9b9b9" />}
                  onChange={(e) =>writeToUrl({ name: "q", value: e.target.value })}
                  allowClear
                />
              </div>
              <div className="col-span-3">
              <Select
                defaultValue={1}
                style={{width:'100%'}}
                onChange={(value) => {writeToUrl({name:'status', value: value}); setstatus(value)}}
                options={[
                  { value: 1, label: t('Active') },
                  { value: 0, label: t('Inactive') },
                ]}
              />
              </div>
            </div>
            <Table dataSource={data?.length ? data : []} loading={isLoading} columns={columns} rowKey={'id'} className={'base-page-table'} pagination={false}/>
            <CustomPagination totalCount={50} currentPage={urlValue.currentPage} perPage={urlValue.perPage} />
          </>

          <SimpleIndexPageView isView={isView} setisView={setisView} id={id}  url={url}/>
          <SimpleIndexPageUpdate isUpdate={isUpdate} setisUpdate={setisUpdate} id={id}  url={url}/>
          <SimpleIndexPageCreate isCreate={isCreate} setisCreate={setisCreate} url={url}/>
      </>  
  )
}

export default SimpleIndexPage