import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app-store',
  state: () => ({
    count: 0,
  }),
})
