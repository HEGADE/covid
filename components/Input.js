import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { format, compareAsc } from "date-fns";
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

export default function BasicTextFields() {
  let dating = new Date();
  let year = dating.getFullYear();
  let month = dating.getMonth();
  let day = dating.getDate();
  let newdate = format(new Date(year, month, day), "yyyy-MM-dd").toString();
  const classes = useStyles();
  const [dater, setdate] = React.useState(newdate);
  const [pin, setpin] = React.useState("");
  const [data, setdata] = React.useState([]);
  const [determine, determineset] = React.useState(false);
  const fetchData = async () => {
    setdata([])
    let dateTo = dater.split("-");
    console.log(dateTo);
    let actualdate = dateTo[2] + "-" + dateTo[1] + "-" + dateTo[0];
    console.log(actualdate);

      let res=await axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${actualdate.toString()}`)
      console.log(res.data.sessions)
      determineset(true)
   
      setdata(res.data.sessions)
  };
  return (
    <>
      <div className="input_div">
        <TextField
          id="date"
          label="Date to attend"
          type="date"
          value={dater}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setdate(e.target.value)}
        />
        <form className={classes.root} autoComplete="off">
          <TextField
            id="standard-basic"
            type="number"
            required
            label="Enter PIN"
            value={pin}
            onChange={(e) => setpin(e.target.value)}
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

    {determine &&<Card data={data}/>}
    </>
  );
}
