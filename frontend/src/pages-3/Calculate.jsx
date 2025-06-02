import React, { useState } from "react";

const foodList = {
  "Main Dishes": [
    { name: "Fried rice with pork (1 plate)", calories: 520 },
    { name: "Stir-fried noodles with chicken (1 plate)", calories: 435 }
  ],
  Snacks: [
    { name: "Thai coconut pancakes (1 pair)", calories: 92 },
    { name: "Banana in coconut milk (1 small bowl)", calories: 152 }
  ],
  Fruits: [
    { name: "Banana (1 piece)", calories: 77 },
    { name: "Watermelon (10 cubes)", calories: 60 }
  ],
  Drinks: [
    { name: "Soy milk (1 glass)", calories: 55 },
    { name: "Coke (1 glass)", calories: 100 }
  ]
};

const mealNames = ["Breakfast", "Lunch", "Dinner"];

const Calculate = () => {
  // state เก็บข้อมูลแคลอรีแต่ละมื้อ (เก็บเป็น object)
  const [meals, setMeals] = useState({
    breakfast: [{ category: "", calories: 0 }],
    lunch: [{ category: "", calories: 0 }],
    dinner: [{ category: "", calories: 0 }]
  });

  // ฟังก์ชันเพิ่ม select ใหม่สำหรับมื้อใดมื้อหนึ่ง
  const addSelect = (mealId) => {
    setMeals((prev) => ({
      ...prev,
      [mealId]: [...prev[mealId], { category: "", calories: 0 }]
    }));
  };

  // ฟังก์ชันอัพเดตค่า calories เมื่อเลือกเมนูใน select
  const handleSelectChange = (mealId, index, calories) => {
    const newMeals = { ...meals };
    newMeals[mealId][index].calories = parseInt(calories) || 0;
    setMeals(newMeals);
  };

  // คำนวณแคลอรีรวมของแต่ละมื้อ
  const getMealTotal = (mealId) => {
    return meals[mealId].reduce((sum, item) => sum + item.calories, 0);
  };

  // คำนวณแคลอรีรวมทั้งวัน
  const getTotalCalories = () => {
    return mealNames.reduce(
      (total, meal) => total + getMealTotal(meal.toLowerCase()),
      0
    );
  };

  return (
    <div>
      {mealNames.map((meal) => {
        const mealId = meal.toLowerCase();
        return (
          <div key={mealId} className="meal">
            <h2>🍽 {meal}</h2>
            {meals[mealId].map((item, index) => (
              <select
                key={index}
                value={item.calories}
                onChange={(e) => handleSelectChange(mealId, index, e.target.value)}
              >
                <option value={0}>-- Select Food --</option>
                {Object.entries(foodList).map(([category, items]) =>
                  items.map((food, i) => (
                    <option key={i} value={food.calories}>
                      {food.name} ({food.calories} kcal)
                    </option>
                  ))
                )}
              </select>
            ))}
            <button 
              onClick={() => addSelect(mealId)}
              style={{ fontSize: '16px', borderRadius: '5px', padding: '5px 5px', backgroundColor: 'rgba(0,0,0,0.2)', marginTop: '20px' }}
            >
              + Add Item
            </button>
            <div className="result">Total: {getMealTotal(mealId)} kcal</div>
          </div>
        );
      })}
      <div id="totalCalories" className="total">
        Total Daily Calories: {getTotalCalories()} kcal
      </div>
    </div>
  );
};

export default Calculate;
