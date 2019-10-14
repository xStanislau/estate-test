import React, { Component } from "react";
import { connect } from "react-redux";
import { loadSaleId, loadData } from "../../redux/reducers/sale";
import CardPrice from "../../components/Card/CardPrice/CardPrice";
import PhotoGallery from "../../components/PhotoGallery/PhotoGallery";
import specificationTypes from "../../config/specification";
import Communication from "../../pages/SalePage/Communications/Communications";
import Loader from "../../components/Loader/Loader";
import Button from "../../components/Button/Button";
import Badge from "../../components/Badge/Badge";
import Size from "./Size/Size";
import { getBackLinkText } from "../../utils/getBackLinkText";
import "./SalePage.scss";
import { NavLink } from "react-router-dom";
import PropertyKind from "./PropertyKind/PropertyKind";
import Location from "./Location/Location";
import CallBackSideBar from "../../components/CallBackSideBar/CallBackSideBar";
import Notification from "../../components/Notification/Notification";

class Sale extends Component {
  componentDidMount() {
    const {
      match: {
        params: { id }
      },
      items
    } = this.props;
    if (!items) {
      this.props.loadData(id);
    } else {
      this.props.loadSaleId(id);
    }
  }

  render() {
    const {
      item,
      isLoaded,
      location: {
        state: { from }
      }
    } = this.props;

    const {
      kind,
      specification: { area, bedrooms },
      communication,
      landDetails: { area: landArea },
      saleOffer,
      location,
      badge
    } = item;
    const noContent = "-";
    return (
      <>
        <Notification />
        <CallBackSideBar />
        {!isLoaded && <Loader />}
        <main className="sale main-container">
          <div className="sale__content content-wrapper-small content-wrapper d-flex justify-content-start align-items-center px-35">
            <h1 className="h1 my-4 mr-4">
              <PropertyKind kind={kind} />
              <Size kind={kind} area={area} landArea={landArea} />
              <Location {...location} />
            </h1>
            {badge && (
              <Badge
                variant="danger"
                className="badge_small"
                style={{ backgroundColor: badge.color }}
              >
                {badge.title}
              </Badge>
            )}
          </div>

          <PhotoGallery item={item} className="img-gallery" />
          <div className="sale__content content-wrapper-small content-wrapper px-35">
            <div className="sale__content-inner pt-4 pb-5">
              <div className="sale__short-info">
                <CardPrice
                  className="sale__price h3 mb-3"
                  saleOffer={saleOffer}
                  tag="h1"
                />
                <ul className="sale__short-info-list">
                  <li className="sale__short-info-item">
                    <strong className="sale__short-info-number">
                      {bedrooms || noContent}
                    </strong>
                    <span className="sale__short-info-text">
                      {specificationTypes.bedrooms}
                    </span>
                  </li>
                  <li className="sale__short-info-item">
                    <strong className="sale__short-info-number">
                      {landArea || noContent}
                    </strong>
                    <span className="sale__short-info-text">соток</span>
                  </li>
                  <li className="sale__short-info-item">
                    <strong className="sale__short-info-number">
                      {area || noContent}
                    </strong>
                    <span className="sale__short-info-text">
                      {specificationTypes["area"]}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="sale__info">
                <h3 className="h3 mb-3">Коммуникации</h3>
                {communication && (
                  <Communication communication={communication} />
                )}
              </div>
            </div>
            <NavLink to={from}>
              <Button variant="outline-dark">{getBackLinkText(from)}</Button>
            </NavLink>
          </div>
        </main>
      </>
    );
  }
}

Sale.defaultProps = {
  item: {
    kind: "Дом",
    specification: {},
    equipment: {},
    saleOffer: {},
    location: {
      localityName: "Нас.пункт",
      mkadDistance: "23"
    },
    landDetails: {}
  }
};

const mapStateToProps = state => {
  const {
    sales: {
      data: { items }
    },
    sale: { data },
    sale
  } = state;

  let item;
  if (items) {
    item = items.filter(element => {
      return element.id.toString() === state.sale.id;
    })[0];
  } else {
    if (data && data.items) item = data.items[0];
  }

  return {
    item,
    items,
    isLoaded: sale.isLoaded
  };
};

export default connect(
  mapStateToProps,
  { loadSaleId, loadData }
)(Sale);
