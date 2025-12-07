import { Link, useLocation, useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Home, BookOpen, Calendar, LogOut } from "lucide-react";

export default function Layout() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { to: "/home", icon: Home, label: "Home" },
    { to: "/recipes", icon: BookOpen, label: "Recipes" },
    { to: "/planner", icon: Calendar, label: "Planner" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-8">
              <Link to="/home" className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  D
                </div>
                <span className="text-2xl font-extrabold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent hidden sm:block">
                  DailyDish
                </span>
              </Link>

              <nav className="hidden md:flex gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all ${
                      location.pathname === item.to
                        ? "bg-gradient-to-r from-orange-500 to-pink-600 text-white shadow-lg"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    <item.icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-3">
                {user?.photo ? (
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center text-white font-bold">
                    {user?.name?.charAt(0)?.toUpperCase()}
                  </div>
                ) : (
                  <div className="w-9 h-9 rounded-full bg-gray-300" />
                )}
                <span className="text-sm font-medium text-gray-700">
                  {user?.name?.split(" ")[0]}
                </span>
              </div>
              <button
                onClick={() => logout().then(() => navigate("/"))}
                className="p-2 text-gray-500 hover:text-red-600 transition"
              >
                <LogOut size={22} />
              </button>
            </div>
          </div>
        </div>

        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
          <div className="flex justify-around py-2">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`flex flex-col items-center p-3 rounded-xl transition-all ${
                  location.pathname === item.to
                    ? "text-orange-600 bg-orange-50"
                    : "text-gray-500"
                }`}
              >
                <item.icon size={24} />
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            ))}
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-8">
        <Outlet />
      </main>
    </div>
  );
}