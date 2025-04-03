import { useEffect, useState } from "react";
import useGetAllData from "../../hooks/useGetAllData";
import useUrlQueryParams from "../../hooks/useUrlQueryParams";
import PageLayout from "../../components/layout/page_layout";
import { Col, Row, Table, TableProps, Tag } from "antd";
import CustomPagination from "../../components/pagination";
import Actions from "../../components/actions";
import { useTranslation } from "react-i18next";
import { ICars } from "./models";
import usePostAllData from "../../hooks/usePostAllData";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import useExportToExcel from "../../hooks/exportExel";
import SearchInput from "../../components/search_input";

const CarsIndex : React.FC  = () => {
  const {t} = useTranslation()
  const navigate = useNavigate()
  const { exportToExcel } = useExportToExcel("CarsData");

  const { urlValue } = useUrlQueryParams({
    currentPage: 0,
    size: 10,
  });

  const [searchVal, setSearchVal] = useState<string>("");

  const { data, isLoading, refetch } = useGetAllData<any>({
    queryKey: ["car-define/table-headers",],
    url: "car-define/table-headers",
  });

  const dynamicColumns: TableProps<ICars>["columns"] = data?.dataSource?.map((item: any) => {
    const uiProps = item.uiColumnProperties ? JSON.parse(item.uiColumnProperties) : {};
  
    return {
      title: t(item.title),
      dataIndex: item.dataIndex,
      key: item.id.toString(),
      width: uiProps.width || 150,
      fixed: uiProps.fixed || false,
      order: uiProps.order || 999,
      render: (_: any, record: any) => {
        const value = record[item.dataIndex];
        return <span>{value !== null && value !== undefined ? value : "-"}</span>;
      },
    };
  }).sort((a: any, b: any) => a.order - b.order) || [];

  const { mutate, data:cars,} = usePostAllData<any>({ url: "car-value/all" });

  useEffect(() => {
    const sendPostRequest = async () => {
      mutate({ page: urlValue.currentPage, size: urlValue.perPage, carNumber: searchVal })
    };

    sendPostRequest();
  }, [refetch, urlValue.perPage, urlValue.currentPage, searchVal]);

  const columns: TableProps<ICars>["columns"] = [
  {
    title: "№",
    dataIndex: "id",
    key: "id",
    width: 60,
    render: (_: any, __: any, index:number) => <span>{index+1}</span>,
  },
  ...(dynamicColumns ?? []),
  {
    title: t("등록"),
    dataIndex: "createdAt",
    key: "createdAt",
    width: 200,
    render: (_: any, record: any) => <span>{dayjs(record.createdAt).format('DD/MM/YYYY, HH:mm:ss a')}</span>,
  },
  {
    title: t("상태"),
    dataIndex: "state",
    key: "state",
    width: 120,
    render: (_: any, record: any) => <Tag color={record?.state === 'ACTIVE' ? 'success' : 'error'}>{record.state || "-"}</Tag>,
  },
  {
    title: t("실행"),
    dataIndex: "actions",
    key: "actions",
    className: "action-column",
    render: (_, record:any) => (
      <Actions
        id={record?.objectUUID}
        url={"car-value/state?objectUUID="}
        refetch={refetch}
        onClickEdit={() => {navigate(`/cars/car-update/${record?.objectUUID}`)}}
        onClickView={() => {navigate(`/cars/car-view/${record?.objectUUID}`)}}
        disabled={record?.state === 'ACTIVE' ? false : true}
      />
    ),
  },
  ];

  const handleExportToExcel = () => {
    const filteredColumns = columns.filter((col) => col.title !== "№" && col.title !== "실행" && col.title !== "Harakatlar");
    exportToExcel(cars?.dataSource?.responseList || [], filteredColumns);
  };

  return(
    <PageLayout title="차량" url="car-create" onExportExcel={handleExportToExcel}>
      <Row gutter={[12,12]} className="mb-4">
        <Col span={6}>
          <SearchInput duration={500} setSearchVal={setSearchVal} className="w-full" placeholder="Search by car number ..." />
        </Col>
      </Row>
      <Table  dataSource={cars?.dataSource?.responseList} columns={columns} loading={isLoading} pagination={false} scroll={{y:500}} rowKey={(record:any) => record.objectUUID}/>
      <CustomPagination totalCount={cars?.dataSource?.page?.totalElements} currentPage={urlValue.currentPage} perPage={urlValue.perPage} />
    </PageLayout>
  )
}

export default CarsIndex