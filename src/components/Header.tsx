import { useState } from "react";
import HomePage from "./HomePage";
import VideoPage from "./VideoPage";
import OfficersPage from "./OfficersPage";

function Header() {
  let items = ["Home", "Videos", "Executives"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [page, setPage] = useState(0);

  return (
    <>
      <img
        src="src/assets/lrhs_crest.png"
        alt="LRHS Crest"
        width="150"
        height="150"
        style={{ marginLeft: 10, marginTop: 10 }}
      ></img>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1 className="header" style={{ marginTop: 0 }}>
          LRHS Crochet Club Website
        </h1>
      </div>
      <ul className="nav nav-pills justify-content-center">
        {items.map((item, index) => (
          <li className="nav-item">
            <a
              className={
                selectedIndex === index ? "nav-link active" : "nav-link"
              }
              href="#"
              onClick={() => {
                setPage(index);
                setSelectedIndex(index);
              }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      {page === 0 && <HomePage />}
      {page === 1 && <VideoPage />}
      {page === 2 && <OfficersPage />}
    </>
  );
}

export default Header;
