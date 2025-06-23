export interface AuthResponse {
  success: boolean;
  data: {
    id: string;
    email: string;
    fullname: string;
    active: boolean;
    role: string;
    account: { jwt: string };
  };
}

export const getUserById = async (user_id: string): Promise<unknown> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${user_id}`);

  if (!response.ok) {
    throw new Error('An error occurred');
  }

  console.log(response.json());

  return response.json();
};
