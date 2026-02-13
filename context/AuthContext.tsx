import React, { createContext, useContext, useState, useEffect } from 'react';

type UserType = 'buyer' | 'supplier' | null;

interface User {
    id: string;
    name: string;
    email: string;
    type: UserType;
    avatar?: string;
}

interface AuthContextType {
    user: User | null;
    login: (type: UserType, email: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // Check local storage for persisted session
        const storedUser = localStorage.getItem('ammar_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (type: UserType, email: string) => {
        // Mock login logic
        const mockUser: User = {
            id: type === 'supplier' ? 'SUP-001' : 'BUY-001',
            name: type === 'supplier' ? 'شركة اليمامة' : 'أحمد محمد',
            email: email,
            type: type,
            avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
        };

        setUser(mockUser);
        localStorage.setItem('ammar_user', JSON.stringify(mockUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('ammar_user');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
