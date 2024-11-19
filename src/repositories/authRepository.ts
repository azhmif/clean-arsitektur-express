import User from "../entities/User";

export const findUserByEmail = async (email: string) => {
  return await User.findOne({ where: { email } });
};

export const createUser = async (data: any) => {
  return await User.create(data);
};
