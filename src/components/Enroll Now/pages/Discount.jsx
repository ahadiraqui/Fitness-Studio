import React, { useState } from "react"
import "./pages.css"

const pricingPlans = [
  { duration: "1 Month", price: 2000, discount: 0 },
  { duration: "3 Months", price: 4000, discount: 12 },
  { duration: "6 Months", price: 6000, discount: 25 },
  { duration: "1 Year", price: 9000, discount: 38 },
  { duration: "Lifetime", price: 12000, discount: 45 }
]

const Discount = () => {
  const [selectedPlan, setSelectedPlan] = useState(null)

  const handlePayment = () => {
    //  payment code
  }

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg mr-6 p-9">
        <h2 className="text-4xl font-bold-500 mb-6">Pricing Plan</h2>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label
              htmlFor="selectedPlan"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Select Plan
            </label>
            <select
              id="selectedPlan"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={selectedPlan ? selectedPlan.duration : ""}
              onChange={e => {
                const duration = e.target.value
                const plan = pricingPlans.find(p => p.duration === duration)
                setSelectedPlan(plan || null)
              }}
            >
              <option value="">Select a plan</option>
              {pricingPlans.map(plan => (
                <option key={plan.duration} value={plan.duration}>
                  {plan.duration}
                </option>
              ))}
            </select>
          </div>
          {selectedPlan && (
            <div>
              <div className="flex justify-between">
                <p className="text-lg font-semibold">{`Price: ${selectedPlan.price} INR`}</p>
                <p className="text-lg font-semibold">{`Discount: ${selectedPlan.discount}% off`}</p>
              </div>
              <p className="text-lg font-semibold">{`Total: ${selectedPlan.price -
                (selectedPlan.price * selectedPlan.discount) / 100} INR`}</p>
            </div>
          )}
          <div className="mt-6">
            <button
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handlePayment}
              disabled={!selectedPlan}
            >
              Make Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discount
