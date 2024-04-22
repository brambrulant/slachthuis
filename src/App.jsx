import React from "react";
import { motion } from "framer-motion";
import whatsapp_reminder from "./assets/whatsapp_reminder.png";
import Boyan from "./assets/Boyan.png";
import Jago from "./assets/Jago.png";
import missed from "./assets/missed.png";
import Chatbox from "./ChatBox.jsx";
import Sun from "./assets/Sun.png";
import Chris from "./assets/Chris.png";
import { Dialog, DialogContent, DialogTrigger } from "./dialog.jsx";
import Message from "./Message.jsx";
import Menubar from "./Menubar.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import GuestbookIcon from "./assets/guestbook.png";
import Guestbook from "./guestbook.jsx";

const queryClient = new QueryClient();

function App() {
  const constraintsRef = React.useRef(null);
  const [showMessageOpen, setShowMessageOpen] = React.useState(false);
  const [showChrisMessageOpen, setShowChrisMessageOpen] = React.useState(false);
  const [guestBookOpen, setGuestBookOpen] = React.useState(false);

  const handleWhatsappReminderClick = () => {
    setShowMessageOpen(!showMessageOpen);
  };

  const handleChrisClick = () => {
    setShowChrisMessageOpen(!showChrisMessageOpen);
  };

  const [person, setPerson] = React.useState("");

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const variants = {
    initial: {
      scale: 1,
      x: 0,
      y: 0,
      opacity: 1,
    },
    driveAway: {
      scale: 0,
      x: screenWidth,
      y: -screenHeight / 3,
      opacity: 0.5,
      transition: { duration: 2 }, // Adjust timing as needed
    },
  };

  const determineImage = (person) => {
    if (person === "")
      return (
        <motion.img
          src={missed}
          alt="missed"
          className="mb-24 w-64 z-50"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
        />
      );
    if (person === "chris")
      return (
        <motion.img
          src={Chris}
          alt="Chris"
          className="mb-24 w-64 z-50"
          initial="initial"
          whileTap="driveAway"
          variants={variants}
          onClick={handleChrisClick}
        />
      );
    if (person === "jago")
      return <motion.img src={Jago} alt="Jago" className="mb-24 w-64 z-50" />;
    if (person === "boyan")
      return <motion.img src={Boyan} alt="Boyan" className="mb-24 w-64 z-50" />;
  };

  return (
    <QueryClientProvider client={queryClient}>
      <motion.div
        className="w-screen h-screen z-[-10px] absolute bg-transparent"
        ref={constraintsRef}
      />
      <Dialog>
        <DialogTrigger className="absolute z-10 w-32 left-20 top-52">
          <motion.img
            src={Sun}
            alt="sun"
            className="absolute cursor-pointer w-32 h-44"
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.1}
            initial={{ x: 0, y: 0 }}
            animate={{ x: screenWidth / 1.5, y: 0 }}
            transition={{
              duration: 150,
              repeat: Infinity,
              repeatDelay: 1,
              repeatType: "reverse",
            }}
          />
        </DialogTrigger>
        <DialogContent>
          <Message person="nathalie" />
        </DialogContent>
      </Dialog>
      <div className="w-screen h-screen bg-[url(./assets/Background.png)] bg-cover flex flex-col justify-between items-center">
        <Menubar handleOpenPerson={(person) => setPerson(person)} />
        <button
          className="z-50 absolute p-0 top-40 right-0 mr-0 cursor-pointer h-24 flex flex-col justify-start items-center "
          onClick={() => setGuestBookOpen(!guestBookOpen)}
        >
          <img
            src={GuestbookIcon}
            alt="guestbook"
            className="w-64 mt-24 h-64 mb-24 cursor-pointer m-0"
          />
        </button>
        <img
          src={whatsapp_reminder}
          alt="whatsapp reminder"
          onClick={handleWhatsappReminderClick}
          className={`z-50 w-24 h-24 mt-24 flex self-end cursor-pointer hover:scale-110 transition-transform duration-100 ease-in-out`}
        />
        <Chatbox open={showMessageOpen} />
        <Dialog>
          <DialogTrigger className="z-20 p-8 hover:scale-110 cursor-pointer transition-transform duration-100 ease-in-out">
            {determineImage(person)}
          </DialogTrigger>
          <DialogContent>
            <Message person={person} />
          </DialogContent>
        </Dialog>
        {guestBookOpen ? (
          <div className="mb-4">
            <Guestbook open={guestBookOpen} />
          </div>
        ) : null}
      </div>
    </QueryClientProvider>
  );
}

export default App;
