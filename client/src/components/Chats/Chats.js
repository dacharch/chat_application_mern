import { ChatState } from "../../Context/ChatProvider";
import SideChatBar from "./ChatComponents/SideChatBar";
import MyChats from "./ChatComponents/MyChats";
import ChatBox from "./ChatComponents/ChatBox";
import { Box } from "@chakra-ui/react";

export default function Chats() {
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideChatBar />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <MyChats />}
        {user && <ChatBox />}
      </Box>
    </div>
  );
}
