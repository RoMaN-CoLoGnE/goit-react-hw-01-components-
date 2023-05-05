import ProfileList from '../ProfileList/ProfileList';
import users from './Users.json';

import Statistics from '../Statistics/Statistics';
import data from './StatsData.json';

import FriendsList from '../FriendsList/FriendsList';
import friends from './Friends.json';

export default function App() {
  return (
    <main className="Main">
      <ProfileList items={users} />

      <Statistics title="Upload stats" stats={data} />

      <FriendsList items={friends} />
    </main>
  );
}
