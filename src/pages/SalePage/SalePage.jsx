import React, { Component } from "react";
import { connect } from "react-redux";
import { loadSaleId, loadData } from "../../redux/reducers/sale";
import CardPrice from "../../components/Card/CardPrice/CardPrice";
import PhotoGallery from "../../components/PhotoGallery/PhotoGallery";
import propertyKind from "../../config/propertyKind";
import specificationTypes from "../../config/specification";
import communications from "../../config/communications";
import Loader from "../../components/Loader/Loader";
import "./SalePage.scss";

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
    }

    this.props.loadSaleId(id);
  }

  render() {
    const { item, isLoaded } = this.props;

    const {
      kind,
      specification: { area, bedrooms },
      communication,
      landDetails: { area: landArea },
      saleOffer,
      location: { localityName, mkadDistance }
    } = item;

    const noContent = "-";

    return (
      <>
        {!isLoaded && <Loader />}
        <div className="wrapper">
          <div className="sale">
            <div className="sale__content">
              <h1 className="h1 my-5">
                <span>{`${propertyKind[kind] || noContent}, `}</span>
                <span>
                  {area} м<sup>2</sup>
                </span>
                <span>{`, в Посёлке ${localityName}, ${mkadDistance} `}</span>
              </h1>
            </div>

            <PhotoGallery item={item} className="img-gallery" />
            <div className="sale__content">
              <div className="sale__short-info">
                <CardPrice className="sale__price" saleOffer={saleOffer} />
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
                <h3 className="h3 sale__info-title">Коммуникации</h3>
                {communication && (
                  <ul className="sale__communication">
                    {communications.communicationTypes.map(element => {
                      const { translation, communicationType } = element;
                      let currentTypeValues = communications[communicationType];
                      const incomingValue = communication[communicationType];

                      let communicationValue;
                      if (communicationType === "powerSupply") {
                        communicationValue = `${incomingValue}${communications[communicationType]}`;
                      } else {
                        communicationValue = currentTypeValues[incomingValue];
                      }

                      return (
                        <li
                          key={element.communicationType}
                          className="sale__communication-item"
                        >
                          <span className="sale__communication-label">
                            {translation}
                          </span>
                          <span className="sale__communication-value">
                            {communicationValue}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
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
    item = state.sales.data.items.filter(element => {
      return element.id === state.sale.id;
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
