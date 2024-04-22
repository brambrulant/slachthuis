import React from "react";
import { useQuery } from "react-query";
import {
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeadCell,
  TableRow,
  WindowContent,
  WindowHeader,
  Window,
  styleReset,
} from "react95";
import original from "react95/dist/themes/original";

/* Original Windows95 font (optional) */
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;

const fetchMessages = async () => {
  const response = await fetch("https://slachthuis-be.vercel.app/messages");
  console.log("response?", response);
  return response.json();
};

export default function Guestbook({ open }) {
  const { data, isLoading, isError } = useQuery("messages", {
    queryFn: fetchMessages,
  });
  console.log(data, "data", isLoading, "isLoading", isError, "isError");

  return (
    <div className="w-full h-58">
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <Window style={{ width: "100%", background: "transparent" }}>
          <WindowHeader>Gastenboek.exe</WindowHeader>
          <WindowContent>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeadCell>Name</TableHeadCell>
                  <TableHeadCell>Message</TableHeadCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {isLoading && <TableRow>Loading...</TableRow>}
                {data &&
                  data.map((d) => (
                    <TableRow>
                      <TableDataCell style={{ textAlign: "center" }}>
                        <span role="img" aria-label="name">
                          {d.name}
                        </span>
                      </TableDataCell>
                      <TableDataCell>{d.message}</TableDataCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </WindowContent>
        </Window>
      </ThemeProvider>
    </div>
  );
}
