import conf from '../conf/conf.js'; // Ensure this path is correct
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // Automatically log the user in after creating the account
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }
    // async createAccount({ email, password, name }) {
    //     try {
    //         // Generate a valid userId based on the user's name or email
    //         const userId = name.toLowerCase().replace(/[^a-zA-Z0-9._-]/g, "_").substring(0, 36);
            
    //         // Create the user account
    //         const userAccount = await this.account.create(userId, email, password, name);
            
    //         if (userAccount) {
    //             // Call another method to log the user in after account creation
    //             return this.login({ email, password });
    //         } else {
    //             return userAccount;
    //         }
    //     } catch (error) {
    //         throw error;
    //     }
    // }
    
    async login({ email, password }) {
        try {
            // Use createSession instead of createEmailSession
            return await this.account.createSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
        return null;

       
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}

const authService = new AuthService();
export default authService;
