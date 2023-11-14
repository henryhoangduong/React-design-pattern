import { prinProps } from "./Components/prinProps";
import { UserInfo } from "./Components/UserInfo";
import { withUser } from "./Components/withUser";
import { UserInfoForm } from './Components/UserInfoForm';

const UserInfoWithLoader = withUser(UserInfo, '123');

function App() {
  return (
    <div className="App">
      <UserInfoForm />
    </div>
  );
}

export default App;
