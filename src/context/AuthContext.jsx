import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [papers, setPapers] = useState([]);

  // Hardcoded admin credentials
  const ADMIN_EMAIL = 'admin@test.com';
  const ADMIN_PASSWORD = 'admin123';

  useEffect(() => {
    // Restore current logged-in user
    const storedUserStr = localStorage.getItem('currentUser');
    if (storedUserStr) {
      const storedUser = JSON.parse(storedUserStr);
      if (!storedUser.role) {
        storedUser.role = storedUser.email === ADMIN_EMAIL ? 'admin' : 'user';
        localStorage.setItem('currentUser', JSON.stringify(storedUser));
      }
      setUser(storedUser);
    }

    // Restore registered users list
    const storedUsers = localStorage.getItem('registeredUsers');
    if (storedUsers) {
      setRegisteredUsers(JSON.parse(storedUsers));
    } else {
      // Migrate old single-user format if exists
      const oldUser = localStorage.getItem('registeredUser');
      if (oldUser) {
        const parsed = JSON.parse(oldUser);
        const list = [{ ...parsed, role: 'user', status: 'Active' }];
        localStorage.setItem('registeredUsers', JSON.stringify(list));
        localStorage.removeItem('registeredUser');
        setRegisteredUsers(list);
      }
    }

    // Restore uploaded papers
    const storedPapers = localStorage.getItem('uploadedPapers');
    if (storedPapers) {
      setPapers(JSON.parse(storedPapers));
    }

    setLoading(false);
  }, []);

  const register = (userData) => {
    const role = userData.email === ADMIN_EMAIL ? 'admin' : 'user';
    const newUser = { ...userData, role, status: 'Active', joinedAt: new Date().toISOString() };

    // Check if email already registered
    const existing = registeredUsers.find(u => u.email === userData.email);
    if (existing) {
      return { success: false, message: 'Email already registered.' };
    }

    const updatedList = [...registeredUsers, newUser];
    setRegisteredUsers(updatedList);
    localStorage.setItem('registeredUsers', JSON.stringify(updatedList));
    return { success: true };
  };

  const login = (email, password) => {
    // Check admin credentials first — no registration needed
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const adminUser = { name: 'Admin', email: ADMIN_EMAIL, role: 'admin' };
      setUser(adminUser);
      localStorage.setItem('currentUser', JSON.stringify(adminUser));
      return { success: true, role: 'admin' };
    }

    // Check registered users list
    const storedUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const found = storedUsers.find(u => u.email === email && u.password === password);
    if (found) {
      if (found.status === 'Blocked') {
        return { success: false, message: 'Your account has been blocked. Contact admin.' };
      }
      const loggedIn = { ...found, role: found.role || 'user' };
      setUser(loggedIn);
      localStorage.setItem('currentUser', JSON.stringify(loggedIn));
      return { success: true, role: loggedIn.role };
    }

    return { success: false, message: 'Invalid credentials. Please check your email and password.' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  // Admin: update a user's status in the list
  const updateUserStatus = (email, status) => {
    const updated = registeredUsers.map(u =>
      u.email === email ? { ...u, status } : u
    );
    setRegisteredUsers(updated);
    localStorage.setItem('registeredUsers', JSON.stringify(updated));
  };

  // Admin: delete a user from the list
  const deleteUser = (email) => {
    const updated = registeredUsers.filter(u => u.email !== email);
    setRegisteredUsers(updated);
    localStorage.setItem('registeredUsers', JSON.stringify(updated));
  };

  // Admin: add an uploaded paper
  const addPaper = (paperData) => {
    const newPaper = {
      ...paperData,
      id: Date.now(),
      status: 'Approved',
      uploadedAt: new Date().toISOString(),
    };
    const updated = [...papers, newPaper];
    setPapers(updated);
    localStorage.setItem('uploadedPapers', JSON.stringify(updated));
  };

  // Admin: delete a paper
  const deletePaper = (id) => {
    const updated = papers.filter(p => p.id !== id);
    setPapers(updated);
    localStorage.setItem('uploadedPapers', JSON.stringify(updated));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ user, register, login, logout, registeredUsers, updateUserStatus, deleteUser, papers, addPaper, deletePaper }}>
      {children}
    </AuthContext.Provider>
  );
};
