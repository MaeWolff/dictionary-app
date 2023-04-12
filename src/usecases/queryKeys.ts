export const word = {
  all: ["word"] as const,
  lists: () => [...word.all, "list"] as const,
  list: (filters: string) => [...word.lists(), { filters }] as const,
};

export const queryKeys = {
  word,
};
