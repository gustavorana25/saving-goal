import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Router from './routes/Router';

export function App(): JSX.Element {
  return (
    <Layout>
      <Header />
      <Router />
    </Layout>
  );
}
