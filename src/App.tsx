import { Main } from './App.styles';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Router from './routes/Router';

export function App(): JSX.Element {
  return (
    <Layout>
      <Main>
        <Header />
        <Router />
      </Main>
    </Layout>
  );
}
