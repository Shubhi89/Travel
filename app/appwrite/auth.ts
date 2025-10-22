import { redirect } from "react-router";
import { account, appwriteConfig, database } from "./client";
import { Query } from "appwrite";

export const signUp = async (
  userId: string,
  email: string,
  password: string
) => {
  const user = await account.get();
  if (user) return redirect("/sign-in");
  try {
    const user = await account.create({
      userId: userId,
      email: email,
      password: password,
    });
    console.log(user);
  } catch (err) {
    console.log(err);
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    await account.createEmailPasswordSession({
      email: email,
      password: password,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getUser = async () => {
  try {
    const user = await account.get();
    if (!user) return redirect("/sign-in");

    const { documents } = await database.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      [
        Query.equal("acountId", user.$id),
        Query.select(["name", "email", "accountId", "joinedAt", "imageUrl"]),
      ]
    );
  } catch (err) {
    console.log(err);
  }
};

export const signOut = async () => {
  try {
    await account.deleteSession("current");
    return redirect("/sign-in");
  } catch (err) {
    console.log(err);
  }
};
