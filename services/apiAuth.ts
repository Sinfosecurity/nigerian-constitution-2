import { supabase } from "./supabase";
import { Provider } from "@supabase/supabase-js";
import { UserAttributes } from "@supabase/supabase-js";

export async function signup({
  email,
  password,
  fullName,
}: {
  email: string;
  password: string;
  fullName: string;
}) {
  {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          fullName,
          avatar: "",
        },
      },
    });
    if (error) {
      throw new Error(`Error signing up: ${error.message}`);
    }
    return data;
  }
}

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      throw new Error(`Error signing up: ${error.message}`);
    }
    return data;
  }
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) {
    throw new Error(`Error signing up: ${error.message}`);
  }
  return data?.user;
}

export async function getUserId() {
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    throw new Error(`Error signing up: ${error.message}`);
  }
  return data?.user?.id;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new Error(`Error signing up: ${error.message}`);
  }
}

export async function loginWithProvider(provider: Provider): Promise<void> {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: provider,
    });
    console.log("Sign in result:", { data, error });

    if (error) {
      throw new Error(`Error signing up: ${error.message}`);
    }
  } catch (error) {
    console.error("Error signing in with Provider:", error);
    throw new Error("Failed to sign in with Provider");
  }
}

type UpdateUserDataType = {
  password?: string;
  fullName?: string;
  avatar?: File;
};

export async function updateUserData({
  password,
  fullName,
  avatar,
}: UpdateUserDataType) {
  const updateData: UserAttributes = {};

  if (password) {
    updateData.password = password;
  }

  if (fullName) {
    updateData.data = { ...updateData.data, fullName };
  }

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);

  if (!avatar) return data;

  // Handle avatar upload
  const fileName = `avatar-${data.user.id}-${Math.random()}`;
  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  // Get the public URL for the uploaded avatar
  const { data: publicUrlData } = supabase.storage
    .from("avatars")
    .getPublicUrl(fileName);

  // Update user with new avatar URL
  const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: publicUrlData.publicUrl,
    },
  });

  if (error2) throw new Error(error2.message);

  return updatedUser;
}
