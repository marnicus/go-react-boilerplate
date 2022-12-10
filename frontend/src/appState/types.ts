export type AuthUser = {
  _id: string;
  username: string;
  profilePic: string;
};

export type AuthState = {
  status: string;
  authLoading: boolean;
  user: Object;
  authenticated: boolean;
  error: string;
};
