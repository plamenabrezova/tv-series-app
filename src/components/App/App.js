import Main from "../Main/Main";
import Title from "../Title/Title";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="container d-flex flex-column">
      <header>
        <div className="px-4 py-5 text-center">
          <Title title="TV Series List" subtitle="Here you can find all of your most loved series" />
        </div>
        <hr className="my-4" />
      </header>
      <main>
        <div className="container px-0">
          <Main />
        </div>
      </main>
      <hr className="my-4" />
      <footer className="bd-footer mb-3 text-body-secondary text-center text-small">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
