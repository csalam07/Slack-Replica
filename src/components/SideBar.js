import {
  AddRounded,
  Apps,
  BookmarkBorder,
  Create,
  Drafts,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import SidebarOptions from "./SidebarOptions";
import { useCollection } from "react-firebase-hooks/firestore";
import { db, auth } from "../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function SideBar() {
  const [channels, laoding, error] = useCollection(db.collection("rooms"));
  const [user] = useAuthState(auth);

  return (
    <SideBarConatiner>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Slack Replica</h2>
          <h3>
            <FiberManualRecord />
            {user?.displayName}
          </h3>
        </SidebarInfo>
        <Create />
      </SidebarHeader>
      <SidebarOptions Icon={InsertComment} title="Threads" />{" "}
      <SidebarOptions Icon={Inbox} title="Mentions &amp; Reactions" />
      <SidebarOptions Icon={Drafts} title="Save items" />
      <SidebarOptions Icon={BookmarkBorder} title="Channel browser" />
      <SidebarOptions Icon={PeopleAlt} title="people &amp; user groups" />
      <SidebarOptions Icon={Apps} title="Apps" />
      <SidebarOptions Icon={FileCopy} title="File browser" />
      <SidebarOptions Icon={ExpandLess} title="Show less" />
      <hr />
      <SidebarOptions Icon={ExpandMore} title="Channels" />
      <hr />
      <SidebarOptions addChannelOption Icon={AddRounded} title="Add Channel" />
      {channels?.docs.map((doc) => (
        <SidebarOptions key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </SideBarConatiner>
  );
}

export default SideBar;

const SideBarConatiner = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  max-width: 260px;
  margin-top: 60px;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
    cursor: pointer;
  }
`;
const SidebarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-left: 5px;
  }
  > h3 {
    font-size: 13px;
    display: flex;
    font-weight: 400;
    align-items: center;

    > .MuiSvgIcon-root {
      color: green;
      font-size: 14px;
      margin-top: 1px;
      margin-right: 2px;
    }
  }
`;
