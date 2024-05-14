import { useConst } from "@chakra-ui/react"
import { AuthContext } from "../Pages/Provider/AuthProvider"

const useAuth = () => {
const auth = useConst(AuthContext);
  return auth;
}

export default useAuth
