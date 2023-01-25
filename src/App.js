// import logo from './logo.svg';
import "./App.css";
import Header from "./Components/Header";
// import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function App() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Data, setData] = useState([]);
  const addData = () => {
    setData([...Data, { Name, Email }]);
    setName("");
    setEmail("");
  }

  const removeItem = (index) => {
    let arr = Data;
    arr.splice(index, 1);
    setData([...arr]);
  }

  return (
    <div className="App">
      <Header />
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            value={Name}
            onChange={(Event) => setName(Event.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            value={Email}
            onChange={(Event) => setEmail(Event.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button variant="contained" onClick={addData}>
            <AddIcon />
          </Button>
        </Stack>
        <div className='datap'>
          <div className='dataValc'>
            <h4>Name</h4>
            <h4>Email</h4>
            <h4>Remove</h4>

          </div>
          {
            Data.map((Element, index) => {
              return (
                <div key={index} className='dataValc'>

                  <h4>{Element.Name}</h4>
                  <h4>{Element.Email}</h4>
                  <Stack>
                    <Button onClick={() => removeItem(index)} variant="contained" color="error"><DeleteForeverIcon /></Button>
                  </Stack>
                  </div>
              )
            })
          }
        </div>

      </div>

    </div>
  );
}

export default App;


