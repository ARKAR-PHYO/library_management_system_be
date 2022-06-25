import { config } from "dotenv";

config();

export const SERVER_PORT = process.env.SERVER_PORT || 8800;
export const SERVER_DOMAIN = process.env.SERVER_DOMAIN || "localhost";
export const JWT_SECRET = process.env.JWT_SECRET || "JWT_SECRET";
export const CLIENT_PORT = process.env.CLIENT_PORT || 4000;
export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "super_admin@admin.com";
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "password";
