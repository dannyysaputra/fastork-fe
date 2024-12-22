import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

// Role Protected Component
interface RoleProtectedProps {
  allowedRole: "company" | "applicant";
  children: React.ReactElement;
}

const RoleProtected = ({ allowedRole, children }: RoleProtectedProps) => {
  const { user } = useAuth();

  if (!user || user.role !== allowedRole) {
    // Jika role user tidak sesuai, redirect ke halaman yang sesuai
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default RoleProtected;
