/**
 /src/lib/utils/api/index.ts
 index.ts
 cml-narrative
 
 Created by Ian Thompson on June 5th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
*/

import type { StudentAuthData } from '$lib/types/StudentData';

/**
 * Handles and contains all of the authentication logic
 */
const Auth = {
	/**
	 * TODO: Implement signup
	 * @param username
	 * @param email
	 * @param password
	 * @returns
	 */
	signUp: async (username: string, email: string, password: string) => {
		return new Promise((resolve, reject) => {
			resolve();
		});
	},
	/**
	 * Sign in a user with a credential
	 *
	 * This function is a WIP but will check with the back end to determine if the user has been created, and then
	 * "sign"the user in. To do this, we will create a user store and set the appropriate data. We can also look into
	 * persisting this store and having it be saved as a cookie.
	 *
	 * @param credential StudentAuthData credential to sign in with
	 * @returns promise wheter or not the user has been signed in or not
	 */
	signIn: async (credential: StudentAuthData) => {
		return new Promise<void>((resolve, reject) => {
			console.log('Attempting to sign in user with data: ', credential);
			resolve();
			// throw new Error("Could not validate ID. Please make sure you are scanning your AGENT ID badge provided by Mission Control");
		});
	}
};

const Data = {
	setProfileData: async (key: string, data) => {
		return new Promise<void>((resolve, reject) => {
			console.log('Attempting to save profile data with data: ', data);
			resolve();
		});
	}
};

/**
 * DataService is the manager for all of the communication between the frontend and the backend
 */
const DataService = {
	Auth,
	Data
};

export default DataService;