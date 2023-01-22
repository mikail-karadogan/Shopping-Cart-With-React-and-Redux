import React from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../store/actions";
import { DECREASE, INCREASE } from "../../store/action_type";

export default function Cart() {
  const cartData = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const totalPrice = cartData?.cart?.reduce((total, current) => {
    return (total += current.price * current.quantity);
  }, 0);
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {cartData.cart.length ? (
            <>
              <div className="col-md-9">
                <div className="table-responsive">
                  <table className="table">
                    <thead className="text-center border-bottom">
                      <tr>
                        <th scope="col">Photo</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartData?.cart.map((item, index) => {
                        return (
                          <tr
                            className="text-center"
                            style={{ verticalAlign: "middle" }}
                            key={index}
                          >
                            <td>
                              <img
                                src={item.imageSet[0].url}
                                style={{ width: "50px" }}
                                alt="product-image"
                              />
                            </td>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>
                              <div className="d-flex d-md-block">
                                <button
                                  type="button"
                                  className="btn btn-light"
                                  onClick={() =>
                                    dispatch(
                                      actions.cartAction.decrease({
                                        type: DECREASE,
                                        data: item.id,
                                      })
                                    )
                                  }
                                >
                                  -
                                </button>
                                <span className="p-3">{item.quantity}</span>
                                <button
                                  type="button"
                                  className="btn btn-light"
                                  onClick={() =>
                                    dispatch(
                                      actions.cartAction.increase({
                                        type: INCREASE,
                                        data: item.id,
                                      })
                                    )
                                  }
                                >
                                  +
                                </button>
                              </div>
                            </td>
                            <td>
                              {item.price.toLocaleString("tr-TR", {
                                style: "currency",
                                currency: "TRY",
                              })}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-md-3">
                <h3 className="text-success text-center">
                  Total:{" "}
                  {totalPrice.toLocaleString("tr-TR", {
                    style: "currency",
                    currency: "TRY",
                  })}
                </h3>
                <button className="btn btn-primary mx-auto d-block">
                  Complate the order
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="col-12">
                <h3 className="text-center">CART IS EMPTY</h3>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
