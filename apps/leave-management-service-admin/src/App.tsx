import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { LeaveRequestList } from "./leaveRequest/LeaveRequestList";
import { LeaveRequestCreate } from "./leaveRequest/LeaveRequestCreate";
import { LeaveRequestEdit } from "./leaveRequest/LeaveRequestEdit";
import { LeaveRequestShow } from "./leaveRequest/LeaveRequestShow";
import { ApprovalLevelList } from "./approvalLevel/ApprovalLevelList";
import { ApprovalLevelCreate } from "./approvalLevel/ApprovalLevelCreate";
import { ApprovalLevelEdit } from "./approvalLevel/ApprovalLevelEdit";
import { ApprovalLevelShow } from "./approvalLevel/ApprovalLevelShow";
import { ApprovalList } from "./approval/ApprovalList";
import { ApprovalCreate } from "./approval/ApprovalCreate";
import { ApprovalEdit } from "./approval/ApprovalEdit";
import { ApprovalShow } from "./approval/ApprovalShow";
import { StaffList } from "./staff/StaffList";
import { StaffCreate } from "./staff/StaffCreate";
import { StaffEdit } from "./staff/StaffEdit";
import { StaffShow } from "./staff/StaffShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"LeaveManagementService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="LeaveRequest"
          list={LeaveRequestList}
          edit={LeaveRequestEdit}
          create={LeaveRequestCreate}
          show={LeaveRequestShow}
        />
        <Resource
          name="ApprovalLevel"
          list={ApprovalLevelList}
          edit={ApprovalLevelEdit}
          create={ApprovalLevelCreate}
          show={ApprovalLevelShow}
        />
        <Resource
          name="Approval"
          list={ApprovalList}
          edit={ApprovalEdit}
          create={ApprovalCreate}
          show={ApprovalShow}
        />
        <Resource
          name="Staff"
          list={StaffList}
          edit={StaffEdit}
          create={StaffCreate}
          show={StaffShow}
        />
      </Admin>
    </div>
  );
};

export default App;
