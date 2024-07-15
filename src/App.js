// frontend/src/App.js
import React, { useState } from 'react';
import ProcessForm from './components/ProcessForm';
// import ProcessList from './components/ProcessList';

const App = () => {
    const [processes, setProcesses] = useState([]);

    const handleProcessAdded = (process) => {
        setProcesses([...processes, process]);
    };

    return (
        <div>
            <h1>OS Process Scheduler Simulation</h1>
            <ProcessForm onProcessAdded={handleProcessAdded} />
            {/* <ProcessList processes={processes} /> */}
        </div>
    );
};

export default App;
