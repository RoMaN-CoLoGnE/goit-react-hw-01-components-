import ProfileList from './components/ProfileList';
import Section from './components/Section';
import users from './components/user.json';

export default function App() {
  return (
    <div>
      <Section>
        <ProfileList items={users} />
      </Section>
    </div>
  );
}
