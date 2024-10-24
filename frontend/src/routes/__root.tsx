import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <div className="font-inter">
      {/* <Navbar /> */}
      <div className="min-h-[100dvh] bg-[#fcfcfc] flex flex-col h-full w-screen pt-14">
        <Outlet />
      </div>
    </div>
  ),
});

// function Navbar() {
//   return (
//     <nav className="h-14 w-screen fixed top-0 shadow-sm border-b">
//       <div>Navbar</div>
//     </nav>
//   );
// }
