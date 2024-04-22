import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  MenuList,
  MenuListItem,
  Separator,
  TextInput,
} from "react95";

import windows95 from "./assets/windows95.png";

export default function Menubar({ handleOpenPerson }) {
  const [open, setOpen] = React.useState(false);

  return (
    <AppBar fixed={false} position="relative">
      <Toolbar style={{ justifyContent: "space-between" }}>
        <div style={{ position: "relative", display: "inline-block" }}>
          <Button
            onClick={() => setOpen(!open)}
            active={open}
            style={{ fontWeight: "bold" }}
          >
            <img
              src={windows95}
              alt="react95 logo"
              style={{ height: "20px", marginRight: 4 }}
            />
            Start
          </Button>
          {open && (
            <MenuList
              style={{
                position: "absolute",
                left: "0",
                top: "100%",
              }}
              onClick={() => setOpen(false)}
            >
              <MenuListItem onClick={() => handleOpenPerson("jago")}>
                <button>
                  <span role="img" aria-label="👨‍💻">
                    📁
                  </span>
                  jago
                </button>
              </MenuListItem>
              <MenuListItem onClick={() => handleOpenPerson("boyan")}>
                <button>
                  <span role="img" aria-label="📁">
                    📁
                  </span>
                  boyan
                </button>
              </MenuListItem>
              <MenuListItem onClick={() => handleOpenPerson("chris")}>
                <button>
                  <span role="img" aria-label="📁">
                    📁
                  </span>
                  chris
                </button>
              </MenuListItem>
            </MenuList>
          )}
        </div>

        <TextInput placeholder="Search..." width={150} />
      </Toolbar>
    </AppBar>
  );
}
