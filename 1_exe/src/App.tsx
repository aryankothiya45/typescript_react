
import './App.css'
import Avatar from './components/component1/Avatar';
import UserInfo from './components/component1/UserInfo';
import Stats from './components/component1/Stats';
import Biography from './components/component2/Biography';
import Profile from './components/component3/Profile';
import PackingList from './components/component4/PackingList';
import Scientists from './components/component5/Scientists';

export default function App() {
  return (
    <>
      <div>
        <Avatar />
        <UserInfo />
        <Stats />
        <hr />
        <Biography />
        <hr />
        <Profile />
        <hr />
        <PackingList />
        <hr />
        <Scientists />


      </div>
    </>
  );
}
