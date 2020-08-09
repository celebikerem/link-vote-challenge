import React from "react";

import "./LinkItem.css";

const LinkItem = ({
  linkItems: { linkName, linkUrl, linkVote, linkId },
  updateVote,
  deleteLink,
}) => {
  return (
    <div className="row" data-test="component-link-item">
      <div className="col-12">
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-3 p-2">
              <div
                className="vote-wrapper"
                data-test={`vote-wrapper-${linkId}`}
              >
                {linkVote} Points
              </div>
            </div>
            <div className="col-md-9">
              <div className="card-body p-2">
                <a href={linkUrl}>
                  <h5 className="card-title">{linkName}</h5>
                  <p className="card-text">{linkUrl}</p>
                </a>
                <div className="vote-buttons-wrapper mt-4">
                  <button
                    type="button"
                    data-test={`up-vote-${linkId}`}
                    className="btn btn-outline-secondary border-0 mx-2"
                    onClick={() => updateVote("upvote", `${linkId}`)}
                  >
                    <i className="fa fa-arrow-up mr-3"></i>
                    Upvote
                  </button>
                  <button
                    type="button"
                    data-test={`down-vote-${linkId}`}
                    className="btn btn-outline-secondary border-0 mx-2"
                    onClick={() => updateVote("downvote", `${linkId}`)}
                  >
                    <i className="fa fa-arrow-down mr-3"></i>
                    Downvote
                  </button>
                </div>
                <button
                  type="button"
                  data-test={`delete-${linkId}`}
                  className="btn delete-button"
                  onClick={() => deleteLink(`${linkId}`, `${linkName}`)}
                >
                  <i className="fa fa-minus-circle"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkItem;
