import { NumberInfoResultDto } from "@repo/api/gateway";

export type RegisterStepProps<TUser = NumberInfoResultDto | null> = {
  user: TUser;
  updateUser: (data: Partial<NumberInfoResultDto>) => void;
  phone: string;
  dashboardUpdate?: boolean
};