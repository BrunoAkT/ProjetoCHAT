import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import io, { Socket } from 'socket.io-client';
import { useAuth } from './auth';

const API_URL = process.env.EXPO_PUBLIC_API_URL as string;

interface SocketContextType {
  socket: Socket | null;
  isConnected: boolean;
}

const SocketContext = createContext<SocketContextType>({
  socket: null,
  isConnected: false,
});

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const socketRef = useRef<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const { user, updateUserStatus } = useAuth();




  useEffect(() => {
    if (user?._id) {
      if (socketRef.current) return;

      const newSocket = io(API_URL, {
        query: { userId: user._id },
        transports: ['websocket'],
      });

      socketRef.current = newSocket;

      newSocket.on('connect', () => {
        console.log('Conectado ao servidor Socket.io. ID:', newSocket.id);
        setIsConnected(true);



        newSocket.on("userStatusChanged", ({ userId, status }) => {
          console.log(`User ${userId} is now ${status}`);
          if (userId === user._id) {
            updateUserStatus(status)
          }
        });

      });

      newSocket.on('disconnect', () => {
        console.log('Desconectado do servidor Socket.io');
        newSocket.off("userStatusChanged");
        setIsConnected(false);
      });

    } else {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    }

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, [user?._id]);

  const value = useMemo(() => ({
    socket: socketRef.current,
    isConnected
  }), [isConnected, socketRef.current]);

  return (
    <SocketContext.Provider value={value}>
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContext };

