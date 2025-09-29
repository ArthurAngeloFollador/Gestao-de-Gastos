export const typeUserEnum = {
  ADMIN: "ADMIN",
  USER: "USER",
} as const;

export type typeUserEnum = (typeof typeUserEnum)[keyof typeof typeUserEnum];