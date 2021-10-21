import { AllGroupsProvider } from "./allGroups";
import { AuthProvider } from "./auth";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <AllGroupsProvider>{children}</AllGroupsProvider>
    </AuthProvider>
  );
};

export default Providers;
