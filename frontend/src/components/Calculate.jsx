import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


const foodList = {
      "Main Dishes": [
        { name: "Fried rice with pork (1 plate)", calories: 520 },
        { name: "Stir-fried noodles with chicken (1 plate)", calories: 435 }
      ],
      "Snacks": [
        { name: "Thai coconut pancakes (1 pair)", calories: 92 },
        { name: "Banana in coconut milk (1 small bowl)", calories: 152 }
      ],
      "Fruits": [
        { name: "Banana (1 piece)", calories: 77 },
        { name: "Watermelon (10 cubes)", calories: 60 }
      ],
      "Drinks": [
        { name: "Soy milk (1 glass)", calories: 55 },
        { name: "Coke (1 glass)", calories: 100 }
      ]
    };

    const mealNames = ['Breakfast', 'Lunch', 'Dinner'];
    const mealsDiv = document.getElementById('meals');

    mealNames.forEach(meal => {
      const mealId = meal.toLowerCase();
      const mealSection = document.createElement('div');
      mealSection.className = 'meal';
      mealSection.innerHTML = `
        <h2>🍽 ${meal}</h2>
        <input type="text" placeholder="Search menu..." oninput="filterOptions(this, '${mealId}')">
        <div class="select-area" id="${mealId}-selects"></div>
        <button onclick="addSelect('${mealId}')">+ Add Item</button>
        <div class="result" id="${mealId}-total">Total: 0 kcal</div>
      `;
      mealsDiv.appendChild(mealSection);
      addSelect(mealId);
    });

    function addSelect(mealId) {
      const container = document.getElementById(`${mealId}-selects`);
      const wrapper = document.createElement('div');

      for (let category in foodList) {
        const select = document.createElement('select');
        select.className = 'food-select';
        const defaultOpt = document.createElement('option');
        defaultOpt.textContent = `-- ${category} --`;
        defaultOpt.value = '';
        select.appendChild(defaultOpt);

        foodList[category].forEach(item => {
          const opt = document.createElement('option');
          opt.value = item.calories;
          opt.textContent = `${item.name} (${item.calories} kcal)`;
          select.appendChild(opt);
        });

        select.onchange = () => updateMealTotal(mealId);
        wrapper.appendChild(select);
      }

      container.appendChild(wrapper);
    }

    function updateMealTotal(mealId) {
      const selects = document.querySelectorAll(`#${mealId}-selects select`);
      let sum = 0;
      selects.forEach(s => {
        sum += parseInt(s.value) || 0;
      });
      document.getElementById(`${mealId}-total`).textContent = `Total: ${sum} kcal`;
      updateTotalCalories();
    }

    function updateTotalCalories() {
      let total = 0;
      mealNames.forEach(meal => {
        const id = meal.toLowerCase();
        const text = document.getElementById(`${id}-total`).textContent;
        const kcal = parseInt(text.replace(/\D/g, '')) || 0;
        total += kcal;
      });
      document.getElementById('totalCalories').textContent = `Total Daily Calories: ${total} kcal`;
    }

    function filterOptions(input, mealId) {
      const text = input.value.toLowerCase();
      const selects = document.querySelectorAll(`#${mealId}-selects select`);
      selects.forEach(select => {
        [...select.options].forEach(opt => {
          const match = opt.textContent.toLowerCase().includes(text) || opt.value === '';
          opt.style.display = match ? '' : 'none';
        });
      });
    }

export default Calculate;
