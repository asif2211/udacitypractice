import React from "react";

export default function ProductList(props) {
    const {productItem, removeProduct} = props;
  return (
    <div>
      <ol className="contact-list">
        {productItem.map((item, index) => (
          <li className="contact-list-item" key={index}>
            <div className="contact-avatar">
              <p>{item}</p>
            </div>
            <div className="contact-details"></div>
            <button
              onClick={()=>removeProduct(item)}
              className="contact-remove"
            >
              Remove
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
