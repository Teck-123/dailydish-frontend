import { Link } from "react-router-dom";
import { Plus, BookOpen, CalendarDays } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen pt-12 pb-20 px-4">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
          Welcome back! 
        </h1>
        <p className="text-xl md:text-2xl text-gray-600">
          Let's see what we're cooking this week
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Link
          to="/recipes"
          className="group bg-white rounded-3xl p-10 hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-200"
        >
          <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
            <Plus size={32} className="text-orange-600 group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-3">Add Recipe</h3>
          <p className="text-gray-600 text-lg">Save your favorite dishes</p>
        </Link>

        <Link
          to="/recipes"
          className="group bg-white rounded-3xl p-10 hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-pink-200"
        >
          <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-500 transition-colors">
            <BookOpen size={32} className="text-pink-600 group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-3">My Recipes</h3>
          <p className="text-gray-600 text-lg">Browse your collection</p>
        </Link>

        <Link
          to="/planner"
          className="group bg-white rounded-3xl p-10 hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-purple-200"
        >
          <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-colors">
            <CalendarDays size={32} className="text-purple-600 group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-3">Meal Planner</h3>
          <p className="text-gray-600 text-lg">Plan your week ahead</p>
        </Link>
      </div>
    </div>
  );
}