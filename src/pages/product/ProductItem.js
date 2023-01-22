import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART } from "../../store/action_type";
import actions from "../../store/actions";

export default function ProductItem({ productData }) {
  const dispatch = useDispatch();
  return (
    <>
      {productData.product.map((item, index) => {
        return (
          <div className="col-6 col-md-4 col-lg-3" key={index}>
            <div className="card">
              <img
                src={item.imageSet[0].url}
                className="card-img-top w-100"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text text-success">
                  {item.price.toLocaleString("tr-TR", {
                    style: "currency",
                    currency: "TRY",
                  })}
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() =>
                    dispatch(
                      actions.cartAction.addToCart({
                        type: ADD_TO_CART,
                        payload: item,
                      })
                    )
                  }
                >
                  add to cart
                </button>
                <span className="d-block"></span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
