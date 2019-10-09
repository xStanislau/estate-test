import React, { Component } from "react";
import { Pagination as BsPagination } from "react-bootstrap";
import constants from "../../constants/";
import Items from "./Items/Items";
import "./Pagination.scss";

class Pagination extends Component {
  state = {
    currentPageIndex: 0
  };

  componentDidMount = () => {
    const { setCurrentIndex } = this;
    setCurrentIndex(0);
  };

  setCurrentIndex = value => {
    this.setState({
      currentPageIndex: value
    });
  };

  handleItemClick = index => () => {
    const {
      queryOptions: { pagination },
      queryOptions
    } = constants;
    const { path, fetch, pathname, filterParams, itemsPerPage } = this.props;
    const currentItemsOffset = index * itemsPerPage;

    let queryParams = [
      { ...pagination, value: currentItemsOffset },
      ...queryOptions[pathname.slice(1, pathname.length)]
    ];

    if (filterParams && filterParams.length > 0) {
      queryParams = [...queryParams, ...filterParams];
    }

    fetch(path, queryParams);
    this.setCurrentIndex(index);
  };

  render() {
    const { total: totalItems, itemsPerPage } = this.props;
    const { currentPageIndex } = this.state;
    const totalPages = totalItems && Math.ceil(totalItems / itemsPerPage);

    if (currentPageIndex > totalPages) {
      this.setCurrentIndex(0);
    }

    const lastPageNumber = totalPages;
    let offsetFromEnd = totalPages - 1;
    const offSetFromCurrentRight = 1;
    let offSetFromCurrentLeft = 2 + currentPageIndex;
    let offsetStartIndex = 0;

    if (currentPageIndex >= 2) {
      offsetStartIndex = currentPageIndex - offSetFromCurrentRight;
    }

    if (currentPageIndex >= lastPageNumber - 3) {
      offSetFromCurrentLeft = offsetFromEnd;
      offsetStartIndex = offsetStartIndex - 1;
      if (currentPageIndex >= lastPageNumber) {
        offsetFromEnd = totalPages;
      }
    }

    const PageItems = Items(totalPages, this.handleItemClick, currentPageIndex);
    let lastPageIndex = PageItems.length - 1;

    return (
      <BsPagination className="pagination d-flex justify-content-center">
        <BsPagination.First onClick={this.handleItemClick(0)} />
        {[
          PageItems.slice(offsetStartIndex, offSetFromCurrentLeft),
          <BsPagination.Ellipsis key={currentPageIndex} />,
          PageItems.slice(offsetFromEnd, lastPageIndex + 1)
        ]}
        <BsPagination.Last onClick={this.handleItemClick(lastPageIndex)} />
      </BsPagination>
    );
  }
}

export default Pagination;
