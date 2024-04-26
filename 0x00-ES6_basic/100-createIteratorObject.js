export default function createIteratorObject(report) {
  const employees = [...Object.values(report.allEmployees).map((department) => department)];
  return employees.flat();
}
