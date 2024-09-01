// import Cookies from 'cookies';
import { connectToDB } from "@/database/connection";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';

export async function POST(req: NextRequest) {

    try {
        const { name, email, password, confirmPassword } = await req.json();

        if (password !== confirmPassword) {
            return NextResponse.json({ message: `Entered passwords didn't match.` }, { status: 400 });
        }

        await connectToDB();
        
        const user = await User.findOne({ email });
        
        if (user) {
            return NextResponse.json({ message: `User with this email already exists.` }, { status: 409 });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });
        
        await newUser.save();

        return NextResponse.json({ message: `Registration Completed` }, { status: 201 });

    } catch (error: unknown) {
        let errorMessage = "An unknown error occurred.";
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        return NextResponse.json({ message: `An error occurred: ${errorMessage}` }, { status: 500 });
    }
}
