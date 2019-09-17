import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loadSaleId, loadData } from "../../redux/reducers/sale";
import CardPrice from "../../components/Card/CardPrice/CardPrice";
import PhotoGallery from "../../components/PhotoGallery/PhotoGallery";
import propertyKind from "../../config/propertyKind";
import specificationTypes from "../../config/specification";
import Communication from "../../pages/SalePage/Communications/Communications";
import Loader from "../../components/Loader/Loader";
import Button from "../../components/Button/Button";
import "./SalePage.scss";
import { goBack } from "../../utils/goBack";
import Badge from "../../components/Badge/Badge";
import Size from "./Size/Size";

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
    const { item, isLoaded, history } = this.props;
    const {
      kind,
      specification: { area, bedrooms },
      communication,
      landDetails: { area: landArea },
      saleOffer,
      location: { localityName, mkadDistance },
      badge
    } = item;
    const noContent = "-";

    const formatDistance = (mkadDistance, units) => {
      return `${mkadDistance} ${units}`;
    };

    return (
      <>
        {!isLoaded && <Loader />}
        <main className="sale main-container">
          <div className="sale__content content-wrapper-small content-wrapper d-flex justify-content-start align-items-center px-35">
            <h1 className="h1 my-4 mr-4">
              <span>{`${propertyKind[kind] || noContent}, `}</span>
              <Size kind={propertyKind[kind]} area={area} landArea={landArea} />
              <span>{`, в Посёлке ${localityName}, ${formatDistance(
                mkadDistance,
                "км."
              )}`}</span>
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
            <Button onClick={goBack(history)} variant="outline-dark">
              Назад
            </Button>
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

export default withRouter(
  connect(
    mapStateToProps,
    { loadSaleId, loadData }
  )(Sale)
);
