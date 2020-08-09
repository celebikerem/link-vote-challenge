import React, { useState } from "react";
import { Link, Router } from "react-router-dom";
import swal from "sweetalert";

import "./AddLink.css";

const AddLink = ({ linkItems, addLink }) => {
  const [linkName, setlinkName] = useState("");
  const [linkUrl, setlinkUrl] = useState("");
  const [linkVote] = useState(0);
  const [linkId, setLinkCount] = useState(linkItems.length);

  const handleAddLink = () => {
    if (linkName == "" || linkUrl == "") {
      swal({
        title: "Please fill the form.",
        icon: "error",
        button: "OK",
      });
      return false;
    }

    setLinkCount(linkId + 1);
    let links = linkItems;
    const linkToAdd = {
      linkName,
      linkUrl,
      linkVote,
      linkId,
    };
    links = [...links, linkToAdd];
    addLink(links);
  };

  return (
    <div className="container" data-test="component-add-link">
      <div className="row">
        <div className="col-6 offset-3">
          <div className="row">
            <div className="col-12">
              <Link to="/">
                <button
                  type="button"
                  className="btn btn-light px-0 mx-0 add-link-button"
                >
                  <i className="fa fa-arrow-left mr-2"></i>
                  Return to List
                </button>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h1>Add New Link</h1>
              <div className="form-group">
                <label htmlFor="linkName">Link Name</label>
                <input
                  type="text"
                  value={linkName}
                  onChange={(e) => setlinkName(e.target.value)}
                  className="form-control"
                  id="linkName"
                  placeholder="e.g. Alphabet"
                  data-test="link-added-empty-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="linkUrl">Link Url</label>
                <input
                  type="text"
                  value={linkUrl}
                  onChange={(e) => setlinkUrl(e.target.value)}
                  className="form-control"
                  id="linkUrl"
                  placeholder="e.g. http://xyz.abc"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button
                type="button"
                className="btn btn-dark float-right"
                onClick={handleAddLink}
                data-test="add-link-button"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLink;
