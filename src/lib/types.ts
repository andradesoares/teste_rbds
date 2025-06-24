export interface User {
  active: boolean;
  email: string;
  externalUserId: string | null;
  fullname: string;
  id: string;
  role: string;
}

export interface JwtPayload {
  id: string;
  email: string;
  fullname: string;
  active: boolean;
  role: string;
  iat: number;
  exp: number;
}

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
