import { departmentOptions } from "../datas/departments";

export const DeptCodeFetcher = (department) => {
  console.log("Dept passed to fetcher:", department);

  if (!department) {
    console.warn("⚠️ Dept was undefined");
    return "N/A";
  }

  const match = departmentOptions.find(
    (dept) =>
      dept.label.toLowerCase().trim() === department.toLowerCase().trim()
  );

  console.log("Matched:", match?.code);

  return match ? match.code : "N/A";
};
