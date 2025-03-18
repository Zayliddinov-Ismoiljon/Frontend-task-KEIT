import { Col, Row, Table, TableProps } from "antd";
import PageLayout from "../../components/layout/page_layout";
import useGetAllData from "../../hooks/useGetAllData";
import useUrlQueryParams from "../../hooks/useUrlQueryParams";
import { useTranslation } from "react-i18next";
import Actions from "../../components/actions";
import SearchInput from "../../components/search_input";
import { useState } from "react";
import CustomPagination from "../../components/pagination";
import { IBarbers } from "./models";

const Barbers: React.FC = () => {
  const {t} = useTranslation()

  const { urlValue } = useUrlQueryParams({
    currentPage: 0,
    size: 10,
  });

  const [searchVal, setSearchVal] = useState<string>("");

  const columns: TableProps<IBarbers>['columns'] = [
    {
      title: 'Image',
      dataIndex: '',
      key: 'id',
      render: (e) => <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" className="w-[70px] h-[50px]"/>
    },
    {
      title: 'First name',
      dataIndex: 'first_name',
      key: 'id',
      render: (_, record) => <span>{record?.first_name}</span>
    },
    {
      title: 'Last name',
      dataIndex: 'last_name',
      key: 'id',
      render: (_, record) => <span>{record?.last_name}</span>
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'id',
      render: (_, record) => <span>{record?.gender}</span>
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'id',
      render: (_, record) => <span>{record?.phone}</span>
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'id',
      render: (_, record) => <span>{record?.email}</span>
    },
    {
      title: t("Actions"),
      dataIndex: "actions",
      key: "actions",
      className: "action-column",
      render: (i:any,e: any) => (
        <Actions
          id={e?.id}
          url={'barber'}
          refetch={refetch}
          onClickEdit={() => {}}
          onClickView={() => {}}
          viewPermession={'View barber'}
          editPermession={'Update barber'}
          deletePermession={'Delete barber'}
        />
      ),
    },
  ];

  const { data: barbers, isLoading, refetch } = useGetAllData<any>({
    queryKey: ["barber", urlValue.perPage, urlValue.currentPage, searchVal],
    url: "barber",
    urlParams: { "size": urlValue.perPage, page: urlValue.currentPage, full_name: searchVal },
  });

  const barbersWithKey = barbers?.data?.map((barber: any, index: number) => ({
    ...barber,
    key: barber.id || index, 
  }));

  return(
    <PageLayout title="Barbers" isButton={false} url="barber-create" create_permession="Create barber">
      <Row gutter={[12,12]} className="mb-3">
        <Col span={6}>
          <SearchInput duration={500} setSearchVal={setSearchVal} className="w-full" placeholder="Search by full name ..." />
        </Col>
      </Row>
      <Table  dataSource={barbersWithKey} columns={columns} loading={isLoading} pagination={false} scroll={{y:500}}/>
      <CustomPagination totalCount={barbers?.pageable?.total} currentPage={urlValue.currentPage} perPage={urlValue.perPage} />
    </PageLayout>
  )
}

export default Barbers