import { useState } from "react";

const BudgetDropdown = () => {
  // State to store selected budget range
  const [budget, setBudget] = useState("");

  return (
    <div className="w-8/12">
      <label
        htmlFor="industry"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-ftvblack-400">
        How much are you willing to pay for this service?
      </label>

      <select
        id="budget"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none dark:bg-ftvwine-25 focus:bg-ftvgrey-25 dark:border-ftvgrey-200 dark:placeholder-gray-400 dark:text-ftvblack-300 dark:focus:ring-ftvwine-300 dark:focus:border-ftvwine-200">
        <option value="">Choose a budget range</option>
        <option value="500-2000">$500 – $2,000 per hour</option>
        <option value="2000-5000">$2,000 – $5,000 per hour</option>
        <option value="5000-10000">$5,000 – $10,000 per hour</option>
        <option value="10000+">$10,000+ per hour</option>
      </select>
    </div>
  );
};

export default BudgetDropdown;
