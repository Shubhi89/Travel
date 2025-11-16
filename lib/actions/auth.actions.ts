'use server';

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