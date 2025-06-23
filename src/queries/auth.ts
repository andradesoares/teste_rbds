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

  if (!response.ok) {
    throw new Error('An error occurred');
  }

  return response.json();
};
