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

export const login = async (credentials: {
  email: string;
  password: string;
}): Promise<AuthResponse> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (response.status == 401 || response.status == 404) {
    throw new Error('Incorrect Email/Password');
  }

  const responseData = await response.json();

  if (!responseData.data.active) {
    throw new Error('User Inactive');
  }

  return responseData;
};
