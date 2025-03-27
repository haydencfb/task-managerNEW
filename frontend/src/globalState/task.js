import { create } from 'zustand';

export const useTaskManager = create((set) => ({
    tasks: [],
    setTasks: (tasks) => set({ tasks }),
    createTask: async (newTask) => {
        if (!newTask.name || !newTask.description || !newTask.status) {
            return { success: false, message: 'Please fill in all fields' }; // Fix typo
        }
        const res = await fetch('/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTask),
        });
        const data = await res.json();
        set((state) => ({ tasks: [...state.tasks, data.data] }));
        return { success: true, message: 'Task created successfully' }; // Add success response
    },
}));

