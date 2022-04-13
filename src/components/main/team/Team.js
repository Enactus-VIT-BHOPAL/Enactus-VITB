import React, { useState, useEffect } from "react";
import "./Team.css";
import { categoryArr, subCategoryArr, menu } from "./TeamData";
import PortfolioCard from "./TeamCard";


function Team({ id }) {
  const [category, setCategory] = useState(categoryArr[0].name);
  const [subCategories, setSubCategories] = useState([]);
  const [subCategory, setSubCategory] = useState(subCategoryArr[0].name);
  const [items, setItems] = useState([]);

  useEffect(() => {
    let menuItems = menu.filter(item => item.category.includes(category));
    setItems(menuItems);
    subCategory &&
      setItems(
        menuItems.filter(subItem => subItem.subCategory.includes(subCategory))
      );
    let sub_caterogies = subCategoryArr.filter(item =>
      item.category.includes(category)
    );
    category && setSubCategories(sub_caterogies);
  }, [category, subCategory]);

  return (
    <section id={id} className="portfolio section-bg">
      <div className="container">
      <div className="section-title">
        <h2>Team</h2>
        <p>

        Talent wins games, but teamwork and intelligence wins championships ; so here are the teams which have come together to bring out the best of the club. 
        With big ideas comes great results, introducing the team as “DESIGN TEAM” and “CREATIVES TEAM”. As we know Words are the most powerful weapon of all, we have our “CONTENT TEAM”  to write amazing descriptive content. Finances being important for any organization, we have our “FINANCE TEAM” to handle all the money matters of the club. Without publicity and awareness no team can grow more, hence we have our “MARKETING AND PR TEAM”. For handling the funding and outreach we have our “OUTREACH AND FUNDING TEAM”.
       </p>
      </div>

        {/* category-section */}
        <div className="row">
          <div className="col-sm-12 d-flex justify-content-center">
            <div className="btn-container">
              {categoryArr.map(item => {
                return (
        
                    <button
                      key={item.id}
                      className={category === item.name ? "active": undefined}
                      onClick={() => {
                        setCategory(item.name);
                        setSubCategory("Lead");
                      }}
                    >
                      {item.displayName}
                    </button>
                );
              })}
             
            </div>
          </div>
        </div>

        {/* subcategory-section */}
        <div className="row subcategory-wrapper">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul className="portfolio-flters ">
              {subCategories.map(item => {
                return (
                  <li
                    key={item.id}
                    className={subCategory === item.name ? "filter-active": undefined}
                    onClick={() => {
                      setSubCategory(item.name);
                    }}
                  >
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* portfolio-cards-section */}
        <div className="row portfolioCard-wrapper">
          {items.length !== 0 && <PortfolioCard items={items} />}
        </div>
      </div>
    </section>
  );
}

export default Team;
