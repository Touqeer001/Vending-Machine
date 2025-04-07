<h1 align="center"> Vending Machine</h1> 

## Demo


The project repository can be found in [GitHub link](https://github.com/Touqeer001/Vending-Machine.git) 

## Project Overview

1. **App.js (Parent Component)**
   - Manages global message state to display updates.
   - Passes necessary props to child components.

2. **ProductList.js:**
  - Displays available products.
  - Allows users to select a product.
  - Sends selected product data to the Payment component.

3. **InsertMoney.js:**
   - Handles money insertion.
   - Tracks the inserted amount.
   - Checks if the total amount is enough to buy the product.
   - Updates the message state to show success or remaining balance.

4. **Refund.js:**
   - Allows users to cancel the purchase before completing it.
   - Returns the exact amount inserted back to the user.

5. **Display.js:**
   - Shows the current status or messages to the user.

<br/>
## Technologies Used

- **Frontend:** React + vite, contextApi

## Run
- Used Command npm run dev to start the development server.


