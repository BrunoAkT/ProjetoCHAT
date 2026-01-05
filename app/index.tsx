import { AuthProvider } from "@/context/auth";
import Routes from "./(routes)/routes";

export default function Index() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}