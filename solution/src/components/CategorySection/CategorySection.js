import React, { useState, useEffect } from "react";

function CategorySection() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("Card.json")
      .then(response => response.json())
      
      .then(data => (setCategories(data)))
      
      .catch(error => console.log(error));
  }, []);

  return (
    <section className="category-list">
      <h2 className="text-center">Job Category List</h2>
      <p className="text-center">Explore thousands of job opportunities with all the information you need. It's your future.</p>
      <div className="category-cards d-flex justify-content-center m-5 p-5 gap-5">
        {categories.map(category => (
          <div key={category.name} className="category-card">
            <img src={category.log} alt={`${category.name} logo`} />
          
            <h3>{category.name}</h3>
            <p>{category.jobs}+ Jobs Available</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
