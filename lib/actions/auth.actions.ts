'use server';

import { headers } from "next/headers";
import { auth } from "../better-auth/auth";
import { inngest } from "../inngest/client";

export const signUpWithEmail = async (data : SignUpFormData) => {
    try {
        const response = await auth.api.signUpEmail({
            body : {email : data.email , password : data.password , name : data.fullName}
        })

        if(response) {
            await inngest.send({
                name : 'app/user.created',
                data : {
                    email : data.email,
                    name : data.fullName,
                    country : data.country,
                    investmentGoals : data.investmentGoals,
                    riskTolerance : data.riskTolerance,
                    prefferredIndustry : data.preferredIndustry
                }
            })
        }

        return {success : true , data : response}
    } catch(e) {
        console.log(e);
        return {success : false , error : 'sign up failed'}
    }
}

export const signOut = async () => {
    try{
        await auth.api.signOut({headers : await headers()});
    } catch(e) {
        console.log('sign out failed' , e)
        return {success : false , error : 'Sign out failed'}
    }
}

export const signInWithEmail = async ({email , password} : SignInFormData) => {
    try {
        const response = await auth.api.signInEmail({
            body : {email, password}
        })

        return {success : true , data : response}
    } catch(e) {
        console.log(e);
        return {success : false , error : 'Sign In failed'}
    }
}