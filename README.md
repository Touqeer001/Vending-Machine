<h1 align="center"> Vending Machine</h1> 

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

5. ** Display.js:**
   - Shows the current status or messages to the user.

<br/>

## Glimpses of Mini-Store 🙈 :


<table>
  <tr>
    <td><img src="https://github.com/Touqeer001/Lecture-Sheduling-Module/assets/126690073/9567c1da-be31-468b-bb46-a75dbd0a1202" alt="main page" /></td>
    <td><img src="https://github.com/Touqeer001/Lecture-Sheduling-Module/assets/126690073/e3c45241-6201-428e-bbeb-30c5425e21b9" alt="register" /></td>
  </tr>
  <tr>
    <td><img src="https://github.com/Touqeer001/Lecture-Sheduling-Module/assets/126690073/84010d30-9e3b-4eca-8716-491a3c9383f0" alt="login" /></td>
    <td><img src="https://github.com/Touqeer001/Lecture-Sheduling-Module/assets/126690073/04257e93-9da6-4b67-aa09-1eb929da1d57" alt="admin homes" /></td>
  </tr>
  <tr>
    <td><img src="https://github.com/Touqeer001/Lecture-Sheduling-Module/assets/126690073/d4378da1-8169-4a8b-b71d-12a970ca603e" alt="admin instructor" /></td>
    <td><img src="https://github.com/Touqeer001/Lecture-Sheduling-Module/assets/126690073/b6619f50-bdbd-40ed-99b9-b9c7e3b80775" alt="admin lecture scheduling" /></td>
  </tr>
  <tr>
    <td><img src="https://github.com/Touqeer001/Lecture-Sheduling-Module/assets/126690073/594278e9-28ca-4bff-b990-35a5938ff7fb" alt="user page" /></td>

  </tr>
</table>

<br />

## Technologies Used

- **Frontend:** React + vite, contextApi

## Run
- Used Command npm run dev to start the development server.


