import BackgroundHeader from "./components/BackgroundHeader";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";

function App() {
    return (
        <>
            <BackgroundHeader />
            <main>
                <Header />
                <ItemList />
                <Sidebar />
            </main>
            <Footer />
        </>
    );
}

export default App;
