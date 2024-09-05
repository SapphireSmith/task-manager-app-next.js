import { connectToDB } from "@/database/connection";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json();

        await connectToDB();

        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({ message: `This email is not registered` }, { status: 409 });
        }

        // Check if the provided password matches the hashed password in the database
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return NextResponse.json({ message: `Incorrect password` }, { status: 401 });
        }

        // Generate a JWT token
        const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET!, {
            expiresIn: "1h",
        });

        // Optionally, set the JWT token as an HTTP-only cookie
        const response = NextResponse.json({ message: `Logged in` }, { status: 200 });
        response.cookies.set('authToken', token, { httpOnly: process.env.NODE_ENV === 'production', secure: process.env.NODE_ENV === 'production', maxAge: 3600, path: '/' });

        return response;

    } catch (error: unknown) {
        let errorMessage = "An unknown error occurred.";
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        return NextResponse.json({ message: `An error occurred: ${errorMessage}` }, { status: 500 });
    }
}
