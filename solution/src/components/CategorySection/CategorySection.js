import React, { useState, useEffect } from "react";

function CategorySection() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("Card.json")
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <section className="category-list">
      <h2>Categories</h2>
      <div className="category-cards">
        {categories.map(category => (
          <div key={category.name} className="category-card">
            <img src={category.logo} alt={`${category.name} logo`} />
            <h3>{category.name}</h3>
            <p>Jobs Available: {category.jobs}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
