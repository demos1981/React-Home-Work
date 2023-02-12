import useUser from './useUser';

export default function useAuthorize(roles=[]){
 const user = useUser();


 return !!user && (roles.length === 0 || roles.includes(user.role) );
}