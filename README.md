#  Affordable Housing Predictor

An expressive React-powered web app that estimates California housing prices using geolocation and household data — blending technical architecture, creative animation, and modular design into an aesthetic experience. Built by a curious mind driven by free thinking and purpose-driven frontend finesse.

---

##  Why This Exists

Housing data doesn’t have to be dull. This app turns raw inputs into meaningful insights, transforming prediction into presentation. It’s not just code — it’s crafted emotion, styled storytelling, and a hint of Silicon Savannah magic.

---

##  Features

-  **GeoInput component** — capture latitude & longitude dynamically
-  **Housing Stats module** — rooms, population, households
-  **Income & Age inputs** — refine prediction context
-  **Ocean Proximity selector** — playful yet impactful UI
-  **Animated prediction reveal** — count-up glow with pulse effect
-  **Modular React layout** — reusable components with clean logic
-  **FastAPI backend** — rapid model-serving via structured JSON
-  **Aesthetic CSS experience** — gradients, responsive layout, scroll-safe forms

---

##  Tech Stack

| Layer      | Tools Used                          |
|------------|--------------------------------------|
| Frontend   | React, Vite, Axios, CountUp          |
| Backend    | FastAPI, Python, Pydantic            |
| Styling    | Pure CSS (custom glow + animation)   |
| Data Logic | ML model (custom-trained externally) |
| Hosting    | GitHub (deployment coming soon)      |

---

##  Local Setup

```bash
git clone https://github.com/Data-Enthusiast8888/affordable-housing-app.git
cd affordable-housing-app
npm install
npm run dev


Backend lives in /api — run it via FastAPI as:
uvicorn main:app --reload
