import './scss/styles.scss';
import './globals.css';
import Sidebar from './components/Sidebar';
import Grid from './components/CardGrid';
import { tools } from './data/tools';

function App() {
    
    return (
        <div id="app">
            <div className="d-flex flex-row h-100 w-100">
                <Sidebar />
                <div className=" d-flex flex-column px-3 overflow-auto">
                    <div
                        style={{
                            padding: '5rem',
                            borderBottomColor: '#3F3F45',
                            borderBottomStyle: 'solid',
                            borderBottomWidth: '1px',
                        }}
                        className="d-flex flex-column justify-content-center align-items-center mb-4 gap-4"
                    >
                        <h1
                            style={{ color: 'white', fontWeight: 800 }}
                            className="text-4xl mx-auto"
                        >
                            Surf 🏄‍♂️
                        </h1>
                        <input
                            type="text"
                            className="rounded-pill lh-lg p-2 px-4 w-50"
                            style={{
                                backgroundColor: '#18181A',
                                borderColor: '#3F3F45',
                                borderStyle: 'solid',
                                borderWidth: '1px',
                                color: 'white',
                            }}
                            placeholder="🔎 Discover tools!"
                        />
                    </div>
                    <Grid tools={tools}></Grid>
                </div>
            </div>
        </div>
    );
}

export default App;
