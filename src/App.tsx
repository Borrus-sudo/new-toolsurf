import './scss/styles.scss';
import './globals.css';
import Sidebar from './components/Sidebar';
import Grid from './components/CardGrid';
import { tools } from './data/tools';
import type { Tool } from './data/tools';
import { useMemo, useState } from 'react';

function App() {
    const [curr, setCurr] = useState("All");
    const [query, setQuery] = useState("");
    const filteredTools: Tool[] = useMemo(() => {
        return tools.filter((tool) => (curr == "All" || curr == tool.category) && (!query || (tool.name.toLowerCase().includes(query) || tool.description.toLowerCase().includes(query))))
    }, [curr, query])
    return (
        <div id="app">
            <div className="d-flex flex-row h-100 w-100">
                <Sidebar setCurr={setCurr} curr={curr} />
                <div className=" d-flex flex-grow-1 flex-column px-3 overflow-auto">
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
                            onChange={(e) => setQuery(e.target.value.toLowerCase())}
                            placeholder="🔎 Discover tools!"
                        />
                    </div>
                    <Grid tools={filteredTools}></Grid>
                </div>
            </div>
        </div>
    );
}

export default App;
