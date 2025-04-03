import * as XLSX from "xlsx";

const useExportToExcel = (fileName: string) => {
  const exportToExcel = (data: any[], columns: any[]) => {
    if (!data || data.length === 0) return;

    const formattedData = data.map((row) => {
      let formattedRow: any = {};
      columns.forEach((col) => {
        formattedRow[col.title] = row[col.dataIndex];
      });
      return formattedRow;
    });

    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  return { exportToExcel };
};

export default useExportToExcel;
