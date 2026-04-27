import { useQuery } from '@tanstack/react-query';
// import apiCaller from '@repo/api/apiCaller';
//import { NumberInfoResultDto } from '@repo/api/gateway';

export function useCurrentUser() {
  return {
    data: {

    }
  }
  // return useQuery< null>({
  //   queryKey: ['current-user'],
  //   queryFn: async () => {
  //     const res = await apiCaller.Panel.NumberInfo.Read();
  //     return res;
  //   },
  //   retry: false,   
  //   staleTime: 1000 * 60 * 5,  
  // });
}
