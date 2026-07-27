import { create } from 'zustand';

type Profile = {
    name: string;
    indexNumber: string;
    programme: string;
    level: string;
    bio: string;
    update: (data: Partial<Profile>) => void;
};

export const useProfile = create<Profile>((set) => ({
    name: 'Yaw Asante',
    indexNumber: '22152286',
    programme: 'BSc. Computer Science',
    level: 'Level 300',
    bio: 'Passionate about mobile app development.',
    update: (data) => set(data),
}));