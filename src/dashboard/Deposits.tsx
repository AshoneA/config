import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import Title from "./Title";
import { useState } from "react";

// Generate Order Data

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

const base = "baozefeng.top";

const list = [
  {
    name: "plex",
    remote: `plex.${base}`,
    port: "32400",
  },
  {
    name: "calibre",
    remote: `calibre.${base}`,
    port: "8083",
  },
  {
    name: "rss",
    remote: `rss.${base}`,
    port: "1200",
  },
  {
    name: "immich",
    remote: `immich.${base}`,
    port: "2283",
  },
  {
    name: "jackett",
    remote: `jackett.${base}`,
    port: "9117",
  },
  {
    name: "raddr",
    remote: `raddr.${base}`,
    port: "7878",
  },
  {
    name: "sonnr",
    remote: `sonnr.${base}`,
    port: "8989",
  },
  {
    name: "qb",
    remote: `qb.${base}`,
    port: "8989",
  },
  {
    name: "podcast",
    remote: `podcast.${base}`,
    port: "80",
  },
  {
    name: "linuxclash",
    remote: `linuxclash.${base}`,
    path: "ui",
    port: "9999",
  },
];

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell>op</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell>
                <Link
                  href={`http://${row.remote}`}
                  sx={{
                    paddingRight: 5,
                  }}
                >
                  remote
                </Link>
                <Link href={`http://192.168.123.65:${row.port}`}>local</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
