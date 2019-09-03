import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadSaleData } from "../../redux/reducers/sale";
import CardImg from "../../components/Card/CardImg/CardImg";
import CardPrice from "../../components/Card/CardPrice/CardPrice";

const Sale = ({
  match: {
    params: { id }
  },
  loadSaleData,
  ...rest
}) => {
  const { item } = rest;

  useEffect(() => {
    loadSaleData(id);
  }, [loadSaleData]);

  return (
    <div className="wrapper">
      <div className="sale">
        {!item || !item.images[0] ? (
          <CardImg className="card__img">
            <h5 className="text-center ">No image</h5>
          </CardImg>
        ) : (
          <CardImg className="card__img" image={item.images[0]} />
        )}
        <h1>Дом</h1>
        <div className="sale__short-info">
          <CardPrice className="sale__price" {...rest} />
          <ul className="sale__short-info">
            <li className="sale__short-info-item">
              <span className="sale__short-info-number"></span>
              <span className="sale__short-info-text"></span>
            </li>
          </ul>
        </div>
        <div className="sale__info">
          <h3>Участок</h3>
          <ul className="sale__house">
            <li className="sale__land-item"></li>
          </ul>
          <h3>Коммуникации</h3>
          <ul className="sale__land">
            <li className="sale__land-item"></li>
          </ul>
        </div>
      </div>
    </div>
  );
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
