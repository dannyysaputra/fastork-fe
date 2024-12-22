import { createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useNavigate } from "react-router-dom";

// mendefinisikan tipe AuthProps untuk tipe properti children harus berupa elemen react
interface AuthProps {
  children: React.ReactElement;
}

// mendefinisikan tipe AuthContextType yang akan disimpan di AuthContext
interface AuthContextType {
  user: UserType | null;
  login: (data: LoginDataType) => void;
  logout: () => void;
  isCompany: () => boolean;
  isApplicant: () => boolean;
}

// mendefinisikan tipe data user
interface UserType {
  id: string;
  email: string;
  role: "company" | "applicant"; // Menentukan role user
  token: string;
}

interface LoginDataType {
  id: string;
  role: "company" | "applicant";
  token: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProps) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  // Fungsi login
  const login = async (data: LoginDataType) => {
    setUser(data);
    if (data.role === "company") {
      navigate("/company-dashboard", { replace: true });
    } else {
      navigate("/applicant-dashboard", { replace: true });
    }
  };

  // Fungsi logout
  const logout = () => {
    setUser(null);
    navigate("/login", { replace: true });
  };

  // Periksa jika user adalah company
  const isCompany = () => user?.role === "company";

  // Periksa jika user adalah applicant
  const isApplicant = () => user?.role === "applicant";

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      isCompany,
      isApplicant,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
