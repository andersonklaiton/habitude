import styled from "styled-components";
import {
  Box,
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

export const Container = styled(Box)`
  display: flex;
`;

export const Sidebar = styled(Drawer)`
  flex-shrink: 0;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const SidebarItems = styled(Box)`
  overflow: auto;
  width: 260px;
`;

export const UserField = styled.div`
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  svg,
  svg path {
    font-size: 70px;
  }
`;

export const RouteBlock = styled(ListItem)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 341px;
  height: 106px;
  padding: 0 !important;
  border-bottom: 1px solid lightgray !important;
`;

export const Icon = styled(ListItemIcon)`
  font-size: 30px;
  margin: 0 1em;
  svg,
  svg path {
    color: var(--black);
  }
`;

export const RouteItem = styled(ListItemText)`
  font-size: 14px;
`;

export const Username = styled.h4``;
