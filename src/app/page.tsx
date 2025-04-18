import AddCompanyButton from './components/add-company-button';
import Header from './components/header';
import MagicButton from './components/magic-button';

export default function Home() {
  return (
    <main>
      <Header>Home page</Header>

      <div className="flex gap-5 mt-5 ml-10">
        <AddCompanyButton />
        <MagicButton />
      </div>
    </main>
  );
}
