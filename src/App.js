import Profile from './components/User';
import user from './user.json';

export default function App() {
  return (
    <div>
      <Profile {...user} />
    </div>
  );
}
