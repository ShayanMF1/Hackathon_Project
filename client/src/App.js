import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const [employees, setEmployees] = useState([
    {
      id: "1",
      name: "Shayan Mojtahedzadeh-Faghihi",
      age: "23"
    }, {
      id: "2",
      name: "Damon Targeryen",
      age: "42"
    }, {
      id: "3",
      name: "Jon Snow",
      age: "18"
    }
  ]);

  // const getEmployees = async () => {
  //   const res  = await axios.get("http://localhost:4494/api/getAll/");
  //   setEmployees(res.data);
  // }

  // useEffect(() => {
  //   getEmployees();
  // }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home Employees={employees} setEmployees={setEmployees} />} />
          <Route path="/create" element={<Add Employees={employees} setEmployees={setEmployees} />} />
          <Route path="/edit" element={<Edit Employees={employees} setEmployees={setEmployees} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
