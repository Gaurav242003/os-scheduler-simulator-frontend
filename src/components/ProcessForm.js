// frontend/src/components/ProcessForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ProcessForm = ({ onProcessAdded }) => {
    const [name, setName] = useState('');
    const [burstTime, setBurstTime] = useState('');
    const [arrivalTime, setArrivalTime] = useState('');
    const [priority, setPriority] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newProcess = { name, burstTime, arrivalTime, priority };
        const res = await axios.post('http://localhost:5000/api/processes', newProcess);
        onProcessAdded(res.data);
        console.log(res.data);
        setName('');
        setBurstTime('');
        setArrivalTime('');
        setPriority('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input value={burstTime} onChange={(e) => setBurstTime(e.target.value)} placeholder="Burst Time" required />
            <input value={arrivalTime} onChange={(e) => setArrivalTime(e.target.value)} placeholder="Arrival Time" required />
            <input value={priority} onChange={(e) => setPriority(e.target.value)} placeholder="Priority" required />
            <button type="submit">Add Process</button>
        </form>
    );
};

export default ProcessForm;
