import {
	defineStore
} from "pinia";

export const useClientStore = defineStore("client", {
	state: () => {
		return {
			name: '忽必烈',
			age: 29,
			salary: 10,
			phone: '18895350000'
		}
	},
	getters: {
		totalSalary: (state) => {
			console.log("[state]", state)
			return state.age * state.salary
		}
	},
	actions: {
		setAge(params) {
			console.log("[params]", params)
			this.age = params;
		}
	}
})