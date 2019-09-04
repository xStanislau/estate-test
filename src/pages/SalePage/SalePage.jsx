import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { loadSaleData } from "../../redux/reducers/sale";
import CardPrice from "../../components/Card/CardPrice/CardPrice";
import PhotoGallery from "../../components/PhotoGallery/PhotoGallery";
import propertyKind from "../../config/propertyKind";
import equipmentTypes from "../../config/equipment";
import specificationTypes from "../../config/specification";
import communications from "../../config/communications";

import "./SalePage.scss";
class Sale extends Component {
  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    this.props.loadSaleData(id);
  }

  render() {
    const { item, ...rest } = this.props;

    const {
      kind,
      specification,
      specification: { area, bedrooms, rooms, balcones },
      equipment,
      communication,
      landDetails: { area: landArea },
      saleOffer,
      location: { localityName, mkadDistance }
    } = item;

    const noContent = "-";
    debugger;
    return (
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
                      <li className="sale__communication-item">
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
    );
  }
}

Sale.defaultProps = {
  item: {
    kind: "",
    specification: {},
    equipment: {},
    saleOffer: {},
    location: {
      localityName: "",
      mkadDistance: ""
    },
    landDetails: {}
  }
};

const mapStateToProps = state => {
  const [item] = state.sales.data.items.filter(el => {
    return el.id == state.sale.id;
  });
  return {
    item
  };
};

export default connect(
  mapStateToProps,
  { loadSaleData }
)(Sale);
