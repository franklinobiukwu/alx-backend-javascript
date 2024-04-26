export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(parameter = employeesList) {
      return Object.keys(parameter).length;
    },
  };
}
