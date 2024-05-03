import AddUsers from "@/components/features/AddUsers";
import UserList from "@/components/features/UserList";

function page() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <AddUsers />
      <UserList />
    </div>
  );
}
export default page;
