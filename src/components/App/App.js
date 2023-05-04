import ProfileList from '../ProfileList/ProfileList';
import Container from '../Container/Container';
import users from './user.json';

export default function App() {
  return (
    <main className="Main">
      <Container>
        <ProfileList items={users} />
      </Container>
    </main>
  );
}
