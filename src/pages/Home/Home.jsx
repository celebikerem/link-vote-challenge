import React, { useState } from "react";
import { Link } from "react-router-dom";

import LinkItem from "../../components/LinkItem/LinkItem";
import SortBox from "../../components/SortBox/SortBox";
import Pagination from "../../components/Pagination/Pagination";
import Header from "../../components/Header/Header";

import "./Home.css";

const Home = ({
  linkItems,
  updateVote,
  sortLink,
  deleteLink,
  defaultSorting,
}) => {
  const [links] = useState(linkItems);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = links.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (!links) {
    return "Loading...";
  }
  return (
    <div className="container" data-test="component-home">
      <Header></Header>
      <div className="row">
        <div className="col-6 offset-3">
          <div className="row">
            <div className="col-12 mt-3">
              <Link to="/addlink" className="link">
                <div className="add-link-wrapper">
                  <div className="add-link-icon">
                    <i className="fa fa-plus"></i>
                  </div>
                  <div className="add-link-text">SUBMIT A LINK</div>
                </div>
              </Link>
            </div>
            <div className="col-12">
              <hr className="my-3" />
            </div>
            {links != [] && (
              <div className="col-5 mb-3">
                <SortBox
                  sortLink={sortLink}
                  defaultSorting={defaultSorting}
                ></SortBox>
              </div>
            )}
          </div>
          <div className="row">
            <div className="col-12">
              {currentPosts.map((linkItems, index) => (
                <LinkItem
                  linkItems={linkItems}
                  key={index}
                  updateVote={updateVote}
                  deleteLink={deleteLink}
                ></LinkItem>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Pagination
                currentPage={currentPage}
                postsPerPage={postsPerPage}
                totalPosts={links.length}
                paginate={paginate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
