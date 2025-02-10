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
    currentPage: 1,
    perPage: 10,
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
      dataIndex: 'firstName',
      key: 'id',
      render: (e) => <span>{e}</span>
    },
    {
      title: 'Last name',
      dataIndex: 'lastName',
      key: 'id',
      render: (e) => <span>{e}</span>
    },
    {
      title: 'Passport',
      dataIndex: 'psJShR',
      key: 'id',
      render: (e) => <span>{e}</span>
    },
    {
      title: 'Passport number',
      dataIndex: 'psNumer',
      key: 'id',
      render: (e) => <span>{e}</span>
    },
    {
      title: 'Passport serea',
      dataIndex: 'psSerea',
      key: 'id',
      render: (e) => <span>{e}</span>
    },
    {
      title: t("Actions"),
      dataIndex: "actions",
      key: "actions",
      className: "action-column",
      render: (i:any,e: any) => (
        <Actions
          id={e?.id}
          url={'profiles'}
          refetch={refetch}
          onClickEdit={() => {}}
          onClickView={() => {}}
          viewPermession={'profiles/view'}
          editPermession={'profiles/student_update'}
          deletePermession={'profiles/delete'}
        />
      ),
    },
  ];

  const { data: students, isLoading, refetch } = useGetAllData<any>({
    queryKey: ["profiles", urlValue.perPage, urlValue.currentPage, searchVal],
    url: "profiles",
    urlParams: { "PerPage": urlValue.perPage, page: urlValue.currentPage, 'users.role': 'role_student', fullName: searchVal },
  });

  const studentsWithKey = students?.map((student: any, index: number) => ({
    ...student,
    key: student.id || index, 
  }));

  return(
    <PageLayout title="Barbers" isButton={false} url="barber-create" create_permession="cost_type/create">
      <Row gutter={[12,12]} className="mb-3">
        <Col span={6}>
          <SearchInput duration={500} setSearchVal={setSearchVal} className="w-full" placeholder="Search by full name ..." />
        </Col>
        <Col span={6}>
          <SearchInput duration={500} setSearchVal={setSearchVal} className="w-full" placeholder="Search by passport ..." />
        </Col>
        <Col span={6}>
          <SearchInput duration={500} setSearchVal={setSearchVal} className="w-full" placeholder="Search by passport number ..." />
        </Col>
        <Col span={6}>
          <SearchInput duration={500} setSearchVal={setSearchVal} className="w-full" placeholder="Search by passport serea ..." />
        </Col>
      </Row>
      <Table  dataSource={studentsWithKey} columns={columns} loading={isLoading} pagination={false} scroll={{y:500}}/>
      <CustomPagination totalCount={7000} currentPage={urlValue.currentPage} perPage={urlValue.perPage} />
    </PageLayout>
  )
}

export default Barbers