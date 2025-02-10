import { Col, Row, Table, TableProps } from "antd";
import PageLayout from "../../components/layout/page_layout";
import useGetAllData from "../../hooks/useGetAllData";
import useUrlQueryParams from "../../hooks/useUrlQueryParams";
import { useTranslation } from "react-i18next";
import Actions from "../../components/actions";
import SearchInput from "../../components/search_input";
import { useState } from "react";
import CustomPagination from "../../components/pagination";
import { ISalons } from "./models";

const Salons: React.FC = () => {
  const {t} = useTranslation()

  const { urlValue } = useUrlQueryParams({
    currentPage: 1,
    perPage: 10,
  });

  const [searchVal, setSearchVal] = useState<string>("");

  const columns: TableProps<ISalons>['columns'] = [
    {
      title: 'Image',
      dataIndex: '',
      key: 'id',
      render: (e) => <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" className="w-[70px] h-[50px]"/>
    },
    {
      title: 'Name',
      dataIndex: 'firstName',
      key: 'id',
      render: (e) => <span>{e}</span>
    },
    {
      title: 'About salon',
      dataIndex: 'firstName',
      key: 'id',
      render: (e) => <span>{e}</span>
    },
    {
      title: 'Specialistion',
      dataIndex: 'psSerea',
      key: 'id',
      render: (e) => <span>{e}</span>
    },
    {
      title: 'Adress',
      dataIndex: 'lastName',
      key: 'id',
      render: (e) => <span>{e}</span>
    },
    {
      title: 'Employees count',
      dataIndex: 'psJShR',
      key: 'id',
      render: (e) => <span>{e}</span>
    },
    {
      title: 'Phone number',
      dataIndex: 'psNumer',
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
    <PageLayout title="Salons" isButton={false} url="salon-create" create_permession="cost_type/create">
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

export default Salons