export interface UserResponse {
  success: boolean;
  data: {
    active: boolean;
    email: string;
    externalUserId: string | null;
    fullname: string;
    id: string;
    role: string;
  };
}

export const getUserById = async (user_id: string, jwt: string): Promise<UserResponse> => {
  if (!user_id || !jwt) {
    throw new Error('An error occurred');
  }
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${user_id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

  if (!response.ok) {
    throw new Error('An error occurred');
  }

  return response.json();
};
