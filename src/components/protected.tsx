import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

// Menentukan komponen protected route
const Protected = ({ children }: { children: React.ReactElement }) => {
  const { user } = useAuth();

  if (!user) {
    // Jika user belum login, redirect ke halaman login
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default Protected;
