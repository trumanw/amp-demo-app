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
import { SearchSpaceList } from "./searchSpace/SearchSpaceList";
import { SearchSpaceCreate } from "./searchSpace/SearchSpaceCreate";
import { SearchSpaceEdit } from "./searchSpace/SearchSpaceEdit";
import { SearchSpaceShow } from "./searchSpace/SearchSpaceShow";
import { ParameterList } from "./parameter/ParameterList";
import { ParameterCreate } from "./parameter/ParameterCreate";
import { ParameterEdit } from "./parameter/ParameterEdit";
import { ParameterShow } from "./parameter/ParameterShow";
import { OptimizationConfigList } from "./optimizationConfig/OptimizationConfigList";
import { OptimizationConfigCreate } from "./optimizationConfig/OptimizationConfigCreate";
import { OptimizationConfigEdit } from "./optimizationConfig/OptimizationConfigEdit";
import { OptimizationConfigShow } from "./optimizationConfig/OptimizationConfigShow";
import { ObjectiveList } from "./objective/ObjectiveList";
import { ObjectiveCreate } from "./objective/ObjectiveCreate";
import { ObjectiveEdit } from "./objective/ObjectiveEdit";
import { ObjectiveShow } from "./objective/ObjectiveShow";
import { TrialList } from "./trial/TrialList";
import { TrialCreate } from "./trial/TrialCreate";
import { TrialEdit } from "./trial/TrialEdit";
import { TrialShow } from "./trial/TrialShow";
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
          name="SearchSpace"
          list={SearchSpaceList}
          edit={SearchSpaceEdit}
          create={SearchSpaceCreate}
          show={SearchSpaceShow}
        />
        <Resource
          name="Parameter"
          list={ParameterList}
          edit={ParameterEdit}
          create={ParameterCreate}
          show={ParameterShow}
        />
        <Resource
          name="OptimizationConfig"
          list={OptimizationConfigList}
          edit={OptimizationConfigEdit}
          create={OptimizationConfigCreate}
          show={OptimizationConfigShow}
        />
        <Resource
          name="Objective"
          list={ObjectiveList}
          edit={ObjectiveEdit}
          create={ObjectiveCreate}
          show={ObjectiveShow}
        />
        <Resource
          name="Trial"
          list={TrialList}
          edit={TrialEdit}
          create={TrialCreate}
          show={TrialShow}
        />
      </Admin>
    </div>
  );
};

export default App;
