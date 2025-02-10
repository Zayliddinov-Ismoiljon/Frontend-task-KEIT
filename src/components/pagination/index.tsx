import React from "react";
import { Pagination } from "antd";
import { useTranslation } from "react-i18next";
import useUrlQueryParams from "../../hooks/useUrlQueryParams";
import './style.css'

type TypeCustomPaginationProps = {
  totalCount?: number | undefined;
  currentPage?: number | undefined;
  perPage?: number | undefined;
  isAll?: boolean;
  showQuickJumper?: boolean;
  showSizeChanger?: boolean;
};

const pageSizeOptions = ["10", "15", "20", "30", "50", "100"];

const CustomPagination: React.FC<TypeCustomPaginationProps> = React.memo(
  ({
    totalCount = 0,
    currentPage = 1,
    perPage = 15,
    isAll = false,
    showSizeChanger = true,
    showQuickJumper = true,
  }): JSX.Element => {
    const { urlValue: value, writeToUrl } = useUrlQueryParams({});
    const { t } = useTranslation();

    return (
      <div className="flex items-center justify-between p-3 my-5">
        {t("Total")}: &nbsp; {totalCount}
        <Pagination
          total={totalCount}
          current={currentPage ?? value.currentPage}
          defaultPageSize={perPage ?? value.perPage}
          onChange={(e) => {
            writeToUrl({ name: "currentPage", value: e });
          }}
          onShowSizeChange={(e, pageSize) => {
            writeToUrl({ name: "perPage", value: pageSize });
          }}
          showSizeChanger={showSizeChanger}
          showQuickJumper={showQuickJumper}
          pageSizeOptions={
            isAll ? [...pageSizeOptions, "all"] : pageSizeOptions
          }
          className="custom-pagination"
        />
      </div>
    );
  }
);

export default CustomPagination;
