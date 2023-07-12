import twitterLogo from "../assets/logo-twitter.svg";
import {
  Bell,
  BookmarksSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  Pencil,
  User,
} from "phosphor-react";

import "./Sidebar.css";
import { Link, NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <img className="logo" src={twitterLogo} alt="Logo" />

      <nav className="main-navigation">
        <NavLink to="/">
          <House weight="fill" />
          <span>Home</span>
        </NavLink>
        <Link to="">
          <Hash />
          <span>Explore</span>
        </Link>
        <Link to="">
          <Bell />
          <span>Notifications</span>
        </Link>
        <Link to="">
          <Envelope />
          <span>Messages</span>
        </Link>
        <Link to="">
          <BookmarksSimple />
          <span>Bookmarks</span>
        </Link>
        <Link to="">
          <FileText />
          <span>List</span>
        </Link>
        <Link to="">
          <User />
          <span>Profile</span>
        </Link>
        <Link to="">
          <DotsThreeCircle />
          <span>More</span>
        </Link>
      </nav>

      <button className="new-tweet" type="button">
        <Pencil />
        <span>Tweet</span>
      </button>
    </aside>
  );
}
