import React, { Component } from "react";
import "./App.css";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import swal from "sweetalert";
import { ToastContainer, toast } from "react-toastify";

import Home from "./pages/Home/Home";
import AddLink from "./pages/AddLink/AddLink";

import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = {
    linkItems: [],
    defaultSorting: "",
  };

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem("links")) || [];

    this.setState({
      linkItems: data.sort(
        (a, b) => parseFloat(b.linkId) - parseFloat(a.linkId)
      ),
    });
  }

  updateVote = (type, id) => {
    if (type == "upvote") {
      let linkList = this.state.linkItems;
      let objIndex = linkList.findIndex((obj) => obj.linkId == id);
      linkList[objIndex].linkVote += 1;

      localStorage.setItem("links", JSON.stringify(linkList));
      this.setState({
        linkItems: linkList,
      });
    } else if ((type = "downvote")) {
      let linkList = this.state.linkItems;
      let objIndex = linkList.findIndex((obj) => obj.linkId == id);
      linkList[objIndex].linkVote -= 1;

      localStorage.setItem("links", JSON.stringify(linkList));
      this.setState({
        linkItems: linkList,
      });
    }
  };

  addLink = (linkItems) => {
    this.setState(
      {
        linkItems: linkItems,
      },
      () => {
        localStorage.setItem("links", JSON.stringify(this.state.linkItems));
        toast.success("Link added!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    );
  };

  deleteLink = (id, linkName) => {
    swal(`Do you want to remove ${linkName}?`, {
      buttons: {
        cancel: "Cancel",
        delete: "Delete",
      },
    }).then((value) => {
      switch (value) {
        case "delete":
          let linkList = this.state.linkItems;
          linkList = linkList.filter(function (obj) {
            return obj.linkId != id;
          });

          linkList.map((item) => {
            if (item.linkId > id) {
              return (item.linkId -= 1);
            }
          });

          localStorage.setItem("links", JSON.stringify(linkList));
          this.setState({
            linkItems: linkList,
          });
          toast.error("Link removed!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          break;

        case "cancel":
          return false;

        default:
          return false;
      }
    });
  };

  sortLink = (type) => {
    let linkList = this.state.linkItems;
    if (type == 0) {
      linkList.sort((a, b) => parseFloat(b.linkId) - parseFloat(a.linkId));
      this.setState({
        linkItems: linkList,
        defaultSorting: type,
      });
    } else if (type == 1) {
      linkList.sort((a, b) => parseFloat(b.linkVote) - parseFloat(a.linkVote));
      this.setState({
        linkItems: linkList,
        defaultSorting: type,
      });
    } else if (type == 2) {
      linkList.sort((a, b) => parseFloat(a.linkVote) - parseFloat(b.linkVote));
      this.setState({
        linkItems: linkList,
        defaultSorting: type,
      });
    }
  };

  render() {
    const { linkItems, defaultSorting } = this.state;
    return (
      <BrowserRouter>
        <div data-test="component-app">
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <Home
                  linkItems={linkItems}
                  updateVote={this.updateVote}
                  sortLink={this.sortLink}
                  deleteLink={this.deleteLink}
                  defaultSorting={defaultSorting}
                ></Home>
              )}
            ></Route>
            <Route
              exact
              path="/addlink"
              component={() => (
                <AddLink linkItems={linkItems} addLink={this.addLink}></AddLink>
              )}
            ></Route>
          </Switch>
          <Redirect from="*" to="/" />
          <ToastContainer data-test="toast" />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
