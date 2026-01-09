import { AuthProvider, useAuth } from "@/context/auth";
import { SocketProvider } from "@/context/socketContext";
import { Poppins_400Regular, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

function RootLayoutNav() {
  const { user } = useAuth();
  const segments = useSegments() as string[];
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === '(pages)';

    // Se não estivermos no grupo de autenticação, não fazemos nada.
    // Isso é importante para evitar loops quando o app está carregando.
    if (!inAuthGroup) {
      return;
    }

    // A rota atual é a de login?
    const inLoginPage = segments.includes('login');

    if (user && inLoginPage) {
      // O usuário está logado mas está na tela de login,
      // então o mandamos para a home.
      router.replace('/home');
    } else if (!user && !inLoginPage) {
      // O usuário NÃO está logado e NÃO está na tela de login,
      // então o mandamos para o login.
      router.replace('/login');
    }

  }, [user, segments]); // O useEffect roda sempre que 'user' ou a rota mudar

  return (
    <Stack screenOptions={{ headerShown: false }}>
    </Stack>
  );
}

export default function RootLayout() {
  let [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthProvider>
      <SocketProvider>
        <RootLayoutNav />
      </SocketProvider>
    </AuthProvider>
  );
}