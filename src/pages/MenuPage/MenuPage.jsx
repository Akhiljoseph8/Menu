import React, { useState, useEffect } from "react";
import "./MenuPage.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { getMenu } from "../../services/allApis";

const MenuPage = () => {
  const [activeTab, setActiveTab] = useState("");
  const [menuItems, setMenuItems] = useState({});

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await getMenu();
      if (response && response.data) {
        const formattedMenu = {};

        response.data.forEach((menu) => {
          formattedMenu[menu.menuName] = menu.items || [];
        });
        setMenuItems(formattedMenu);
        const firstCategory = Object.keys(formattedMenu)[0] || "";
        setActiveTab(firstCategory);
      }
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="menu-container">
        <div className="menu-title-section">
          <h1 className="menu-title">MENU</h1>
          <p className="menu-description">
            Please take a look at our menu featuring food, drinks, and brunch. If you’d like to
            place an order, use the "Order Online" button below the menu.
          </p>
        </div>

        <div className="menu-categories-section">
          <div className="menu-tabs-wrapper">
            <div className="menu-tabs">
              {Object.keys(menuItems).map((tab) => (
                <button
                  key={tab}
                  className={`tab-button ${activeTab === tab ? "tab-active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="menu-content-wrapper">
          <div className="menu-content-section">
            {Array.isArray(menuItems[activeTab]) && menuItems[activeTab].length > 0 ? (
              menuItems[activeTab].map((category, index) => (
                <div key={index}>
                  <h2 className="category-title">{category.category}</h2>
                  <div className="menu-list">
                    {category.items.map((item, id) => (
                      <div key={id} className="menu-item">
                        <div className="item-heading">
                          <span className="item-name">{item.name}</span>
                          <span className="dots"></span>
                          <span className="item-price">{item.price}</span>
                        </div>
                        <p className="item-description">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p className="empty-menu-message">No items available in this category.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MenuPage;
