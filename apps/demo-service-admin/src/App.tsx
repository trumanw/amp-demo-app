import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ExperimentList } from "./experiment/ExperimentList";
import { ExperimentCreate } from "./experiment/ExperimentCreate";
import { ExperimentEdit } from "./experiment/ExperimentEdit";
import { ExperimentShow } from "./experiment/ExperimentShow";
import { ParameterSpaceList } from "./parameterSpace/ParameterSpaceList";
import { ParameterSpaceCreate } from "./parameterSpace/ParameterSpaceCreate";
import { ParameterSpaceEdit } from "./parameterSpace/ParameterSpaceEdit";
import { ParameterSpaceShow } from "./parameterSpace/ParameterSpaceShow";
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
        title={"Demo Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Experiment"
          list={ExperimentList}
          edit={ExperimentEdit}
          create={ExperimentCreate}
          show={ExperimentShow}
        />
        <Resource
          name="ParameterSpace"
          list={ParameterSpaceList}
          edit={ParameterSpaceEdit}
          create={ParameterSpaceCreate}
          show={ParameterSpaceShow}
        />
      </Admin>
    </div>
  );
};

export default App;
