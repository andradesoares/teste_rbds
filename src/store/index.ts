'use client';
import { create } from 'zustand';

type State = {
  email: string;
  password: string;
};

type Action = {
  updateEmail: (email: State['email']) => void;
  updatePassword: (password: State['password']) => void;
};

export const useFormStore = create<State & Action>((set) => ({
  email: '',
  password: '',
  updateEmail: (email) => set(() => ({ email: email })),
  updatePassword: (password) => set(() => ({ password: password })),
}));
