# MyVogue – AI-Powered Personal Closet and Style Assistant

MyVogue is a smart personal closet management application that helps users organize their wardrobe, track outfit history, and receive AI-powered outfit suggestions. Designed with a refined pastel-pink aesthetic inspired by high fashion, MyVogue is your intelligent styling assistant for every occasion.

## Features

- AI-powered outfit recommendations based on wear history, color matching, and category compatibility
- Clothing photo upload and categorization into customizable sections such as tops, bottoms, dresses, and accessories
- Wear history tracking to avoid outfit repetition and maintain wardrobe freshness
- Filter and search functionality by category, last worn date, color, and custom tags
- Minimalist and elegant user interface inspired by luxury fashion

## Technology Stack

| Layer       | Technology                        |
|-------------|-----------------------------------|
| Frontend    | React.js, Tailwind CSS            |
| Backend     | Node.js or FastAPI                |
| Database    | MongoDB, Firebase, or Supabase    |
| AI Engine   | Outfit recommendation based on usage data and item metadata |
| Image Storage | Firebase Storage or Cloudinary  |
| Hosting     | Vercel or Netlify (frontend), Render or Railway (backend) |

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/yourusername/myvogue.git
cd myvogue
```

## Frontend Setup

cd frontend
npm install
npm run dev

## Backend Setup (Node.js or FastAPI)
Node.js:

cd backend
npm install
npm run start
FastAPI:

cd backend
uvicorn main:app --reload

## Environment Variables
Create a .env file for frontend and backend.

Frontend:

VITE_API_URL=http://localhost:5000
Backend (Node.js):

DB_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/myvogue
CLOUDINARY_API_KEY=your_key

## Folder Structure
```
myvogue/
├── frontend/        # React frontend
├── backend/         # Node.js or FastAPI backend
├── database/        # Schema and seed files
├── public/          # Static assets
├── screenshots/     # App screenshots (optional)
├── README.md
AI Recommendation Engine
```
## The AI engine analyzes:

Frequency of clothing use (to avoid overuse or underuse)
Color combinations and match probabilities
Compatibility across categories (e.g., tops and bottoms)
Weather data and context-aware filtering (optional feature)
This can be implemented using metadata-based filtering or embedding-based similarity scoring.

## Future Enhancements

User profiles and personalized styling preferences
Travel-based capsule wardrobe planning
Weather-based outfit suggestions
Usage analytics and style tracking
Integration with fashion boards or inspiration sources

## Contributing

Contributions are welcome.

Fork the repository
Create a new branch: git checkout -b feature/your-feature
Make your changes and commit: git commit -m "Added your feature"
Push to your branch: git push origin feature/your-feature
Submit a pull request

## License

This project is licensed under the MIT License.

Contact

Developed by Madhu Shraya


Email: madhushraya@gmail.com


---

Let me know if you want:

- A matching `LICENSE` file (MIT, Apache, etc.)
- Firebase or Supabase integration guide
- Project logo or UI mockups
- A version for a public pitch or portfolio site

Ready to go live on GitHub whenever you are.
