import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { User, Lock, Mail } from 'lucide-react';

// Define the component's props
interface LoginSignupPageProps {
  onLoginSuccess: () => void;
}

const LoginSignupPage: React.FC<LoginSignupPageProps> = ({ onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate a successful login by calling the onLoginSuccess prop
    // In a real app, you would perform an API call here
    console.log('Dummy login successful! Navigating to home page...');
    localStorage.setItem('userToken', 'dummy-token'); // Set a dummy token for a persistent session
    onLoginSuccess();
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-blue-900 dark:to-purple-900 p-6 transition-colors duration-300">
      <motion.div
        className="max-w-lg w-full"
        initial="hidden"
        animate="visible"
        
      >
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-0 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-purple-400 dark:via-blue-400 dark:to-indigo-400 mb-2">
              {isLogin ? 'Welcome Back' : 'Join PranArise'}
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-300">
              {isLogin ? 'Sign in to track your wellness journey' : 'Create an account to begin your journey'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  required
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  required
                />
              </div>
              {!isLogin && (
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    required
                  />
                </div>
              )}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 text-lg font-semibold text-white rounded-xl shadow-lg transition-all duration-300 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {isLogin ? 'Sign In' : 'Sign Up'}
              </motion.button>
            </form>
            <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
              {isLogin ? (
                <>
                  Don't have an account?{' '}
                  <button onClick={() => setIsLogin(false)} className="text-blue-500 hover:underline font-medium">
                    Create One
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <button onClick={() => setIsLogin(true)} className="text-blue-500 hover:underline font-medium">
                    Sign In
                  </button>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default LoginSignupPage;