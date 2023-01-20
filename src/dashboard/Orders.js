import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import axios from "axios";
import Title from "./Title";
import { Button } from "@mui/material";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Orders() {
  const [list, setList] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  React.useEffect(() => {
    const fn = async () => {
      const { data } = await axios.get("http://api.baozefeng.top/podcasts");
      setList(data);
    };
    fn();
  }, []);
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>title</TableCell>
            <TableCell>op</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row) => (
            <TableRow key={row.key}>
              <TableCell>{row.name}</TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(row.feedUrl).then(() => {
                      handleClick();
                    });
                  }}
                >
                  copy
                </Button>
                <Button onClick={() => {
                  window.open(row.url)
                }}>
                  preview
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          copy success!
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}
