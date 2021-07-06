import React ,{ReactFragment, useState}from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DateHandler from "../helpers/time"
import axios from "axios";
import { Card } from "./Card";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function BasicTextFields()  {
 
  let newdate=DateHandler()
  const classes = useStyles();
  const [Dater, setDate] = useState<string>(newdate);
  const [pin, setPin] = useState<string>("");
  const [data, setData] = useState([]);
  const [determine, setDetermine] =useState<boolean>(false);
  const fetchData = async () => {
    setData([]);
    if(pin===""){
      alert("fill the pin code field")
      return;
    }
    let dateTo = Dater.split("-");
    let actualdate:string = dateTo[2] + "-" + dateTo[1] + "-" + dateTo[0];
    try {
      let res = await axios.get(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${actualdate.toString()}`
      );
      setDetermine(true);

      setData(res.data.sessions);
    } catch (e) {
      alert("Some error occurred ,tyr again later");
      return;
    }
  };
  return (
    <>
      <div className="input_div">
        <TextField
          id="date"
          label="Date to attend"
          type="date"
          value={Dater}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setDate(e.target.value)}
        />
        <form className={classes.root} autoComplete="off">
          <TextField
            id="standard-basic"
            type="number"
            required
            label="Enter PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
        </form>
        <Button
          variant="outlined"
          color="secondary"
          style={{ margin: "1rem" }}
          onClick={fetchData}
        >
          Search
        </Button>
      </div>

      {determine && <Card data={data} />}
    </>
  );
}
